import { validation } from "./validation"

const sendForm = (formData, cartArray) => {
	const modal = document.querySelector('.modal');
	console.log(modal);
	
	const succesText = 'Данные отправлены!'
	const errorText = 'Проверьте вводимые данные'
	let statusBlock = document.createElement('div');
	statusBlock.classList.add('inform')
	modal.append(statusBlock);

	const inputs = document.querySelectorAll('.modal-input');
	if (validation(inputs)) {
		const modalCart = document.querySelector('#modal-cart');
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				cart: cartArray,
				name: formData.nameCustomer,
				phone: formData.phoneCustomer,
				total: formData.card_table__total
			}),
			headers: {
				'Content-Type': 'application/json'
			},
		})
			.then(res => res.json())
			.then(formData => {
				statusBlock.textContent = succesText;
				setTimeout(() => {
					modalCart.style.display = '';
				}, 1800);

				inputs.forEach(input => {
					input.value = ''
					setTimeout(() => {
						statusBlock.textContent = '';
					}, 1800);
				})
				localStorage.removeItem('cart');
			})
			.catch(error => statusBlock.textContent = errorText)
	} else {
		statusBlock.textContent = errorText
		statusBlock.style.color = 'red'
		inputs.forEach(input => {
			input.style.color = 'red'
		})
		setTimeout(() => {
			statusBlock.textContent = '';
		}, 1800);
		console.log('ошибка');
	}
}
export { sendForm }