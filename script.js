const btnDog = document.getElementById('btnDog')
const btnCat = document.getElementById('btnCat')
const btnSurprise = document.getElementById('btnSurprise')
const img = document.getElementById('imgRandom')


const apiDog = ('https://dog.ceo/api/breeds/image/random')
const apiCat = ('https://aws.random.cat/meow')

btnDog.addEventListener ('click',  async () => {
await fetch(apiDog)
 .then(response => response.json())
 .then(data => 
   img.src = data.message )
 .catch(error => console.log(error))
})

btnCat.addEventListener ('click', async () => {
    await fetch(apiCat)
    .then(response => response.json())
    .then(data => 
      img.src = data.file )
    .catch(error => console.log(error))
})

btnSurprise.addEventListener('click', async () => {
const promise1 = fetch(apiDog)
const promise2 = fetch(apiCat)
const result = await Promise.race ([promise1, promise2]);
const data = await result.json();
const petUrl = data.file || data.message 
img.src = petUrl
/*const firstkey = data[Object.keys(data)[0]]
img.src = firstkey
console.log(firstkey)*/
})

