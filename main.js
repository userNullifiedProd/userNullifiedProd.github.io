var temp = document.cookie
var darkMode = true;
var tickbox = document.getElementById('langTickbox');

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
	document.getElementById('userBackground').className = "card btn-lg btnDarkShadow";
	document.getElementById('userTitle').style = "color: white;";
	document.getElementById('userText').style = "color: white;";
	document.getElementById('userDiscord').style = "color: white;";   	
	document.getElementById('saviorBackground').style = "background-color: #2d3339";
	document.getElementById('saviorBackground').className = "card btn-lg btnDarkShadow";
	document.getElementById('saviorTitle').style = "color: white;";
	document.getElementById('saviorText').style = "color: white;";
	document.getElementById('saviorDiscord').style = "color: white;";  
	document.getElementById('spartaBackground').style = "background-color: #2d3339";
	document.getElementById('spartaBackground').className = "card btn-lg btnDarkShadow";
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
	document.getElementById('userBackground').className = "card btn-lg btnLightShadow";
	document.getElementById('userTitle').style = "color: black;";
	document.getElementById('userText').style = "color: black;";
	document.getElementById('userDiscord').style = "color: black;";   	
	document.getElementById('saviorBackground').style = "background-color: white;";
	document.getElementById('saviorBackground').className = "card btn-lg btnLightShadow";
	document.getElementById('saviorTitle').style = "color: black;";
	document.getElementById('saviorText').style = "color: black;";
	document.getElementById('saviorDiscord').style = "color: black;";  
	document.getElementById('spartaBackground').style = "background-color: white;";
	document.getElementById('spartaBackground').className = "card btn-lg btnLightShadow";
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
		changeColor()
	} else if (darkMode == false) {
		darkMode = true;
		changeColor()
	}
}

