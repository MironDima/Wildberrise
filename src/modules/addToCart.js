const addToCart = (id) => {
	const array = JSON.parse(localStorage.getItem('array'));
	const arrayFind = array.find(item => item.id === id);  //массив 
	const cart = localStorage.getItem('cart') ?
		JSON.parse(localStorage.getItem('cart')) : [];
	if (cart.some(item => item.id === arrayFind.id)) {
		cart.map(item => {
			if (item.id === arrayFind.id) {
				item.count++;
			}
			return item
		})
	} else {
		arrayFind.count = 1;
		cart.push(arrayFind);
	}
	localStorage.setItem('cart', JSON.stringify(cart));
}
export { addToCart }
























// Метод массива some() позволяет узнать,
// есть ли в массиве хотя бы один элемент,
//  удовлетворяющий условию в функции-колбэке.
//   Колбэк-функция будет вызываться для каждого элемента
//    массива до тех пор, пока не вернётся true, либо пока
//     не закончатся элементы массива.