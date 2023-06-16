

// --------------------------nav meiuo----------------------

let toggleIcon = document.querySelector(".toggle-menu");
let closeIcon = document.querySelector("#close-menu");
let navUl = document.querySelector("nav ul");


toggleIcon.onclick = function(){
  navUl.style.right = "0";
};
closeIcon.onclick = function(){
    navUl.style.right = "-250px";
};

// ----------------------------slider--------------------------

let landingDiv = document.getElementsByClassName("landing")[0];
let counter = 1;
let textDiv = Array.from(document.querySelectorAll(".text div"));
let textLength = textDiv.length;
let bullets = document.createElement("ul");
bullets.id = "pagination-ul";
for(let i=0; i<textLength; i++){
    let bullet = document.createElement("li");
    bullet.setAttribute("id","bullet"+i);
    bullet.setAttribute("data-index",i+1);
    bullets.appendChild(bullet);
};
landingDiv.append(bullets);

let prevButton = document.querySelector("#prev");
let nextButton = document.querySelector("#next");

let paginationCreatUl = document.getElementById("pagination-ul");
let paginationBullest = Array.from(document.querySelectorAll("#pagination-ul li"));

for(let i=0; i<paginationBullest.length; i++){
    remov();
    paginationBullest[i].onclick = function(){
    counter = parseInt(this.getAttribute("data-index"));
    theCheker();
    };
};

theCheker();

prevButton.onclick = previous;
nextButton.onclick = nexte;


function previous(){
    counter--;
    if(prevButton.classList.contains("disbli")){
        return false;
    }
    else{
        theCheker();
    }
};

function nexte(){
counter++;
if(nextButton.classList.contains("disbli")){
    return false;
}
else{
    theCheker();
}
};

function theCheker(){
    remov();
    textDiv[counter-1].classList.add("active");
    paginationCreatUl.children[counter-1].classList.add("active");
    if(counter==textLength){
        nextButton.classList.add("disbli");
    }
    else
    nextButton.classList.remove("disbli");
   if(counter == 1){
        prevButton.classList.add("disbli");
    }
    else
    prevButton.classList.remove("disbli");
};
function remov(){
    textDiv.forEach(function(div){
        div.classList.remove("active");
    });
    paginationBullest.forEach(function(li){
        li.classList.remove("active");
    });
};

