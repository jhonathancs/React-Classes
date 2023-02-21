export function filterUsersSelect(users) {
    const usersSelect = document.querySelector('#users-select');
    users.map((user) => {
      const opt = document.createElement('option');
      opt.setAttribute('value', user.id);
      opt.innerText = user.firstName;
      usersSelect.appendChild(opt);
    });
}


 