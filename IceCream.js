let AgMoney = prompt("How much money does AG have?"); 
let DayanaMoney = prompt("How much money does Dayana have?");
let SvMoney = prompt("How much money does Salvador/Violet have?");

if (AgMoney >= 1 && AgMoney <= 1.4){
	alert("Ag must buy the Apple one");
} else if (AgMoney >= 1.5 && AgMoney <= 1.6){
	alert("Ag must buy the coconut");
} else if (AgMoney >= 1.7  && AgMoney <= 2.8){
	alert("Ag must buy the tamarind");
} else if (AgMoney >= 2.9){
	alert("Ag must buy the chocolate one");
} else {
	alert("Apparently AG have no money");
}

if (DayanaMoney >= 1 && DayanaMoney <= 1.4){
	alert("Dayana must buy the Apple one");
} else if (DayanaMoney >= 1.5 && DayanaMoney <= 1.6){
	alert("Dayana must buy the coconut");
} else if (DayanaMoney >= 1.7  && DayanaMoney <= 2.8){
	alert("Dayana must buy the tamarind");
} else if (DayanaMoney >= 2.9){
	alert("Dayana must buy the chocolate one");
} else {
	alert("Apparently Dayana have no money");
}

if (SvMoney >= 1 && SvMoney <= 1.5){
	alert("SV must buy the Apple one");
} else if (SvMoney >= 1.5 && SvMoney <= 1.6){
	alert("SV must buy the coconut");
} else if (SvMoney >= 1.7  && SvMoney <= 2.8){
	alert("SV Dayana must buy the tamarind");
} else if (SvMoney >= 2.9){
	alert("SV must buy the chocolate one");
} else {
	alert("Apparently Salvador/Violet have no money");
}