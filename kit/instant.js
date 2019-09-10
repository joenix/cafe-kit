import Vue from 'vue';

export default ( component, executer ) => {

	return (

		( instant ) => {

			return executer( new instant().$mount() );

		}

	)

	(
		Vue.extend( component )
	);

}
