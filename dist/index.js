"use strict";
const getUsername = document.querySelector("#user");
const formSubmit = document.querySelector(".form");
const main_container = document.querySelector(".main-container");
async function myCustomFetcher(url, options) {
    const responce = await fetch(url, options);
    if (!responce.ok) {
        throw new Error(`Error: ${responce.status} ${responce.statusText}`);
    }
    const data = await responce.json();
    console.log(data);
    return data;
}
//dipslay cars ui 
const showResultUI = (user) => {
    main_container.insertAdjacentHTML("beforeend", `<div class="card">
          <div class="card-header">
            <img src="${user.avatar_url}" alt="user" />
          </div>
          <div class="card-body">
            <h3>${user.login}</h3>
            <p>${user.location ?? "Location not available"}</p>
            <a href="${user.html_url}" target="_blank">View Profile</a>
          </div>
        </div>`);
};
function fetchUserData(url) {
    myCustomFetcher(url, {}).then((userInfro) => {
        for (const user of userInfro) {
            showResultUI(user);
            console.log("login" + user.login);
        }
    });
}
// default fuction call
fetchUserData("https://api.github.com/users");
// form submit event
formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = getUsername.value.toLocaleLowerCase();
    try {
        fetchUserData(`https://api.github.com/search/users?q=${searchTerm}`);
    }
    catch (error) {
        console.log(error);
    }
});
