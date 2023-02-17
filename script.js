async function fetchUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users'); 

    const usersJSON = await users.json();
    console.log(usersJSON[0].name);
    createUser(usersJSON);
}
function createUser(x) {
    for (let i = 0; i < x.length; i++) {
        document.querySelector('#main').insertAdjacentHTML('afterbegin', `<div><h1>${x[i].name}</h1>
        <p class="username">@${x[i].username}</p>
        <a href="${x[i].website}" class="website">${x[i].website}</a></div>`)
    }
}
fetchUsers()

