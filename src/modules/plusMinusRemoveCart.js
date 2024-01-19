import { cardDeleteFunc } from "./cardDeleteFunc";
import { cardMinusFunc } from "./cardMinusFunc";
import { cardPlusFunc } from "./cardPlusFunc";
const plusMinusRemoveCart = (tr, id) => {
	tr.addEventListener('click', (e) => {
		if (e.target.classList.contains('cart-btn-minus')) {
			cardMinusFunc(id);
		}
		else if (e.target.classList.contains('cart-btn-plus')) {
			cardPlusFunc(id);
		}
		else if (e.target.classList.contains('cart-btn-delete')) {
			cardDeleteFunc(id);
		}
	})
}
export { plusMinusRemoveCart }