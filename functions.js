//Funcoes Gerais


function rand_item(items)
{
	return items[Math.floor(Math.random()*items.length)]; 
}

function peg(obj){
	return document.getElementById(obj);
}

function seta(obj){
	document.getElementById(obj).checked = true;
}

function palavra(months){
	const random = Math.floor(Math.random() * months.length)	
	return months[random];
}

function habilita(obj,valor){
	var els = document.getElementsByClassName(obj);
	for ( var i = 0; i < els.length; ++i ) {
	  els[ i ].disabled = valor;
	}
}

function ShowResults(value, index, ar) {
	alert(index);
}

function sorteia_combo(combo){
	combo.selectedIndex = Math.floor(Math.random() * combo.length);
}	
	

