/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.getElementById('btn__element').addEventListener('click', (event) => {
	event.preventDefault();
	const initValue = +document.getElementById('btn__state').textContent;
	const value = initValue + 1;
	document.getElementById('btn__state').textContent = '';
	document.getElementById('btn__state').append(value);
});
