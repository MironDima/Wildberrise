import { renderCart } from "./renderCart";
const cardDeleteFunc = (id) => {
	const cardDelete = JSON.parse(localStorage.getItem('cart'))
	const newCard = cardDelete.filter(item => {
		return item.id !== id
	})
	localStorage.setItem('cart', JSON.stringify(newCard));
	renderCart(JSON.parse(localStorage.getItem('cart')));
}
export { cardDeleteFunc }








































// Метод массива .filter() позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.