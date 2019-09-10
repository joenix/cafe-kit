class Gather
{
	constructor ( mode = 'local' )
	{
		this.conf( mode );
	}

	conf ( mode = 'local' )
	{
		if ( typeof window === 'object' )
		{
			this.storage = window[ mode + 'Storage' ];
		}
	}

	get ( key, mode )
	{
		if ( key.constructor === String )
		{
			let value, group = {};

			value = this.storage.getItem( key );

			if ( ['true', 'false'].includes( value ) )
			{
				value = Boolean( value );
			}

			else if ( /^\d+$/.test( value ) )
			{
				value = Number( value );
			}

			group[ key ] = value;

			return mode ? group : value;
		}

		if ( key.constructor === Array )
		{
			let group = {};

			key.map( (name) => {

				group[ name ] = this.get( name );

			});

			return group;
		}
	}

	set ( key, value )
	{
		if ( key.constructor === String )
		{
			return this.storage.setItem( key, value );
		}

		if ( key.constructor === Object )
		{
			for ( let i in key )
			{
				this.storage.setItem( i, key[ i ] );
			}
		}
	}

	del ( key )
	{
		if ( key.constructor === String )
		{
			this.storage.removeItem( key );
		}

		if ( key.constructor === Array )
		{
			key.map( (name) => {

				this.storage.removeItem( name );

			});
		}
	}

	clear ()
	{
		this.storage.clear();
	}
}

export default new Gather();
