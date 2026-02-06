let num = document.querySelector('#numb');
let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let numb = 0;
inc.addEventListener('click',function(){
    numb++;
    num.innerHTML = numb;
})
dec.addEventListener('click',function(){
    numb--;
    num.innerHTML = numb;
})

