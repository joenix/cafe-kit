module.exports = (

	( Importz, Preset ) => {

		return Importz(

			Preset,

			(name, cip) => {

				return cip( require('./kit/' + name) );

			}

		);

	}

)

(

	require('importz'),

	require('./preset').default

);
