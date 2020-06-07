let nature = document.getElementById("nature");
let animals = document.getElementById("animals");
let chemistry = document.getElementById("chemistry");
let astrophysics = document.getElementById("astrophysics");
let bio1 = document.getElementById("img1");
let bio2 = document.getElementById("img2");
let bio3 = document.getElementById("img3");
let bio4 = document.getElementById("img4");
let tops = document.getElementsByClassName("top")
let bottoms = document.getElementsByClassName("bottom")

let sec2 = document.getElementsByClassName("sec2");
let natureSound = new Audio("nature.m4a")
let animalSound = new Audio("animals.m4a")
let astroSound = new Audio("astro.m4a")
let chemistSound = new Audio("chemistSound.m4a")

nature.addEventListener('mouseenter', () => {
    nature.src = "nature.gif";
    natureSound.play();
})
nature.addEventListener('mouseleave', () => {  
    nature.src = "nature.jpg"
    natureSound.pause();
})

animals.addEventListener('mouseenter', () => {
    animals.src = "animals.gif";
    animalSound.play();
})
animals.addEventListener('mouseleave', () => {  
    animals.src = "animals.jpg"
    animalSound.pause();
})

chemistry.addEventListener('mouseenter', () => {
    chemistry.src = "chemistry.gif";
    chemistSound.play();
})
chemistry.addEventListener('mouseleave', () => {  
    chemistry.src = "chemist.jpg"
    chemistSound.pause();
})

astrophysics.addEventListener('mouseenter', () => {
    astrophysics.src = "astrophysics.gif";
    astroSound.play();
})
astrophysics.addEventListener('mouseleave', () => {  
    astrophysics.src = "astrophysics.jpg"
    astroSound.pause();
})

bio1.addEventListener('mouseenter', () =>{
    document.getElementById("bio1").style.display = "block"
    tops[0].style.opacity = 0
    bottoms[0].style.opacity = 100
})
bio1.addEventListener('mouseleave', () =>{
    document.getElementById("bio1").style.display = "none"
    tops[0].style.opacity = 100
    bottoms[0].style.opacity = 0
})

bio2.addEventListener('mouseenter', () =>{
    document.getElementById("bio2").style.display = "block"
    tops[1].style.opacity = 0
    bottoms[1].style.opacity = 100
})
bio2.addEventListener('mouseleave', () =>{
    document.getElementById("bio2").style.display = "none"
    tops[1].style.opacity = 100
    bottoms[1].style.opacity = 0
})

bio3.addEventListener('mouseenter', () =>{
    document.getElementById("bio3").style.display = "block"
    tops[2].style.opacity = 0
    bottoms[2].style.opacity = 100
})
bio3.addEventListener('mouseleave', () =>{
    document.getElementById("bio3").style.display = "none"
    tops[2].style.opacity = 100
    bottoms[2].style.opacity = 0
})

bio4.addEventListener('mouseenter', () =>{
    document.getElementById("bio4").style.display = "block"
})
bio4.addEventListener('mouseleave', () =>{
    document.getElementById("bio4").style.display = "none"
})
