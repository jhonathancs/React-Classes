// Função usada para preencher o select com os nomes e ids das pessoas usuárias
// Recebe um array com pessoas usuárias
export function fillUsersSelect(users) {
  // Pega o select users-select
  const usersSelect = document.querySelector("#users-select");

  // Faz uma iteração entre todos os itens do array
  users.map((user) => {
    // Cria um novo elemento do tipo option
    const opt = document.createElement("option");
    // Define o atributo value com o valor do id da pessoa
    opt.setAttribute("value", user.id);
    // Define o innerText como nome da pessoa
    opt.innerText = user.firstName;
    // Adiciona o elemento ao users-select
    usersSelect.appendChild(opt);
  });
}

// Função usada para preencher os posts relacionados
// Recebe um array com posts
export function fillPosts(posts) {
  // Verifica se existem posts
  if (posts.length === 0) return;

  // Pega os elementos do DOM necessários
  const postsSection = document.querySelector("#posts-section");
  const featuredPostTitle = document.querySelector("#featured-post-title");
  const featuredPostBody = document.querySelector("#featured-post-body");
  const relatedPostsSection = document.querySelector("#related-posts-section");

  // Remove a classe que escondia o elemento
  postsSection.classList.remove("invisible");

  // Cria uma cópia do array original
  const internalPostsArray = [...posts];
  // console.log(internalPostsArray)

  // Define o primeiro post como post destacado e remove ele da lista de posts
  const firstPost = internalPostsArray.pop();
  // console.log(firstPost)

  // Adiciona o título e o corpo do post destacado
  featuredPostTitle.innerText = firstPost.title;
  featuredPostBody.innerText = firstPost.body;

  // Verifica se existem posts relacionados
  if (internalPostsArray.length === 0) return;

  // Cria elemento de título para posts relacionados
  const relatedTitle = document.createElement("h2");
  relatedTitle.innerText = "Related posts";
  relatedPostsSection.appendChild(relatedTitle);

  // Faz uma iteração entre os posts restantes
  internalPostsArray.map((post) => {
    // Cria um novo elemento com o título do post e adiciona ao DOM
    const p = document.createElement("p");
    p.innerText = post.title;
    relatedPostsSection.appendChild(p);
  });
}

export function clearPageData() {
  // Pega os elementos do DOM necessários
  const postsSection = document.querySelector("#posts-section");
  const featuredPostTitle = document.querySelector("#featured-post-title");
  const featuredPostBody = document.querySelector("#featured-post-body");
  const relatedPostsSection = document.querySelector("#related-posts-section");
  const commentsSection = document.querySelector("#featured-post-comments");
  const errorMessageElement = document.querySelector("#error-message");

  // Limpa os elementos
  featuredPostTitle.innerHTML = "";
  featuredPostBody.innerHTML = "";
  relatedPostsSection.innerHTML = "";
  commentsSection.innerHTML = "";
  errorMessageElement.innerHTML = "";

  // Adiciona a classe que esconde os elementos
  postsSection.classList.add("invisible");
  errorMessageElement.classList.add("invisible");
}
