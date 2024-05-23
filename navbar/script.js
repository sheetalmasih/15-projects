let nav=document.querySelector('.nav-toggle');
let links=document.querySelector('.links');

nav.addEventListener('click',function(){
    links.classList.toggle('show-links');
});