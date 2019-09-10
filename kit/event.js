class Event
{
	constructor ()
	{}

	bind ( element, mode, hand )
	{
		return new Promise(

			(resolve, reject) => {

				element.attachEvent ?

					element.attachEvent( 'on' + mode, hand || resolve ) :

					element.addEventListener( mode, hand || resolve, false );

			}

		);
	}

	remove ( element, mode, hand )
	{
		return new Promise( (resolve, reject) => {

			element.datachEvent ?

				element.datachEvent( 'on' + mode, hand ) :

				element.removeEnentListener( mode, hand, false );

		});
	}

	stop ( event )
	{
		if ( event.stopPropagation )
		{
			event.stopPropagation();
		}
		else
		{
			event.cancelBubble = true;
		}
	}

	prevent ( event )
	{
		if ( event.preventDefault )
		{
			event.preventDefault();
		}
		else
		{
			event.returnValue = false;
		}
	}
}

export default new Event();
