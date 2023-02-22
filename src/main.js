// https://exchangerate.host/#/#docs
// "https://api.exchangerate.host/latest?base="
import Swal from "sweetalert2";
const inputText = document.getElementById('inputText');
const btnSearch = document.getElementById("search");
const tableCoin = document.getElementById("tableCoin");
const lineCell = document.getElementById('lineCell')

const fetchCoin = (value) => {
  const result = fetch(`https://api.exchangerate.host/latest?base=${value}`)
    .then((res) => res.json())
    .then((data) => {
      return data
    });
    return result
}
btnSearch.addEventListener('click', async () =>{
    const inputTextInsert = inputText.value
    const responseApi = await fetchCoin(inputTextInsert);
    const rates = await responseApi.rates
    console.log(rates)
    const header = tableCoin.createTHead();
    const rowHeader = header.insertRow(0);
    const cellHeaderName = rowHeader.insertCell(0);
    cellHeaderName.innerHTML = "<b>Nome da moeda</b>";
    const cellHeaderValue = rowHeader.insertCell(1);
    cellHeaderValue.innerHTML = "<b>Taxa de câmbio</b>";
    const cellHeaderCode = rowHeader.insertCell(2);
    for (const rate in rates) {
      const line = tableCoin.insertRow(-1);
      const name = line.insertCell(0);
      name.innerText = rate;
      const value = line.insertCell(1);
      value.innerText = rates[rate];
      const code = line.insertCell(2);
      code.innerText = responseApi.base;
      const updated = line.insertCell(3);
      updated.innerText = responseApi.date;
    }
  });
    






// btnSearch.addEventListener('click', () => {
//     {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops ...',
//             text: 'Voce Precisa passar uma Moeda!',
//             // footer: '<a href="">Why do I have this issue?</a>'
//           })
//     }
