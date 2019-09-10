export default (

	group = {},

	callback = () => {},

	mode = 0,

	i,

	converge = []

) => {

	callback = callback.constructor === Function ? callback : () => {};

	mode = (mode && mode.constructor === Number) ? ( mode.toFixed(0) - 0 ) : 0;

	if ( group.constructor === Array )
	{
		if ( mode == -1 )
		{
			for ( i = group.length; i--; )
			{
				converge.push( callback( group[i], i ) );

				if ( converge[ i ] === false )
				{
					break;
				}
			}
		}

		else
		{
			for ( i = 0; i < group.length; i = i + ( mode > 1 ? mode : 1 ) )
			{
				converge.push( callback( group[i], i ) );

				if ( converge[ i ] === false )
				{
					break;
				}
			}
		}
	}

	if ( group.constructor === Object )
	{
		for ( i in group )
		{
			converge.push( callback( group[i], i ) );

			if ( converge[ i ] === false )
			{
				break;
			}
		}
	}

	return converge;

}
