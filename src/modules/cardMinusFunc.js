import { renderCart } from "./renderCart";
const cardMinusFunc = (id) => {
	const cardMinus = JSON.parse(localStorage.getItem('cart'));
	const newCard = cardMinus.map(item => {
		if (item.id === id) {
			if(item.count > 0) {
				item.count--;
			}
		}
		return item
	})
	localStorage.setItem('cart', JSON.stringify(newCard));
	renderCart(JSON.parse(localStorage.getItem('cart')));
}
export { cardMinusFunc }







































