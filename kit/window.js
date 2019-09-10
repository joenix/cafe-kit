module.exports = (

	( preset ) => {

		try
		{
			return window;
		}
		catch (e)
		{
			/*
			try
			{
				Object.assign( global, preset );

				return global;
			}
			catch (e)
			{
				return preset;
			}
			*/
			return preset;
		}

	}

)

(
	/* Dom Compatible For Node */

	{
		document: {

			body: {}

		},

		localStorage: {

			getItem () {},

			setItem () {}

		},

		sessionStorage: {

			getItem () {},

			setItem () {}

		},

		navigator: {

			language: {

				toLowerCase () {}

			},

			browserLanguage: {

				toLowerCase () {}

			}

		}

	}
)
