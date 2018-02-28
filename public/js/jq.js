getInt = (val) => {
	let intVal = val;
	$("#prompt"+intVal).append(" Loading...");
	let getUrl = '/calculate/'+intVal;

	$.get(getUrl,(data) => {
		if(data){
			let parsedData = JSON.parse(data);
			if (intVal == 1) {
				$("#textarea"+intVal).val(parsedData.val1);
				console.log(data);
			}
			else{
				$("#textarea"+intVal).val(parsedData.val_2);
				console.log(data);
			}
		}
		else{
			alert("Error:"+ data);
		}
	});

}

calSum = () => {
	let intOne = Number($(textarea1).val());
	let intTwo = Number($(textarea2).val());

	if (intOne == '' || intTwo == '') {
		alert('No integers to work with!');
	}
	else{
		let intSum = intOne + intTwo ;
		$("#textareaSum").val(intSum);
	}
}

primeFactorSum = () => {
	let intTextSum = $("#textareaSum").val();
	let getUrl = '/primefactors/'+intTextSum;

	if (intTextSum) {
		$.get(getUrl,(data) => {
			if(data){
				$("#primeTitle").html("<p>Prime Factors listed below (demarcated with commas):</p>").show();
				$("#primefactors").html(data.join());			
			}
			else{
				alert("Oops something went wrong");
				$("#primefactors").html(data).show();
			}
		})
	}
	else{
		alert('No Sum of integers to work with!');
	}

}