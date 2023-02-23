const inputText = document.getElementById("inputText");
const btnSearch = document.getElementById("search");
const tableClear = document.getElementById("clearTable");

const fetchCoin = (value) => {
  const result = fetch(`https://api.exchangerate.host/latest?base=${value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      return data;
    });
  return result;
};

btnSearch.addEventListener("click", async () => {
  const inputTextInsert = inputText.value;
  if (inputTextInsert == "") {
    alert("preencha a tabela");
  } else {
    const rates = await fetchCoin(inputTextInsert);
    console.log(rates.rates);
    
    const tabela = document.getElementById("tabelaDados");
    const tbody = tabela.querySelector("tbody");
    tbody.innerHTML = ''

    let linha = null;
    let coluna = 0;

    for (let valor in rates.rates) {
      if (coluna === 0) {
        linha = document.createElement("tr");
      }

      const celula = document.createElement("td");
      const texto = document.createTextNode(`${valor}:${rates.rates[valor]}`);

      celula.appendChild(texto);
      linha.appendChild(celula);
      coluna++;

      if (coluna === 5) {
        tbody.appendChild(linha);
        coluna = 0;
      }
    }
  }
});

// var linhasTabela = '';
// for (let moeda in rates.rates) {
//   const taxa = rates.rates[moeda];
//   // console.log(`A taxa de câmbio de ${moeda} é ${taxa}`);
//   linhasTabela += `<tr><td>${moeda}</td><td>${taxa}</td></tr>`;

// }
// document.querySelector('#tabelaDados tbody').innerHTML = linhasTabela;

// const objeto = {
//   valor1: 1,
//   valor2: 2,
//   valor3: 3,
//   valor4: 4,
//   valor5: 5,
//   valor6: 6,
//   valor7: 7,
//   valor8: 8,
//   valor9: 9,
//   valor11: 11,
//   valor12: 12,
//   valor13: 13,
//   valor10: 14,
//   valor14: 15,
//   valor15: 16,
//   valor16: 17,
//   valor17: 18,
//   valor18: 19,
//   valor19: 20,
//   valor20: 21
// };

// const tabela = document.getElementById("");
// const tbody = tabela.querySelector("tbody");

// let linha = null;
// let coluna = 0;

// for (let valor in objeto) {
//   if (coluna === 0) {
//     linha = document.createElement("tr");
//   }

//   const celula = document.createElement("td");
//   const texto = document.createTextNode(`${valor} : ${objeto[valor]}`);

//   celula.appendChild(texto);
//   linha.appendChild(celula);
//   coluna++;

//   if (coluna === 5) {
//     tbody.appendChild(linha);
//     coluna = 0;
//   }
// }
