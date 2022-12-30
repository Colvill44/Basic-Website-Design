let person = new Array();
let salaries = new Array();
var count = 0;


function addSalary(){
	var personAdd = document.getElementById("name").value;
	var salaryAdd = document.getElementById("salary").value;
	
	if (personAdd === ""){
		alert("Error. Please Enter a Name.");
		document.getElementById("name").value = "";
		return;
	}
	
	if (isNaN(salaryAdd)){
		alert("Error. Only Enter Numbers.");
		document.getElementById("salary").value = "";
		return;
	}
	
	person[count] = personAdd;
	salaries[count] = parseInt(salaryAdd);
	alert("Name added: " + person[count] + " Salary added: " + salaries[count]);
	count++;
	document.getElementById("name").value = "";
	document.getElementById("salary").value = "";
	document.getElementById("name").focus();
}


function displayResults(){
	var highSalary = 0;
	var avgSalary = 0;
	var totalSalary = 0;
	var index = 0;	
	let arrayLength = salaries.length;
	
	for (let i = 0; i < arrayLength; i++){
		totalSalary += parseInt(salaries[i]);
		if (salaries[i] > highSalary){
			highSalary = salaries[i];
		}
		index++;
	}
	
	avgSalary = parseInt(totalSalary / index);

	
	document.getElementById("average").innerHTML = "Running Average: $" + avgSalary;
	document.getElementById("high").innerHTML = "High Salary: $" + highSalary;
	document.getElementById("name").focus();
}

function displaySalary(){
	if (document.getElementById('salary_table') !== null){
		document.getElementById('salary_table').innerHTML = "";
	}
	var table = document.createElement("table");
    var trOne = document.createElement("tr"); 
	var thOne = document.createElement("th"); 
	thOne.innerHTML = "Name";
	var thTwo = document.createElement("th"); 
	thTwo.innerHTML = "Salary";
	trOne.appendChild(thOne); 
	trOne.appendChild(thTwo); 
	table.appendChild(trOne);

    for(var i = 0; i < person.length; i++){
        var trTwo = document.createElement("tr"); 
		var tdOne = document.createElement("td"); 
		tdOne.innerHTML = person[i]; 
		var tdTwo = document.createElement("td"); 
		tdTwo.innerHTML = "$" + salaries[i]; 
		trTwo.appendChild(tdOne); 
		trTwo.appendChild(tdTwo); 
        table.appendChild(trTwo);
    }
	table.id = "salary_table";
	document.getElementById('container').appendChild(table);
	document.getElementById("name").focus();
}
	
	




	