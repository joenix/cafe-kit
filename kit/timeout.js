export default (

	executer = () => {},

	time = 1000,

	count = 1,

	recursion = ( executer, time, count, out ) => {

		out = setTimeout(

			() => {

				count--;

				if ( executer( count ) === false )
				{
					count = 0;
				};

				clearTimeout( out );

				if ( count > 0 )
				{
					recursion( executer, time, count );
				}

			},

			time

		);

	}

) => {

	recursion( executer, time, count );

}
