export default (

	value,

	reverse = false,

	transfer = ( observe = {}, result = [], i ) => {

		for ( i in observe )
		{
			result[ i ] = observe[ i ];
		}

		return result;

	}

) => {

	if ( value === undefined )
	{
		return reverse ? '' : [];
	}

	if ( value.constructor === String )
	{
		return reverse ? value : value.split(' ');
	}

	if ( value.constructor === Object )
	{
		return reverse ? JSON.stringify( value ) : transfer( value );
	}

	if ( value.constructor === Array )
	{
		return reverse ? value.join(' ') : [...value];
	}

}
