import { plusMinusRemoveCart } from "./plusMinusRemoveCart";
import { totalPrice } from "./totalPrice";
const renderCart = (cartArray) => {
	const cartTableModal = document.querySelector('.cart-table__goods');
	cartTableModal.innerHTML = '';
	cartArray.forEach(cart => {
		const tr = document.createElement('tr');
		tr.innerHTML = `
	<td>${cart.name}</td> 
	<td>${cart.price}$</td>
	<td><button class="cart-btn-minus">-</button></td>
	<td>${cart.count}</td>
	<td><button class=" cart-btn-plus">+</button></td>
	<td>${+cart.count * + cart.price}</td>
	<td><button class="cart-btn-delete">x</button></td>`
		cartTableModal.append(tr);
		plusMinusRemoveCart(tr, cart.id);
	});
	totalPrice(cartArray)
}
export { renderCart }