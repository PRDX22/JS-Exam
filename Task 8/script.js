/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
	this.a = a;
	this.b = b;
}
Calculator.prototype.sum = function () {
	const sum = this.a + this.b;
	return sum;
};
Calculator.prototype.sub = function () {
	const sub = this.a - this.b;
	return sub;
};
Calculator.prototype.multi = function () {
	const multi = this.a * this.b;
	return multi;
};
Calculator.prototype.div = function () {
	const div = this.a / this.b;
	return div;
};

const sum = new Calculator(4, 2);
const sub = new Calculator(4, 2);
const multi = new Calculator(4, 2);
const div = new Calculator(4, 2);
console.log(sum.sum());
console.log(sub.sub());
console.log(multi.multi());
console.log(div.div());
