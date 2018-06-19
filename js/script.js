document.getElementById('calculate-button').onclick = function() 
{
	//coletar números dentro das caixas de input
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getResult(val1, val2, operation);

	// Mostrar o resultado dentro do elemento com id "result"
	let resultElement = document.getElementById('result');

	//H2 recebe o valor para printar
	resultElement.innerHTML = operationResult;

	//Display result according to the operation selected
	function getResult (val1, val2, operation) {
		if (operation === '+') {
			return val1 + val2;	
		} else if (operation === '-') {
			return val1 - val2;	
		} else if (operation === '*') {
			return val1 * val2;
		} else if (operation === '/') {
			return val1 / val2;
		}
	}	
	
}