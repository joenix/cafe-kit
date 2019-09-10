class Axios
{
	constructor ()
	{
		// Axios Object
		this.axios = require('axios').create();

		// Preset Param
		this.preset = {};

		// Preset Request
		this.request = () => {};

		// Preset Response
		this.response = () => {};
	}

	// Defaulter
	defaulter ( config = {} )
	{
		if ( config.preset )
		{
			Object.assign( this.preset, config.preset );
		}

		if ( config.request )
		{
			Object.assign( this.request, config.request );
		}

		if ( config.response )
		{
			Object.assign( this.response, config.response );
		}
	}

	// Promise All
	promise ( group, callback )
	{
		return this.axios.all( group ).then( this.axios.spread( callback ) );
	}

	// Http
	http ( method, url = '', params = {}, config = {} )
	{
		this.axios[ method ]( url, method == 'get' ? { params } : params, config )

			.then(

				(response) => {

					return response.data;

				}

			);
	}

	// Get
	get ( url = '', param = {}, config = {} )
	{
		this.http('get', url, param, config);
	}

	// Post
	post ( url = '', param = {}, config = {} )
	{
		this.http('post', url, param, config);
	}
}

export default new Axios();
