import { renderCart } from "./renderCart";
const modal = () => {
	const btnCart = document.querySelector('.button-cart');
	const modalCart = document.querySelector('#modal-cart');
	btnCart.addEventListener('click', () => {
		modalCart.style.display = 'flex';
		const cartArray = localStorage.getItem('cart') ?
			JSON.parse(localStorage.getItem('cart')) : [];
		renderCart(cartArray);
	})
	modalCart.addEventListener('click', (e) => {
		if ((!e.target.closest('.modal') && e.target.classList.contains('overlay')) || e.target.classList.contains('modal-close')) {
			modalCart.style.display = '';
		}	
	})
}
export { modal }