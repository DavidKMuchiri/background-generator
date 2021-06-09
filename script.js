var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomGenerator");

body.style.background = 
	"linear-gradient(to right, " + color1.value + ", "
	 + color2.value + ")";
	css.textContent = body.style.background + ";";

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", "
	 + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomGradientGenerator(stylebackground, stylebutton){
	var A = Math.floor((Math.random() * 256) + 0);
	var B = Math.floor((Math.random() * 256) + 0);
	var C = Math.floor((Math.random() * 256) + 0);
	var D = Math.floor((Math.random() * 256) + 0);
	var E = Math.floor((Math.random() * 256) + 0);
	var F = Math.floor((Math.random() * 256) + 0);

	if (stylebackground === "yes" && stylebutton ==="no"){

		return "linear-gradient(to right, rgb(" + A + ", "
		 + B + ", " + C + "), rgb(" + D + ", "
		 + E + ", " + F + "))";
	}else if (stylebackground === "no" && stylebutton ==="yes"){

		return "rgb(" + A + ", "
		 + E + ", " + C + ")";	
	}else{
		console.log("ERROR");
	}
}

function randomGradient(){
	
	body.style.background = randomGradientGenerator("yes", "no");
	randomBtn.style.background = randomGradientGenerator("no", "yes");

	css.textContent = body.style.background + ";";
}

randomBtn.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
