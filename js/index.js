// Your code goes here

// 1. Drag an image and it will send an alert message.
let allImgs = document.querySelector('.img-content')
allImgs.addEventListener('dragstart', drag => alert('Stealing is Bad!!'))

//2. mouse out changes color to blue.
let navBar = document.querySelector('nav')
navBar.addEventListener('mouseout', event => {event.target.style.color = "blue"})

//3. double click to hide bus imge.
let busImg = document.querySelector('.home .intro img')
busImg.addEventListener('dblclick', displayNon =>{
    busImg.style.display = "none"
})

//4.
// let bodyP = document.querySelectorAll('h1')
// bodyP.addEventListener('scroll', changeColor =>{
//     bodyP.style.color = "red"
// })



//5. tells you window size on resizing.
window.addEventListener('resize', event => {
    alert(`The window size is at ${window.innerHeight} by ${window.innerWidth}`)
})


//6.
