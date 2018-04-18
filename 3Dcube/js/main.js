
//Terefler
var ust = document.querySelector(".top");
var awagi= document.querySelector(".bottom");
var qabaq = document.querySelector(".front");
var arxa = document.querySelector(".back");
var sol = document.querySelector(".left");
var sag = document.querySelector(".right");

//Rengler
var first = document.querySelector("#topcolor");
var second = document.querySelector("#bottomcolor");
var third = document.querySelector("#frontcolor");
var fourth = document.querySelector("#backcolor");
var fifth = document.querySelector("#leftcolor");
var sixth = document.querySelector("#rightcolor");

//Beraberlikler
onchange = function(){
	ust.style.backgroundColor = first.value;
	ust.style.borderColor = first.value;
	awagi.style.backgroundColor = second.value;
	awagi.style.borderColor = second.value;
	qabaq.style.backgroundColor = third.value;
	qabaq.style.borderColor = third.value;
	arxa.style.backgroundColor = fourth.value;
	arxa.style.borderColor = fourth.value;
	sol.style.backgroundColor = fifth.value;
	sol.style.borderColor = fifth.value;
	sag.style.backgroundColor = sixth.value;
	sag.style.borderColor = sixth.value;
}

//Kubun hereketi
var cub = document.querySelector(".kub");
var horizontal = document.querySelector("#hor");
var vertikal = document.querySelector("#ver");
horizontal.onclick = function(){
	cub.classList.add("terpetX");
	cub.classList.remove("terpetY");
}
vertikal.onclick = function(){
	cub.classList.add("terpetY");
	cub.classList.remove("terpetX");
}
