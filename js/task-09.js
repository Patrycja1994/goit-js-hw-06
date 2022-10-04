function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonClick = document.querySelector(".change-color");

const myBody = document.querySelector("body");

const colorSpan = document.querySelector(".color");

const changeColor = ()=> {
colorSpan.textContent = myBody.style.backgroundColor=getRandomHexColor();
}

buttonClick = document.addEventListener("click", changeColor)
