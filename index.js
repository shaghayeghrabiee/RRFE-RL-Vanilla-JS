const inputText = document.getElementById("textInput");
const addBtn = document.getElementById("addBtn");
const ul = document.querySelector(".enterdList");
const itemIndex = document.querySelectorAll(".inputItem");
const basicHash = window.location.hash;

addBtn.addEventListener("click", addToList);
inputText.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addToList(e);
  }
});

window.onload = () => {
  const onloadHash = (window.location.hash = "#tag=red,blue,purpple");
  const tagIndex = onloadHash.indexOf("=");
  const tagArray = onloadHash
    .substring(tagIndex + 1, onloadHash.length)
    .split(",");
  tagArray.map((tag) => {
    const divInput = document.createElement("div");
    const newInput = document.createElement("li");
    newInput.innerHTML = tag;
    newInput.classList.add("inputItem");
    divInput.appendChild(newInput);
    ul.appendChild(divInput);
    newInput.setAttribute("onclick", "remove(this)");
  });
};


function addToUrl(event) {
  event.preventDefault();
  const hashURL = window.location.hash;
  window.location.hash =
    hashURL.length === 5
      ? hashURL.concat(`${inputText.value}`)
      : hashURL.concat(`,${inputText.value}`);
}

function addToList(event) {
  event.preventDefault();
  const divInput = document.createElement("div");
  const newInput = document.createElement("li");
  newInput.innerHTML = inputText.value;
  newInput.classList.add("inputItem");
  divInput.appendChild(newInput);
  ul.appendChild(divInput);
  newInput.setAttribute("onclick", "remove(this)");
  addToUrl(event);
  inputText.value = "";
}

function removeHashElement(element) {
  const hashEl = window.location.hash;
  const tagIndexEl = hashEl.indexOf("=");
  const tagArrayEl = hashEl.substring(tagIndexEl + 1, hashEl.length).split(",");
  const newHash = tagArrayEl.filter((el) => el !== element.innerHTML);
  window.location.hash =`#tag=${newHash}`;
}

function remove(el) {
  el.remove();
  removeHashElement(el);
}
