/* !!
 * let name = undefined;
 * defaulter( name, (name) => { return 'hi,' + name } );
 * defaulter( name, 'joenix', (name) => { return name !== 'joenix' } );
 * ===== ===== =====
 */

export default (

	val,

	def,

	condition = ( val ) => {

		return val === undefined;

	},

	cpu = ( def, val ) => {

		return [undefined, null].includes( def ) ? val : ( def.constructor === Function ? def( val ) : def );

	}

) => {

	return condition( val ) ? cpu( def, val ) : ( val || cpu( def, val ) );

}
