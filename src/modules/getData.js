const getData = (url) => {
	return fetch(url)
	.then((res) => res.json());
}
export  {getData}