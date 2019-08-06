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

//4. click changes Welcome To Fun Bus! to red.
let bodyH2 = document.querySelector('h2')
bodyH2.addEventListener('click', changeColor =>{
    bodyH2.style.color = "red"
})

//5. tells you window size on resizing.
window.addEventListener('resize', event => {
    alert(`The window size is at ${window.innerHeight} by ${window.innerWidth}`)
})

//6. mouse over changes background to blue.
let home = document.querySelector('.home')
home.addEventListener('mouseover', event => {event.target.style.background = "blue"})

//stop propagation
let homeStop = document.querySelector('.text-content')
homeStop.addEventListener('mouseover', event => {
    event.target.style.background = "red"
    event.stopPropagation();
})

//7. mouse enter yellow border on destination
let destinationP = document.querySelector('.destination p')
destinationP.addEventListener('mouseenter', event =>{
    event.target.style.border = "10px solid yellow"
})

//8. Alert message on load 
window.addEventListener('load', event =>{
    alert('WELCOME TO THE FUN BUS!')
})

//9. click first button to change background to black.
let button = document.querySelector('.destination .btn')
button.addEventListener('click', event =>{
    event.target.style.background = "black"
})

//10.
let rightClick = document.querySelector('.content-destination')
rightClick.addEventListener('contextmenu', event =>{
    event.target.style.background = "pink"
})


//Prevent default of nav
let navStop = document.querySelectorAll('nav a')
navStop.forEach(event => {
    event.addEventListener('click', event => {
        event.preventDefault()
    })
})
