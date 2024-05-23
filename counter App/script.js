let maintitle=document.querySelector('#title')
let currevalue=0

let btndecrement=document.querySelector('#decrement')
let btnreset=document.querySelector('#reset')
let btnincrement=document.querySelector('#increment')

btnincrement.addEventListener('click',()=>{
    currevalue+=1
    maintitle.textContent=currevalue;
});
btnreset.addEventListener('click',()=>{
    currevalue=0
    maintitle.textContent=currevalue;
});
btndecrement.addEventListener('click',()=>{
    currevalue-=1
    maintitle.textContent=currevalue;
});



