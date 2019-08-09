const form = document.querySelector('form');
const root = document.querySelector('#root');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const text = document.querySelector('#text').value;
  document.querySelector('#text').value = '';
  root.innerHTML = 'Loading...';
  callAPI(text);
});

async function callAPI(text) {
  let response = await fetch('https://api.unsplash.com/search/photos?client_id=eeb09fabcdd10ce844453fe2fec92bbbaf2c5ba4b5352413cce2863e3e9bcdda&page=1&query=' + text);
  let images = await response.json();
  putImages(images.results);
}

function putImages(images) {
  root.innerHTML = '';
  images.forEach(image => {
    const img = document.createElement('img');
    img.setAttribute('src', image.urls.small);
    root.appendChild(img);
  });
}