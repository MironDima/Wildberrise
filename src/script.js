import {changeLink, changeSearch, changeViewsAll} from "./modules/changeGoods";
import {getData} from "./modules/getData";
import { getPriceCard } from "./modules/getPriceCard";
import { localstorageCheck } from "./modules/localstorageCheck";
import { modal } from "./modules/modal";
import { modalForm } from "./modules/modalForm";
modal();
getData('db/db.json').then(data => (data));
localstorageCheck();
changeLink();
changeSearch();
changeViewsAll();
getPriceCard();
modalForm({
	formClass : '.modal-form',
	someElem : [
		{
			type : 'block',
			totalClass : 'card_table__total'
		}
	]
});

