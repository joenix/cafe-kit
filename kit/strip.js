/* !!
 * Origin: Json
 * Group:
 * - Array: White List
 * - Json: Change List
 * ----- ----- -----
 * Result: Strip Data
 * ===== ===== =====
 */
export default ( origin, group, result = {} ) => {

	for ( let i in origin )
	{
		if ( group.constructor === Array )
		{
			if ( group.includes( i ) )
			{
				result[ i ] = origin[ i ];
			}
		}

		if ( group.constructor === Object )
		{
			if ( group[ i ] === undefined )
			{
				result[ i ] = origin[ i ];
			}
			else
			{
				result[ group[ i ] ] = origin[ i ];
			}
		}
	}

	return result;

}
