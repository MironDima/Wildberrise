import {addToCart} from "./addToCart";
const getPriceCard = () => {
const blockCards = document.querySelector('.long-goods-list');
blockCards.addEventListener('click', (e) => {
	if(e.target.closest('.add-to-cart')){
		const buttonsPrice = e.target.closest('.add-to-cart');
		const btnId = buttonsPrice.dataset.id;  																		//получить id со страницы
		addToCart(btnId);
	}
})}
export {getPriceCard}