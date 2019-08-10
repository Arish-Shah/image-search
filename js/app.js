const form = document.querySelector('form');
const photos = document.querySelector('#photos');
const loading = document.querySelector('#loading');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const text = document.querySelector('#text').value;
  document.querySelector('#text').value = '';
  loading.style.display = 'block';

  callAPI(text);
});

async function callAPI(text) {
  let responseOne = await fetch('https://api.unsplash.com/search/photos?client_id=eeb09fabcdd10ce844453fe2fec92bbbaf2c5ba4b5352413cce2863e3e9bcdda&page=1&query=' + text);
  let responseTwo = await fetch('https://api.unsplash.com/search/photos?client_id=eeb09fabcdd10ce844453fe2fec92bbbaf2c5ba4b5352413cce2863e3e9bcdda&page=2&query=' + text);
  let imagesOne = await responseOne.json();
  let imagesTwo = await responseTwo.json();

  photos.innerHTML = '';
  putImages(imagesOne.results);
  putImages(imagesTwo.results);
}

function putImages(images) {
  loading.style.display = 'none';

  images.forEach(image => {
    const img = document.createElement('img');
    img.setAttribute('src', image.urls.small);
    photos.appendChild(img);
  });
}