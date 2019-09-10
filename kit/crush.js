export default (

	value,

	prefix = 'e',

	variation = Math.floor( new Date().getTime() * Math.random() )

) => {

	return value === undefined ? ( prefix + variation ) : ( value.constructor === Number ? (prefix + value) : value );

}
