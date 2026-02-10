
let btn = document.querySelector('button');
let main = document.querySelector('main');
let team = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black'
    },
    {
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'silver'
    },
];
btn.addEventListener('click', () => {

    let winner = team[Math.floor(Math.random()*team.length)];
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    let rotate = Math.floor(Math.random() * 360);
    var scl = Math.random()*3;

    // box 
    // let box = document.createElement('div');
    // box.style.height = '100px';
    // box.style.width = '100px';
    // box.style.borderRadius = '20px'
    // box.style.border = 'none';
    // box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    // box.style.position = 'absolute';
    // box.style.left = x + '%';
    // box.style.top = y + '%';
    // box.style.transform = `rotate(${rotate}deg)`;
    // box.style.transition = 'transform .3s ease';

    // main.appendChild(box);

    // team name array
    let h1 = document.createElement('h1');
    h1.innerHTML = winner.team;
    h1.style.borderRadius = '20px'
    h1.style.border = 'none';
    h1.style.color = `rgb(${c1},${c2},${c3})`;
    h1.style.position = 'absolute';
    h1.style.left = x + '%';
    h1.style.top = y + '%';
    h1.style.transform = `rotate(${rotate}deg)`;
    main.appendChild(h1);

});
