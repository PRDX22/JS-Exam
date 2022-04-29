/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
	make: 'audi',
	model: 'A6',
	year: 2005,
	color: 'white',
};
// grazina pacius "key" pavadinimus
const objectKey = Object.keys(audi);
console.log(objectKey);

// grazina "key" value
const objectValue = Object.values(audi);
console.log(objectValue);
