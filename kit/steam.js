/* !!
 * Response:
 * Code: 0, -1, -2, -3, 4000 ...
 * Data: Json
 * Message: String
 * ===== ===== =====
 */

export default ( response, processor, failed, pop, returner ) => {

	if ( !(response.constructor === Object) )
	{
		return processor( response );
	}

	// Returner
	returner = Object.assign(
		{
			code: 'code',
			data: 'data',
			message: 'message'
		},
		// Global Returner
		window.returner,
		// Transfer Returner
		returner
	);

	// Pop Info
	pop = pop || window.console.log || window.alert;

	// Function Tolerance
	let tol = ( pro ) => {
		return pro.constructor === Function ? pro : new Function;
	}

	// CPU Factory
	let cpu = ( ref, right, mistake ) => {

		// Some Errors
		if ( ![0, 200, '0', '200'].includes( ref[ returner.code ] ) )
		{
			// Response Factory
			return (mistake || pop)( [undefined, null].includes( ref[ returner.message ] ) ? ref : ref[ returner.message ], ref );
		}

		// Done
		return tol( right )( ref[ returner.data ] );
	}

	// Processor is Function
	if ( processor.constructor === Function )
	{
		return cpu( response, processor, failed || pop);
	}

	// Processor is Json
	return cpu( response, processor[0], processor[ response[ returner.code ] ] );

}
