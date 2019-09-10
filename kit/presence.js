/* !!
 * 持续化 解决方案
 * ===== ===== =====
 */
class Presence
{
	constructor ( executer )
	{
		this.executer = executer;

		return this;
	}

	resolve ()
	{}

	reject ()
	{}

	then ( resolve, reject )
	{
		this.executer( resolve, reject );

		return this;
	}
}

export default Presence;
