import { renderArrayData } from "./renderArrayData";
const viewAll = (data) => {
		localStorage.setItem('array',JSON.stringify(data));
		if(window.location.pathname !== '/goods.html') {
			window.location.href = '/goods.html';
		}else{
			renderArrayData(data);
		}}
export {viewAll}