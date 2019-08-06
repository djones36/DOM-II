// Your code goes here

// 1. Drag an image and it will send an alert message
let allImgs = document.querySelector('.img-content')
allImgs.addEventListener('dragstart', drag => alert('Stealing is Bad!!'))

//2. 
let navBar = document.querySelector('nav')
navBar.addEventListener('mouseout', event => {event.target.style.color = "blue"})

//3.
let busImg = document.querySelector('.home .intro img')
busImg.addEventListener('dblclick', displayNon =>{
    busImg.style.display = "none"
})