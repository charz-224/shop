let advert = document.createElement('img');
 

// Gets a random number between 1 and 3 
// Change 3 to however many images in assets folder that
// you want to randomly pick between

// Need to add this into interval function

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

setInterval(() => {
  advert.src = './assets/image_' + getRandomNumber() + '.jpg';
  document.getElementById('advert').innerHTML = ''
  document.getElementById('advert').appendChild(advert)
}, 3000)

setTimeout(() => {
  alert('Buy something!!!')
}, 30000)

// Need to add products to all image areas. 
// Can also swithc products at intervals. 

for (let i = 1; i < 10; i++){
  let product = document.createElement('img');
  product.src = './assets/product_' + i.toString() + '.jpg'
  document.getElementById('container_' + i.toString()).appendChild(product);
}