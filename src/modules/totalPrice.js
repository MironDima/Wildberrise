const totalPrice = (cartArray) => {
	const totalModal =  document.querySelector('.card-table__total');
	const totalSum = cartArray.reduce((acc, item) => {
		return acc + +item.price * +item.count;
	}, 0);
	totalModal.innerHTML = `${totalSum}$`;
}
export { totalPrice }