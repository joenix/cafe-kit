export default (

	core = {},

	method = {},

	mode = '',

	draw = ( method ) => {

		return method.default || method;

	},

	i

) => {

	if ( core.constructor === Function )
	{
		for ( i in method )
		{
			switch (mode)
			{
				case 'use':
					core.use( draw( method ) );
					break;

				case 'extend':
					core.extend( i, draw( method[i] ) );
					break;

				case 'directive':
					core.directive( i, draw( method[i] ) );
					break;

				default: core.prototype[i] = draw( method[i] );
			}
		}
	}

	if ( core.constructor === Object )
	{
		for ( i in method )
		{
			core[i] = draw( method[i] );
		}
	}

	return core;
}
