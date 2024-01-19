import { renderArrayData } from "./renderArrayData"
const filterSearch = (data, valueInput) => {
	const filterSearchArray = data.filter(item => item.name.toLowerCase().includes(valueInput.toLowerCase()));
	localStorage.setItem('array', JSON.stringify(data));
	if (window.location.pathname !== '/goods.html') {
		window.location.href = '/goods.html';
	} else {
		renderArrayData(filterSearchArray);
	}
}
export { filterSearch }





















// 1 чтобы был переход и сразу поиск нужной категории 