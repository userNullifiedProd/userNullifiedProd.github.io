var temp = document.cookie
var darkMode = true;

function changeColor() {
	if (darkMode == true) {
	document.getElementById('body').style = "background-color: #343A40";
	document.getElementById('revLogo').src = "assets/logoWhite.png";
	document.getElementById('navbar').className = "navbar navbar-expand-md navbar-dark bg-dark sticky-top";
	document.getElementById('jumbotron').className = "row jumbotron darkBack";
	document.getElementById('jumbotronText').style = "color: white; !important";
	document.getElementById('aboutBackground').style = "background-color: #343A40;"
	document.getElementById('about').style = "color: white;";
	document.getElementById('aboutText').style = "color: white;";
	document.getElementById('stability').style = "color: white;";
	document.getElementById('speed').style = "color: white;";
	document.getElementById('experience').style = "color: white;";
	document.getElementById('team').style = "color: white;";
	document.getElementById('userBackground').style = "background-color: #2d3339";
	document.getElementById('userTitle').style = "color: white;";
	document.getElementById('userText').style = "color: white;";
	document.getElementById('userDiscord').style = "color: white;";   	
	document.getElementById('saviorBackground').style = "background-color: #2d3339";
	document.getElementById('saviorTitle').style = "color: white;";
	document.getElementById('saviorText').style = "color: white;";
	document.getElementById('saviorDiscord').style = "color: white;";  
	document.getElementById('spartaBackground').style = "background-color: #2d3339";
	document.getElementById('spartaTitle').style = "color: white;";
	document.getElementById('spartaText').style = "color: white;";
	document.getElementById('spartaDiscord').style = "color: white;";
	document.getElementById('connect').style = "color: white;";
	document.getElementById('footer').style = "background-color: #22262a;";
   } else if (darkMode == false) {
	document.getElementById('body').style = "background-color: white;";
	document.getElementById('revLogo').src = "assets/logoBlack.png";
	document.getElementById('navbar').className = "navbar navbar-expand-md navbar-light bg-light sticky-top";
	document.getElementById('jumbotron').className = "row jumbotron";
	document.getElementById('jumbotronText').style = "color: black;";
	document.getElementById('aboutBackground').style = "background-color: white;";
	document.getElementById('about').style = "color: black;";
	document.getElementById('aboutText').style = "color: black;";
	document.getElementById('stability').style = "color: black;";
	document.getElementById('speed').style = "color: black;";
	document.getElementById('experience').style = "color: black;";
	document.getElementById('team').style = "color: black;";
	document.getElementById('userBackground').style = "background-color: white;";
	document.getElementById('userTitle').style = "color: black;";
	document.getElementById('userText').style = "color: black;";
	document.getElementById('userDiscord').style = "color: black;";   	
	document.getElementById('saviorBackground').style = "background-color: white;";
	document.getElementById('saviorTitle').style = "color: black;";
	document.getElementById('saviorText').style = "color: black;";
	document.getElementById('saviorDiscord').style = "color: black;";  
	document.getElementById('spartaBackground').style = "background-color: white;";
	document.getElementById('spartaTitle').style = "color: black;";
	document.getElementById('spartaText').style = "color: black;";
	document.getElementById('spartaDiscord').style = "color: black;";
	document.getElementById('connect').style = "color: black;";
	document.getElementById('footer').style = "background-color: #3f3f3f;";
   }
}

function changeTheme() {
	if (darkMode == true) {
		darkMode = false;
		document.cookie = "darkMode=false";
		console.log(document.cookie)
		changeColor()
	} else if (darkMode == false) {
		darkMode = true;
		document.cookie = "darkMode=true";
		console.log(document.cookie)
		changeColor()
	}
}

if (temp == "") {
	document.cookie = "darkMode=true"
}
if (temp = "darkMode=true") {
	darkMode = true;
}
if (temp = "darkMode=false") {
	darkMode = false;
}
