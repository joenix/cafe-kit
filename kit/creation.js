/* !!
 * Creation Json (Object):
 * ===== ===== =====
 * Values: [],
 * Keys: [],
 * Result: Increment ++
 * ===== ===== =====
 */
export default (

	values,

	keys,

	result = {},

	factory = ( value, key, result = {} ) => {

		return result[ key ] = value;

	},

	i

) => {

	if ( keys === undefined )
	{
		return undefined;
	}

	else if ( [String, Number].includes( keys.constructor ) )
	{
		result[ keys ] = values;
	}

	else if ( keys.constructor === Array )
	{
		for ( i in values )
		{
			factory( values[i], keys[i], result );
		}
	}

	return result;

}
