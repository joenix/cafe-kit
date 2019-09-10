/* !!
 * Param:
 * ===== ===== =====
 * context: []
 * watcher: {}
 * ===== ===== =====
 */
import Event from './event';

class Listener
{
	constructor

	(
		context = []
	)

	{
		this.context = context;

		this.watcher = {};
	}

	watch ( context = this.context, watcher = this.watcher )
	{
		return new Promise(

			(resolve, reject) => {

				context.map(

					(  directive, index ) => {

						if ( this[ directive ] )
						{
							this[ directive ]( watcher, directive );
						}
					}

				);

				resolve( this.watcher );

			}

		);

	}

	fresh ( watcher, i )
	{
		for ( i in watcher )
		{
			this.watcher[ i ] = watcher[ i ];
		}

		return this.watcher;
	}

	guard ( obj, prop )
	{
		return new Promise(

			(resolve, reject) => {

				Object.defineProperty( obj, prop, {

					set ( value )
					{
						resolve( value );
					}

				});

			}

		);
		return
	}

	scroll ( watcher, directive )
	{
		Event.bind(

			window,

			'scroll',

			( event ) => {

				watcher[ directive ] = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

				this.fresh( watcher );
			}

		);
	}

	resize ( watcher, directive )
	{
		Event.bind(

			window,

			'resize',

			( event ) => {

				watcher[ directive ] = {

					width:  window.innerWidth  || document.documentElement.offsetWidth  || document.body.clientWidth,

					height: window.innerHeight || document.documentElement.offsetHeight || document.body.clientHeight

				};

				this.fresh( watcher );

			}
		);
	}

}

export default new Listener();