function changeLang() {
	if (tickbox.checked == false) {
		document.getElementById('homeNavText').textContent = "Domů";
		document.getElementById('aboutNavText').textContent = "O nás";
		document.getElementById('serversNavText').textContent = "Servery";
		document.getElementById('teamNavText').textContent = "Tým";
		document.getElementById('connectNavText').textContent = "Spojte se s námi";

		document.getElementById('customServerText1').textContent = "Vlastní Módované Minecraft Servery";
		document.getElementById('customServerText2').textContent = "Vlastní Módované Minecraft Servery";
		document.getElementById('customServerText3').textContent = "Vlastní Módované Minecraft Servery";

		document.getElementById('ourServers1').textContent = "Naše servery";
		document.getElementById('ourServers2').textContent = "Naše servery";
		document.getElementById('ourServers3').textContent = "Naše servery";

		document.getElementById('ourTeam1').textContent = "Náš Tým";
		document.getElementById('ourTeam2').textContent = "Náš Tým";
		document.getElementById('ourTeam3').textContent = "Náš Tým";

		document.getElementById('jumbotronText').textContent = "Právě jsme spustili náš nový Discord server! Můžete se přes něj spojit s ostatními hráči a s členy našeho týmu, a jednou za čas zde budeme rozdávat i nějaké odměny! Tak na co čekáte? Připojte se na náš discord, je tu zábava!";
		document.getElementById('discordText').textContent = "Připojte se na Discord";

		document.getElementById('about').textContent = "O nás";
		document.getElementById('aboutPar1').textContent = "Jsme tým složený ze 3 lidí, přinášející vám Minecraft servery pro naše modpacky.";
		document.getElementById('aboutPar2').textContent = "Vše začalo jen malým projektem pro kamarády, ale poté jsme si řekli, proč server neotevřít dalším lidem?";
		document.getElementById('aboutPar3').textContent = "Poté co i komunita řekla proč ne, jsme zařídili pořádný server hosting, vše nastavili a nyní vám přinášíme naše skvělé servery!";

		document.getElementById('stabilityTitle').textContent = "Stabilita";
		document.getElementById('stabilityText').textContent = "Naše servery jsou dost stabilní. Samozřejmě stát se může cokoliv, naše servery nás informují pokud se děje něco špatného, abychom se mohli připojit a problém vyřešit.";
		document.getElementById('speedTitle').textContent = "Rychlost";
		document.getElementById('speedText').textContent = "Nikdo nechce hrát na zalagovaném serveru. Naše servery optimalizujeme co nejlépe můžeme, aby na serveru bylo co nejméně lagu.";
		document.getElementById('experienceTitle').textContent = "Zkušenosti";
		document.getElementById('experienceText').textContent = "Zkušený Admin Team je klíč pro dobrý server. Náš Admin Team vám může pomoci s jakýmkoliv problémem, který s naším serverem můžete mít. Stačí se zeptat!";

		document.getElementById('spaceDesc').textContent = "Modpack zaměřený na prozkoumávání vesmíru a technologii.";
		document.getElementById('spaceDownload').textContent = "Modpack ke stažení zde";

		document.getElementById('team').textContent = "Poznejte náš Tým";

		document.getElementById('userText').textContent = "Barvy se asi nenašly. Vytvořil tuto stránku, a většinu kód pro modpacky.";

		document.getElementById('saviorText').textContent = "Ano, 'O' ne '0'. Hostuje naše servery, a tuto stránku! Také pomohl s tvořením modpacků.";

		document.getElementById('spartaText').textContent = "Aw man. Originalní tvůrce našich modpacků! Vybírá módy, a celkové zaměření modpacku.";

		document.getElementById('connectText').textContent = "Spojte se s námi" 

		document.getElementById('rights').textContent = "Všechna práva vyhrazena"

	} else if (tickbox.checked == true) {

		document.getElementById('homeNavText').textContent = "Home";
		document.getElementById('aboutNavText').textContent = "About";
		document.getElementById('serversNavText').textContent = "Servers";
		document.getElementById('teamNavText').textContent = "Team";
		document.getElementById('connectNavText').textContent = "Connect";

		document.getElementById('customServerText1').textContent = "Custom Modded Minecraft Servers";
		document.getElementById('customServerText2').textContent = "Custom Modded Minecraft Servers";
		document.getElementById('customServerText3').textContent = "Custom Modded Minecraft Servers";

		document.getElementById('ourServers1').textContent = "Our Server";
		document.getElementById('ourServers2').textContent = "Our Server";
		document.getElementById('ourServers3').textContent = "Our Server";

		document.getElementById('ourTeam1').textContent = "Our Team";
		document.getElementById('ourTeam2').textContent = "Our Team";
		document.getElementById('ourTeam3').textContent = "Our Team";

		document.getElementById('jumbotronText').textContent = "We have just launched our new Discord server! You can connect with other players and us here, and we might host a giveaway every so often! So what are you waiting for? Join our Discord, it's fun here!";
		document.getElementById('discordText').textContent = "Join the Discord";

		document.getElementById('about').textContent = "About us";
		document.getElementById('aboutPar1').textContent = "We are a team of 3, bringing you Minecraft servers for our custom modpacks.";
		document.getElementById('aboutPar2').textContent = "It all started as a small side projects for friends, but then we thought, why not let other people in?";
		document.getElementById('aboutPar3').textContent = "After the community said why not, we got proper server hosting, set everything up, and now we provide you with awesome servers!";

		document.getElementById('stabilityTitle').textContent = "Stability";
		document.getElementById('stabilityText').textContent = "Our servers are quite stable. Of course, anything can happen, our servers notify us, if anything bad is happening, so we can get on and fix it.";
		document.getElementById('speedTitle').textContent = "Speed";
		document.getElementById('speedText').textContent = "Nobody wants to play on a laggy server. We optimize our servers to the best of our abilities, to have as little lag as possible on our servers.";
		document.getElementById('experienceTitle').textContent = "Experience";
		document.getElementById('experienceText').textContent = "An experienced Admin Team is a key to a good server. Our Admin Team can help you with any problem you might have with our servers, just ask!";

		document.getElementById('spaceDesc').textContent = "A modpack about space exploration and technology.";
		document.getElementById('spaceDownload').textContent = "Modpack can be downloaded from here";

		document.getElementById('team').textContent = "Meet the Team";

		document.getElementById('userText').textContent = "Guess the colors were not found. He made this website, and most of the code for the modpacks.";

		document.getElementById('saviorText').textContent = "Yes, an 'O' not '0'. He hosts the servers, and this website! Also helped in making the modpacks.";

		document.getElementById('spartaText').textContent = "Aw man. The original creator of the modpacks! He's the one to pick mods, and the overall feel of the modpack.";

		document.getElementById('connectText').textContent = "Connect" 

		document.getElementById('rights').textContent = "All rights reserved"
	}
}
$.getJSON('https://ipinfo.io/json', function(response) {
    if (response.country == "CZ") {
	    tickbox.checked = false;
	    changeLang();
    } else {
	    tickbox.checked = true;
	    changeLang();
    }
});

changeColor();
changeLang();
