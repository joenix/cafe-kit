export default ( link, mode ) => {

	if ( link )
	{
		return mode ? window.location.replace( link ) : ( window.location.href = link );
	}

	window.location.reload();

}
