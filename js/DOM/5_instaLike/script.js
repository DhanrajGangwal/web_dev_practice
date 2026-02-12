let post = document.querySelector("#post");
let like = document.querySelector("#main i");
let user = document.querySelector('nav p');
let arr = [
    {
        fullname:"alice",
        profession:"full stack developer",


    },
    {
        fullname:"Bob",
        profession:"Data scientest",
    },
    {
        fullname:"Jarvis",
        profession:"AI/ML",
    },
    {
        fullname:"Atom",
        profession:"java developer",
    },
    {
        fullname:"lily",
        profession:"frontend developer",
    },
];

post.addEventListener("dblclick", () => {
  like.style.opacity = "1";
  like.style.top = "50%";
  like.style.left = "50%";
  like.style.transform = "translate(-50% ,-50%) scale(1)";
  like.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';
  like.style.fontSize = "100px";
  like.style.opacity = 1;
   setTimeout(function () {
        like.style.transform = 'translate(-50%,-300%) scale(1) rotate(60deg)'
    }, 800)
    setTimeout(function () {
        like.style.opacity = 0
    }, 1000)
    setTimeout(function () {
        like.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
    }, 1200);


});
