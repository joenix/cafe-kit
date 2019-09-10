/* !!
 * Execute Transfer Embed ( in Parent Component )
 * ===== ===== =====
 */
export default ( field ) => {

	return field.$parent.transfer ? field.$parent : { transfer: () => {} };

}
