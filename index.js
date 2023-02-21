// Api Users = https://dummyjson.com/users
// API Post = https://dummyjson.com/posts/user/
// https://jsonformatter.curiousconcept.com/#
import { filterUsersSelect,filterPosts,clearPageData } from "./filters/utils";

const userApi = "https://dummyjson.com/users";
const clickSelect = document.getElementById('users-select')

clickSelect.addEventListener('change', function(){
const ClickCall = clickSelect;
const postApi = `https://dummyjson.com/posts/user/${ClickCall.value}`;
const comentario = document.getElementById('featured-post-title');
const comentarioConteudo = document.getElementById('featured-post-body');
fetch(postApi)
  .then((response) => response.json())
  .then((data) => {
    const { posts } = data;
    const postContent = posts[3].title;
    const postConteudo = posts[1].title;
    comentario.innerText = postContent;
    console.log(posts)
    //console.log([posts])
});
}); 

fetch(userApi)
  .then((response) => response.json())
  .then((data) => {
    
    const  { users }   = data;
    console.log(users)
    filterUsersSelect(users);
  });
  