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
]

btn.addEventListener('click',()=>{
    let winner = team[Math.floor(Math.random()*team.length)];
    let c1 = Math.floor(Math.random())*256
    let c2 = Math.floor(Math.random())*256
    let c3 = Math.floor(Math.random())*256
    btn.innerHTML = winner.team;
    btn.style.backgroundColor = winner.primary;
    btn.style.color = "gray";
    main.style.backgroundColor = winner.secondary;
})