// themes
let nature = document.getElementById("nature");
let animals = document.getElementById("animals");
let chemistry = document.getElementById("chemistry");
let astrophysics = document.getElementById("astrophysics");

// bios
let bio1 = document.getElementById("img1");
let bio2 = document.getElementById("img2");
let bio3 = document.getElementById("img3");
let bio4 = document.getElementById("img4");

// arrays of top imgs and bottom imgs for bios
let tops = document.getElementsByClassName("top") // get element by class name returns an array, so to get the top[0] or 
let bottoms = document.getElementsByClassName("bottom") // bottom [0] refers to the first element to be a member of this class

// sound fx
let natureSound = new Audio("nature.m4a")
let animalSound = new Audio("animals.m4a")
let astroSound = new Audio("astro.m4a")
let chemistSound = new Audio("chemistSound.m4a")

nature.addEventListener('mouseenter', () => { // animate gif and start playing sound effect
    nature.src = "nature.gif";
    natureSound.play();
})
nature.addEventListener('mouseleave', () => {  // stop playing gif and sound effect
    nature.src = "nature.jpg"
    natureSound.pause();
})

animals.addEventListener('mouseenter', () => { // animate gif and start playing sound effect
    animals.src = "animals.gif";
    animalSound.play();
})
animals.addEventListener('mouseleave', () => {  // stop playing gif and sound effect
    animals.src = "animals.jpg"
    animalSound.pause();
})

chemistry.addEventListener('mouseenter', () => { // animate gif and start playing sound effect
    chemistry.src = "chemistry.gif";
    chemistSound.play();
})
chemistry.addEventListener('mouseleave', () => {  // stop playing gif and sound effect
    chemistry.src = "chemist.jpg"
    chemistSound.pause();
})

astrophysics.addEventListener('mouseenter', () => { // animate gif and start playing sound effect
    astrophysics.src = "astrophysics.gif";
    astroSound.play();
})
astrophysics.addEventListener('mouseleave', () => {  // stop playing gif and sound effect
    astrophysics.src = "astrophysics.jpg"
    astroSound.pause();
})

bio1.addEventListener('mouseenter', () =>{ // make top image disappear and show bio and bottom image
    document.getElementById("bio1").style.display = "block"
    tops[0].style.opacity = 0 
    bottoms[0].style.opacity = 100
})
bio1.addEventListener('mouseleave', () =>{ // hide bio and bottom image and show top image
    document.getElementById("bio1").style.display = "none"
    tops[0].style.opacity = 100
    bottoms[0].style.opacity = 0
})

bio2.addEventListener('mouseenter', () =>{ // make top image disappear and show bio and bottom image
    document.getElementById("bio2").style.display = "block"
    tops[1].style.opacity = 0
    bottoms[1].style.opacity = 100
})
bio2.addEventListener('mouseleave', () =>{ // hide bio and bottom image and show top image
    document.getElementById("bio2").style.display = "none"
    tops[1].style.opacity = 100
    bottoms[1].style.opacity = 0
})

bio3.addEventListener('mouseenter', () =>{ // make top image disappear and show bio and bottom image
    document.getElementById("bio3").style.display = "block"
    tops[2].style.opacity = 0
    bottoms[2].style.opacity = 100
})
bio3.addEventListener('mouseleave', () =>{ // hide bio and bottom image and show top image
    document.getElementById("bio3").style.display = "none"
    tops[2].style.opacity = 100
    bottoms[2].style.opacity = 0
})

bio4.addEventListener('mouseenter', () =>{ // show bio 
    document.getElementById("bio4").style.display = "block"
})
bio4.addEventListener('mouseleave', () =>{ // hide bio
    document.getElementById("bio4").style.display = "none"
})
