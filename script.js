const img = document.getElementById("imageHero");
const nameHero = document.getElementById("nameHero");
const btn = document.getElementById("btn");


const getApi = (value) => {
  const apiUrl = fetch(
    `https://superheroapi.com/api.php/6187571357961076/${value}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return apiUrl;
};

btn.addEventListener("click", async () => {
  const NumberRandom = Math.floor(Math.random() * 201);
  const apiContent = await getApi(NumberRandom)
  nameHero.textContent = apiContent.name;
  img.src = apiContent.image["url"]
});


