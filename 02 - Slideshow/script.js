
const images = [
  { 'id': 1, 'url': './img/shell.jpg'},
  { 'id': 2, 'url': './img/chronos.jpg'},
  { 'id': 3, 'url': './img/gravitate.jpg'},
  { 'id': 4, 'url': './img/help.jpg'},
  { 'id': 5, 'url': './img/rage.jpg'},
  { 'id': 6, 'url': './img/badvibe.jpg'},
  { 'id': 7, 'url': './img/sumo.jpg'},
  { 'id': 8, 'url': './img/window.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, containerItems) => {
  images.forEach(image => {
    containerItems.innerHTML += `
    <div class="item">
      <img src='${image.url}'>
    </div>
    `
   })
}

loadImages (images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll(".item");
  console.log(containerItems);
}

const next = () => {
  const lastItem = items[items.length-1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".item");
}

document.querySelector('#previous').addEventListener('click', next);

document.querySelector('#next').addEventListener('click', previous);

