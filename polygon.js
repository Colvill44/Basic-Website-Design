var numOfSides = prompt("The Tarheel would like to know how many sides in your polygon:");
numOfSides = validateEntry(numOfSides);
numOfSides = Math.round(numOfSides);
getShape(numOfSides);


function validateEntry(numOfSides){
	
	var num = numOfSides;
	if (isNaN(num) == true) {
		num = prompt("Your submission was not a number. The Tarheel would like to know how many sides in your polygon:");
	}
	if (0.499999 > num || num > 10) {
		num = prompt("Your submission was out of bounds. The Tarheel would like to know how many sides in your polygon:");
	}
	return num;
}

function getShape(numOfSides){
	
	switch(numOfSides){
		case 1:
			alert("Your polygon has " + numOfSides + " sides and is a henagon.");
			break;
		case 2:
			alert("Your polygon has " + numOfSides + " sides and is a digon.");
			break;
		case 3:
			alert("Your polygon has " + numOfSides + " sides and is a trigon.");
			break;
		case 4:
			alert("Your polygon has " + numOfSides + " sides and is a tetragon.");
			break;
		case 5:
			alert("Your polygon has " + numOfSides + " sides and is a pentagon.");
			break;
		case 6:
			alert("Your polygon has " + numOfSides + " sides and is a hexagon.");
			break;
		case 7:
			alert("Your polygon has " + numOfSides + " sides and is a heptagon.");
			break;
		case 8:
			alert("Your polygon has " + numOfSides + " sides and is a octagon.");
			break;
		case 9:
			alert("Your polygon has " + numOfSides + " sides and is a enneagon.");
			break;
		case 10:
			alert("Your polygon has " + numOfSides + " sides and is a decagon.");
			break;
	}
}