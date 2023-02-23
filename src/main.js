// const cepApi = `viacep.com.br/ws/${value}/json/`
import Swal from "sweetalert2";
const inputCep = document.getElementById('inputCep');
const btn = document.getElementById('btnSearch');
const content = document.getElementById('content')

const cepApi = async (value) => {
 try {
    const result = await fetch(`https://viacep.com.br/ws/${value}/json/`)
    const data = await result.json();
    if (data.erro) throw new Error('Erro de cep inválido');
    return data
    // .then((resp => resp.json()))
    // .then((data) => {
        // console.log(data)
    }
  catch (error) {
    Swal.fire('Ops', error.message, 'error');
    // Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Por favor coloque o cep',
    //   })
 }
}


btn.addEventListener('click', async (event) =>{
  event.preventDefault();
  if (inputCep.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por Favor preencha o campo vazio com cep',
    })
  } else {
    const result = await cepApi(inputCep.value)
    content.innerHTML =  `${JSON.stringify(result,undefined,2)}`;
    console.log(result)
  }
})


