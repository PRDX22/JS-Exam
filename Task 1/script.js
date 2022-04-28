/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const outputEl = document.getElementById('output');
document.getElementById('submit-btn').addEventListener('click', (event) => {
	event.preventDefault();
	outputEl.textContent = '';
	const inputValue = document.getElementById('search').value;
	const lbValue = inputValue * 2.2046;
	const gValue = inputValue / 0.001;
	const ozValue = inputValue * 35.274;
	const divEl = document.createElement('div');
	const lb = document.createElement('h3');
	const g = document.createElement('h3');
	const oz = document.createElement('h3');
	lb.textContent = `Mase svarais: ${lbValue} lb.`;
	g.textContent = `Mase gramais: ${gValue} g.`;
	oz.textContent = `Mase uncijom: ${ozValue} oz.`;
	divEl.append(lb, g, oz);
	outputEl.append(divEl);
});
