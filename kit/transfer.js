/* !!
 * Transfer Busse
 * ===== ===== ======
 */

class Transfer
{
	constructor ()
	{
		this.Author = 'joenix';

		if ( typeof window === 'object' && window.Vue )
		{
			window.Vue.use( this.render );
		}
	}

	render ( Vue )
	{
		return (

			( transfer ) => {

				Object.defineProperties(

					transfer,

					{
						on: {
							get ()
							{
								return this.$on;
							}
						},
						once: {
							get ()
							{
								return this.$once;
							}
						},
						off: {
							get ()
							{
								return this.$off
							}
						},
						emit: {
							get () {
								return this.$emit
							}
						}
					}

				);

				Vue.transfer = transfer;

				Object.defineProperty(

					Vue.prototype,

					'transfer',

					{
						get ()
						{
							return transfer
						}
					}
				);

			}
		)
		( new Vue() );
	}
}

export default new Transfer().render;
