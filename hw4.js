window.onload = function (){ 
for (var i=99; i >=0; i--) {
	
	if (i <= 99 && i > 1) {
	var j = i-1;
	var node = document.createElement("p");
	var textnode = document.createTextNode(i +  " bottles of beer on the wall, " +  i + " bottles of beer.\n Take one down and pass it around, " + j + " bottles of beer on the wall.");  
	node.appendChild(textnode);
	document.getElementById("main").appendChild(node); 
	}
	else if (i == 1) {
	var j = i-1;
	node = document.createElement("p");
	textnode = document.createTextNode(i +  " bottle of beer on the wall, " +  i + " bottle of beer.\n Take one down and pass it around, " + j + " bottle of beer on the wall.");
	node.appendChild(textnode);
	document.getElementById("main").appendChild(node);
	}
	else if (i == 0) {
    node = document.createElement("p");
	textnode = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
	node.appendChild(textnode);
	document.getElementById("main").appendChild(node);
	}
	}
}
