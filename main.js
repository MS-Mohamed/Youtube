
let bars = document.getElementById("bars");
let aside = document.getElementById("aside");
let nav = document.getElementById("nav");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let body = document.getElementById("body");
let all = document.getElementById("all");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let mic = document.getElementById("mic");
let error = document.getElementById("error");
let close = document.getElementById("cl");

let k = document.getElementById("k");
let d = document.getElementById("d");
let w = document.getElementById("w");
let y = document.getElementById("y");
let h = document.getElementById("h");
let l = document.getElementById("l");
let o = document.getElementById("o");
let s = document.getElementById("s");
let e = document.getElementById("e");

bars.addEventListener("click" , function(){
    aside.style.width = "67px";
    aside.style.overflow = "hidden";
    nav.style.paddingRight = "5px";
});

aside.addEventListener("mouseenter" , function(){
    aside.style.width = "280px";
    aside.style.overflow = "auto";
    nav.style.paddingRight = "15px";
});

bars.addEventListener("dblclick" , function(){
    aside.style.width = "280px";
    aside.style.overflow = "auto";
    nav.style.paddingRight = "15px";
});

moon.addEventListener("click" , function(){
    body.style.backgroundColor = "purple";
    input.style.backgroundColor = "purple";
    aside.style.backgroundColor = "purple";
    all.style.backgroundColor = "#110011";
    moon.style.display = "none";
    sun.style.display = "block";
    btn.style.backgroundColor = "#380f38";
    mic.style.backgroundColor = "#380f38";
    error.style.backgroundColor = "purple";
});

sun.addEventListener("click" , function(){
    body.style.backgroundColor = "unset";
    input.style.backgroundColor = "unset";
    aside.style.backgroundColor = "white";
    all.style.backgroundColor = "#f9f9f9";
    moon.style.display = "block";
    sun.style.display = "none";
    btn.style.backgroundColor = "#f8f8f8";
    mic.style.backgroundColor = "#f9f9f9";
    error.style.backgroundColor = "white";
});

close.addEventListener("click" , function(){
    error.style.display = "none"
})

function x () {
    error.style.display = "block"
}

k.addEventListener("click" , x);
d.addEventListener("click" , x);
w.addEventListener("click" , x);
y.addEventListener("click" , x);
h.addEventListener("click" , x);
l.addEventListener("click" , x);
o.addEventListener("click" , x);
s.addEventListener("click" , x);
e.addEventListener("click" , x);