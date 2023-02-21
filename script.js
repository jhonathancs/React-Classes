import {
  fillUsersSelect,
  fillPosts,
  clearPageData,
} from './filters/utilsOficial';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

// Faz o fetch na API para pegar os dados das pessoas
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;

    // Chama a função auxiliar para preencher os nomes e ids no select users-select
    fillUsersSelect(users);
  });

usersSelect.addEventListener('change', () => {
  // Chama a função auxiliar para limpar as informações da página quando uma nova pessoa for selecionada
  // clearPageData();

  // Define a API de posts
  const POSTS_API = `https://dummyjson.com/posts/user/${usersSelect.value}`;

  // Faz o fetch na API de posts baseado no id da pessoa selecionada
  fetch(POSTS_API)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;

      // Chama a função auxiliar para preencher o post destacado e os dois posts relacionados
      fillPosts(posts);
});
})
