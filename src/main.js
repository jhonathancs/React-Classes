// https://exchangerate.host/#/#docs
// "https://api.exchangerate.host/latest?base="
import Swal from "sweetalert2";
const inputText = document.getElementById('inputText');
const btnSearch = document.getElementById("search");
const tableCoin = document.getElementById("tableCoin");
const lineCell = document.getElementById('lineCell')
const conteinerDiv = document.getElementById('quadrado')

const fetchCoin = (value) => {
  const result = fetch(`https://api.exchangerate.host/latest?base=${value}`)
    .then((res) => res.json())
    .then((data) => {
      // const  { rates } = data
      // console.log({rates})
      console.log(data)

      return data
    });
    return result
}

btnSearch.addEventListener('click', async () =>{
    const inputTextInsert = inputText.value
    const responseApi = await fetchCoin(inputTextInsert);
    const rates = await responseApi.rates
    console.log(rates)
    conteinerDiv.innerHTML = "";
    for (const rate in rates) {

        const conteiner = document.createElement('div');
        conteiner.classList.add('divFilha')
        conteiner.textContent = `${rate}: ${rates[rate]} `
        conteinerDiv.appendChild(conteiner)

      }
    }
);

    






// btnSearch.addEventListener('click', () => {
//     {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops ...',
//             text: 'Voce Precisa passar uma Moeda!',
//             // footer: '<a href="">Why do I have this issue?</a>'
//           })
//     }
