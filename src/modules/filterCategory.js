import { renderArrayData } from "./renderArrayData";
const filterCategory = (data, value, category) => {
		const filterData = category ?  data.filter(item => item[category] === value) : data;
		localStorage.setItem('array',JSON.stringify(filterData));
		if(window.location.pathname !== '/goods.html') {
			window.location.href = '/goods.html';
		}else{
			renderArrayData(filterData)
		}
}
export { filterCategory }