import { navigator } from './window';

export default ( exper, mode ) => {

	switch ( mode )
	{
		case 'http':
			return /^https?:\/\//.test( exper );

		case 'mobile':
			return /Mobile/.test( navigator.userAgent || exper );
	}

}
