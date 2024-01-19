import { filterCategory } from "./filterCategory";
import { filterSearch } from "./filterSearch";
import { getData } from "./getData";
import { viewAll } from "./viewAll";
const changeLink = () => {
	const links = document.querySelectorAll('.navigation-item > a');
	links.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const linkText = link.textContent;
			const linkCategory = link.dataset.field;
			getData('db/db.json').then(data => filterCategory(data, linkText, linkCategory));
		})
	})
}
const changeSearch = () => {
	const input = document.querySelector(".search-block > input");
	const searchBtn = document.querySelector(".search-block > button");
	searchBtn.addEventListener('click', () => {
		getData('db/db.json').then(data => filterSearch(data, input.value));
	})
}
const changeViewsAll = () => {
	const more = document.querySelector('.more');
	const buttonViewAll = document.querySelectorAll('.button-view-all');
	if (buttonViewAll) {
		buttonViewAll.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault()
				getData('db/db.json').then(data => viewAll(data));
			})
		})
	}
	if (more) {
		more.addEventListener('click', (e) => {
			e.preventDefault()
			getData('db/db.json').then(data => viewAll(data));
		})
	}
}
export { changeLink, changeSearch, changeViewsAll }