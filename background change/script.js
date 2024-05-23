let body=document.querySelector('body');
let btn=document.querySelector('.btn');
let colors=['violet','red','green','pink','black','yellow','orange','blue','white'];

body.style.backgroundColor='violet';

btn.addEventListener('click',function(){
    let colorindex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorindex];
})

