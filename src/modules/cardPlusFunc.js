import { renderCart } from "./renderCart";
const cardPlusFunc = (id) => {
	const cartPlus = JSON.parse(localStorage.getItem('cart'));
	const newCart = cartPlus.map(item => {
		if (item.id === id) {
			item.count++;
		}
		return item
	})
	localStorage.setItem('cart', JSON.stringify(newCart));
	renderCart(JSON.parse(localStorage.getItem('cart')))
}
export { cardPlusFunc }