/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = './cars.json';
const outputEl = document.getElementById('output');

async function onFetch() {
	try {
		const response = await fetch(ENDPOINT);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (err) {
		console.log(err);
	}
}
const displayCars = (cars) => {
	cars.forEach((car) => {
		const brandDiv = document.createElement('div');
		const brandEl = document.createElement('h3');
		const modelsEl = document.createElement('div');
		brandEl.textContent = car.brand;
		car.models.forEach((model) => {
			const modelEl = document.createElement('p');
			modelEl.textContent = model;
			modelsEl.append(modelEl);
		});
		brandDiv.append(brandEl, modelsEl);
		outputEl.append(brandDiv);
	});
};

document.addEventListener('DOMContentLoaded', async () => {
	const cars = await onFetch();
	displayCars(cars);
});
