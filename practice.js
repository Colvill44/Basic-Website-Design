var items = ["Espresso", "Cappuccino"];
var costs = ["1.95", "3.45"];
var details = ["Delicious espresso, Wanna try it?", "Delicious Cappuccino!"];
var orderTotal = 0;
var orderItems;

window.onload = function() {
	
	var a = document.getElementByTagName("IMG");
	
	for (var i = 0; i < a.length; i++) {
		
		a[i].onclick = clickPic;
	}
}
	
	var clickPick = function() {
		
		var image = this.id;
		
		for(i = 0; i < items.length; i++){
			if (image == items[1]) {
				itemCost = costs[i];
				itemName = items[1];
				itemDetails = details[i];
				document.getElementById("order").innerHTML += "$" + itemCost + " - " + itemDetails + "<br>";
				orderTotal += parseFloat(itemCost);
				document.getElementById("total").innerHTML += "Total: $" + orderTotal.toFixed(2);
			}
		}
	}
;
		