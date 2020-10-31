var darkModeBtn = document.getElementsByClassName("dark-mode-btn-inner");
var darkModeBtnInner = document.getElementById("dark-mode-btn");
var pTags = document.querySelectorAll("p");
var h1Tags = document.querySelectorAll("h1");
var bodyTag = document.querySelector("body");
var topBoxes = document.getElementsByClassName("box");
var bottomBox = document.getElementsByClassName("bottom-box");

darkModeBtnInner.addEventListener("click", function(){
    darkModeBtnInner.classList.toggle("switch-to-dark-mode");
    bodyTag.classList.toggle("body-color");
    changeH1();
    changePTags();
    changeTopBoxes();
})


function changePTags() {
    pTags[0].classList.toggle("p-color");
    pTags[1].classList.toggle("p-color");
    pTags[2].classList.toggle("p-color");
    pTags[3].classList.toggle("p-color");
    pTags[5].classList.toggle("p-color");
    pTags[6].classList.toggle("p-color");
    pTags[8].classList.toggle("p-color");
    pTags[9].classList.toggle("p-color");
    pTags[11].classList.toggle("p-color");
    pTags[12].classList.toggle("p-color");
    pTags[14].classList.toggle("p-color");
    pTags[16].classList.toggle("p-color");
    pTags[18].classList.toggle("p-color");
    pTags[20].classList.toggle("p-color");
    pTags[22].classList.toggle("p-color");
    pTags[24].classList.toggle("p-color");
    pTags[26].classList.toggle("p-color");
    pTags[28].classList.toggle("p-color");
}

function changeH1() {
    h1Tags[0].classList.toggle("h1-color");
    h1Tags[1].classList.toggle("h1-color");
    h1Tags[2].classList.toggle("h1-color");
    h1Tags[3].classList.toggle("h1-color");
    h1Tags[4].classList.toggle("h1-color");
    h1Tags[5].classList.toggle("h1-color");
    h1Tags[6].classList.toggle("h1-color");
    h1Tags[7].classList.toggle("h1-color");
    h1Tags[8].classList.toggle("h1-color");
    h1Tags[9].classList.toggle("h1-color");
    h1Tags[10].classList.toggle("h1-color");
    h1Tags[11].classList.toggle("h1-color");
    h1Tags[12].classList.toggle("h1-color");
    h1Tags[13].classList.toggle("h1-color");
}

function changeTopBoxes() {
    topBoxes[0].classList.toggle("top-boxes-color");
    topBoxes[1].classList.toggle("top-boxes-color");
    topBoxes[2].classList.toggle("top-boxes-color");
    topBoxes[3].classList.toggle("top-boxes-color");
    bottomBox[0].classList.toggle("top-boxes-color");
    bottomBox[1].classList.toggle("top-boxes-color");
    bottomBox[2].classList.toggle("top-boxes-color");
    bottomBox[3].classList.toggle("top-boxes-color");
    bottomBox[4].classList.toggle("top-boxes-color");
    bottomBox[5].classList.toggle("top-boxes-color");
    bottomBox[6].classList.toggle("top-boxes-color");
    bottomBox[7].classList.toggle("top-boxes-color");   
}
