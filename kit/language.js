import { navigator } from './window';

export default ( navigator.language || navigator.browserLanguage ).toLowerCase()
