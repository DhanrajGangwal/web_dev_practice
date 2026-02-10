let bar = document.querySelector('#bar');
var btn = document.querySelector('button');
let h1 = document.querySelector('h1');
var grow = 0;
btn.addEventListener('click',()=>{
    let time = setInterval(() => {
        grow++;
        bar.style.width = grow + '%';
        h1.innerHTML = `${grow}%`;
        if(grow === 100){
            h1.innerHTML = "dowload complete"
        }

    }, 50);
    setTimeout(() => {
        clearInterval(time);
    }, 5000); 
});