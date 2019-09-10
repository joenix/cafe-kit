class Sheet
{
	constructor ( sheet = [] )
	{
		this.sheet = sheet;
	}

	strip ( parameter = {}, sheet = this.sheet, result = {} )
	{
		for ( let i in sheet )
		{
			if ( this.contain( sheet[ i ], sheet ) )
			{
				result[ sheet[ i ] ] = parameter[ sheet[ i ] ];
			}
		}

		return result;
	}

	filter ( group, executer, i, result = {} )
	{
		for ( i in group )
		{
			result[ i ] = executer( group[ i ], i );
		}

		return result;
	}

	cut ( value )
	{
		return value === undefined ? [ value ] : ( value.constructor === String ? value.split(' ') : [ value ]  )
	}

	contain ( mode, condition )
	{
		return ( condition.constructor === Array ? condition : condition.split(' ') ).includes( mode );
	}

	calculate ( value, defaulter )
	{
		if ( isNaN( Number( value ) ) )
		{
			return value;
		}

		return value > 0 ? ( value + 'px' ) : defaulter;
	}

	executer ( value, mode, result = false )
	{
		if ( this.contain( mode, '' ) )
		{
			result = undefined;
		}

		else if ( this.contain( mode, 'width height' ) )
		{
			result = this.calculate( value, undefined );
		}

		else if ( this.contain( mode, 'margin padding' ) )
		{
			result = this.cut( value ).map( ( one ) => { return this.calculate( one, undefined ) });
		}

		else if ( this.contain( mode, 'marginLeft marginRight marginTop marginBottom paddingLeft paddingRight paddingTop paddingBottom' ) )
		{
			result = this.calculate( value, undefined );
		}

		else if ( this.contain( mode, 'float' ) )
		{
			result = value;
		}

		else if ( this.contain( mode, 'position' ) )
		{
			result = value;
		}

		return result;
	}

	render ( parameter )
	{
		return this.filter( this.strip( parameter ), ( value, key ) => {

			return this.executer( value, key );

		});
	}
}

export default new Sheet(

[
	'width',
	'height',

	'margin',
	'marginTop',
	'marginBottom',
	'marginLeft',
	'marginRight',

	'padding',
	'paddingTop',
	'paddingBottom',
	'paddingLeft',
	'paddingRight',

	'float',
	'position'
]

);
