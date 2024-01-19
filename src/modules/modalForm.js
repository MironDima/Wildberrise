import { sendForm } from "./sendForm";
const modalForm = ({formClass, someElem = []}) => {

	const modalForm = document.querySelector(formClass);
	modalForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(modalForm);
		const cartArray = localStorage.getItem('cart') ?
		JSON.parse(localStorage.getItem('cart')) : [];
		const formBody = {} 
		formData.forEach((value,key) => {
			 formBody[key] = value;
		})
		someElem.forEach(elem => {
		const newElem = document.getElementById(elem.totalClass);
			formBody[elem.totalClass] = (newElem.textContent).slice(0,-1);
		})
		sendForm(formBody,cartArray)
	})};
export { modalForm }