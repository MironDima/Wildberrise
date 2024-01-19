import { renderArrayData } from "./renderArrayData";
const localstorageCheck = () => {
	if(localStorage.getItem('array') && window.location.pathname === '/goods.html' ) {
		renderArrayData(JSON.parse(localStorage.getItem('array')));
	}
}
export {localstorageCheck}