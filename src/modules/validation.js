const validation = (inputs) => {
	let succses = true
	inputs.forEach(input => {
		if (input.name === 'nameCustomer') {
			if (input.value.length < 3) {
				succses = false;
				
			}
		} else if (input.name === 'phoneCustomer') {
			if (input.value.length < 9) {
				succses = false;
				console.log('false phoneCustomer');
			}
		}
		
	})
 	return succses
}
export { validation }