/*let current = "home"



let mainelem = document.getElementById("main")
let character = document.getElementById("character")
let choice = document.getElementById("choice")

main.style.display = "block"
character.style.display = "none"
choice.style.display = "none"

main.style.display = "none" //this is hidden
character.style.display = "block" //this is visible

//......................block

let image_choice = document.getElementById("image-choice")
image_choice.src = "panel2.png"*/

window.addEventListener("load", function() {
	let panel1 = document.getElementById("panel1").contentDocument;
	let radio = panel1.getElementById("radio");
	let sRadio = document.getElementById("s-radio");
	radio.style.cursor = 'pointer';
	radio.addEventListener('click', () => {
		if(sRadio.paused){
			sRadio.play();
		}
		else{
			sRadio.pause();
		}
	})

	let panel2 = document.getElementById("panel2").contentDocument;
	let paper = panel2.getElementById("paper");
	let sPaper = document.getElementById("s-paper");
	paper.style.cursor = 'pointer';
	paper.addEventListener('click', () => {
		if (sPaper.paused) {
			sPaper.play();
		}
		else {
			sPaper.pause();
		}
	})

	let panel4a = document.getElementById("Apanel1").contentDocument;
	let phone = panel4a.getElementById("phone");
	let sPhone = document.getElementById("s-phone");
	phone.style.cursor = 'pointer';
	phone.addEventListener('click', () => {
		if (sPhone.paused) {
			sPhone.play();
		}
		else {
			sPhone.pause();
		}
	})

	let panel5a = document.getElementById("Apanel2").contentDocument;
	let knock = panel5a.getElementById("doorknob");
	let sKnock = document.getElementById("s-knock");
	knock.style.cursor = 'pointer';
	knock.addEventListener('click', () => {
		if (sKnock.paused) {
			sKnock.play();
		}
		else {
			sKnock.pause();
		}
	})

	let panel6a = document.getElementById("Apanel3").contentDocument;
	let rain = panel6a.getElementById("raindrops");
	let sRain = document.getElementById("s-rain");
	rain.style.cursor = 'pointer';
	rain.addEventListener('click', () => {
		if (sRain.paused) {
			sRain.play();
		}
		else {
			sRain.pause();
		}
	})
	let rain2 = panel6a.getElementById("window");
	rain2.style.cursor = 'pointer';
	rain2.addEventListener('click', () => {
		if (sRain.paused) {
			sRain.play();
		}
		else {
			sRain.pause();
		}
	})
	let dog = panel6a.getElementById("dog");
	let sDog = document.getElementById("s-dog");
	dog.style.cursor = 'pointer';
	dog.addEventListener('click', () => {
		if (sDog.paused) {
			sDog.play();
		}
		else {
			sDog.pause();
		}
	})


	let panel6b = document.getElementById("Bpanel3").contentDocument;
	let haha = panel6b.getElementById("haha");
	let sHaha = document.getElementById("s-haha");
	haha.style.cursor = 'pointer';
	haha.addEventListener('click', () => {
		if (sHaha.paused) {
			sHaha.play();
		}
		else {
			sHaha.pause();
		}
	})
	let dog2 = panel6b.getElementById("dog");
	let sDog2 = document.getElementById("s-dog2");
	dog2.style.cursor = 'pointer';
	dog2.addEventListener('click', () => {
		if (sDog2.paused) {
			sDog2.play();
		}
		else {
			sDog2.pause();
		}
	})


	let panel4 = document.getElementById("panel4").contentDocument;
	let ring = panel4.getElementById("phone");
	let sRing = document.getElementById("s-ring");
	ring.style.cursor = 'pointer';
	ring.addEventListener('click', () => {
		if (sRing.paused) {
			sRing.play();
		}
		else {
			sRing.pause();
		}
	})
	let car = panel4.getElementById("car");
	let sCar = document.getElementById("s-car");
	car.style.cursor = 'pointer';
	car.addEventListener('click', () => {
		if (sCar.paused) {
			sCar.play();
		}
		else {
			sCar.pause();
		}
	})

	let panel5 = document.getElementById("panel5").contentDocument;
	let party = panel5.getElementById("disco");
	let sParty = document.getElementById("s-party");
	party.style.cursor = 'pointer';
	party.addEventListener('click', () => {
		if (sParty.paused) {
			sParty.play();
		}
		else {
			sParty.pause();
		}
	})

	let panel7a = document.getElementById("Cpanel1").contentDocument;
	let heart = panel7a.getElementById("heart");
	let sHeart = document.getElementById("s-heart");
	heart.style.cursor = 'pointer';
	heart.addEventListener('click', () => {
		if (sHeart.paused) {
			sHeart.play();
		}
		else {
			sHeart.pause();
		}
	})

	let panel8a = document.getElementById("Cpanel").contentDocument;
	let phone2 = panel8a.getElementById("phone");
	let sPhone2 = document.getElementById("s-phone2");
	phone2.style.cursor = 'pointer';
	phone2.addEventListener('click', () => {
		if (sPhone2.paused) {
			sPhone2.play();
		}
		else {
			sPhone2.pause();
		}
	})

	let panel9a = document.getElementById("Cpanel2").contentDocument;
	let knock2 = panel9a.getElementById("doorknob");
	let sKnock2 = document.getElementById("s-knock2");
	knock2.style.cursor = 'pointer';
	knock2.addEventListener('click', () => {
		if (sKnock2.paused) {
			sKnock2.play();
		}
		else {
			sKnock2.pause();
		}
	})
	let owl = panel9a.getElementById("moon");
	let sOwl = document.getElementById("s-owl");
	owl.style.cursor = 'pointer';
	owl.addEventListener('click', () => {
		if (sOwl.paused) {
			sOwl.play();
		}
		else {
			sOwl.pause();
		}
	})

	let panel9b = document.getElementById("Dpanel2").contentDocument;
	let parade = panel9b.getElementById("parade");
	let sParade = document.getElementById("s-parade");
	parade.style.cursor = 'pointer';
	parade.addEventListener('click', () => {
		if (sParade.paused) {
			sParade.play();
		}
		else {
			sParade.pause();
		}
	})
})

