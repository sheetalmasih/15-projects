
// JavaScript (in script.js file)
let modalBtn = document.querySelector('.modal-btn');
let modalWindow = document.querySelector('.closing');
let closeBtn = document.querySelector('.close-btn');

let body=document.querySelector('body')



modalBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('open-modal');
    body.style.backgroundColor('modal-open')
    
});

closeBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('open-modal');
    body.style.backgroundColor('modal-open')
    
});



