export default ( time = '', fmt = 'yyyy-MM-dd' ) => {

	if ( !time )
	{
		return;
	}

	// Tolerant
	if (time.constructor != Date)
	{
		time = (
			(temp) => {
				return temp.toString() == 'Invalid Date' ? new Date( Date.parse( time.replace(/-/g, '/') ) ) : temp;
			}
		)( new Date(time) );
	}

	// Rule
	const rule = {
		// Month
		'M+': time.getMonth() + 1,
		// Day
		'd+': time.getDate(),
		// Hour
		'h+': time.getHours(),
		// Minute
		'm+': time.getMinutes(),
		// Second
		's+': time.getSeconds(),
		// Quarter
		'q+': Math.floor((time.getMonth() + 3) / 3),
		// Millisecond
		'S': time.getMilliseconds()
	};

	// Year
	if ( /(y+)/.test(fmt) )
	{
		fmt = fmt.replace( RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length) );
	}

	// Hand
	for ( let k in rule )
	{
		if ( new RegExp('(' + k + ')').test(fmt) )
		{
			fmt = fmt.replace( RegExp.$1, (RegExp.$1.length == 1) ? (rule[k]) : (('00' + rule[k]).substr(('' + rule[k]).length)) );
		}
	}

	// Result
	return fmt;
};
