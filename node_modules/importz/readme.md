# Importz

### 1. Install
```console
npm install --save-dev importz;
```

### 2. Import
```console
import Importz from 'importz';
```

### 3. Use
```console
const List = Importz( ['one', 'two', 'three'], (name, cip) => {

	return cip( require('./script/' + name + '.js') );

});

console.log( List );
/*
{
	one: one.js,
	two: two.js,
	three: three.js
}
*/
```
