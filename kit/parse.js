export default ( data ) => {

	if ( data.constructor === String )
	{
		return data;
	}

	try
	{
		data = JSON.parse( data );
	}
	catch (e)
	{
		try
		{
			data = $.parseJSON( data );
		}
		catch (e)
		{
			data = eval('(' + data + ')');
		}
	}

	return data;

}
