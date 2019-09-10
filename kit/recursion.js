export default ( condition, time, max, action, timeout ) => {

	if ( condition.constructor !== Function )
	{
		return false;
	}

	time = time || 1000, max = max || 3;

	action = () => {

		return setTimeout( () => {

			max--;

			if ( condition() )
			{
				max = 0;
			}

			if ( max <= 0 )
			{
				return clearTimeout( timeout );
			}

			action();

		}, time);

	};

	timeout = action();

}
