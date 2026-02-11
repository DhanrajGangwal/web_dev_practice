let bar = document.querySelector('#bar');
var btn = document.querySelector('button');
let h1 = document.querySelector('h1');
var grow = 0;
btn.addEventListener('click',()=>{
    btn.style.pointerEvents = 'none'
    let time = setInterval(() => {
        grow++;
        bar.style.width = grow + '%';
        h1.innerHTML = `${grow}%`;

    }, 50);
    setTimeout(() => {
        clearInterval(time);
        h1.innerHTML = "dowload complete";
        btn.style.opacity = '0.5';
    }, 5000); 
});