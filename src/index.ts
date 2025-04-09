const getUsername = document.querySelector("#user") as HTMLInputElement;

const formSubmit = document.querySelector(".form") as HTMLFormElement;
const main_container = document.querySelector(".main-container") as HTMLElement;


// let define the constct of an obhedt 
// github url api calling


interface UserData {
      id:number;
      login:string;
      avatar_url:string;
      html_url:string;
      location:string;
      url:string;
}

async function  myCustomFetcher<T>(url:string,options?:RequestInit): Promise <T> {

      const responce = await fetch(url, options);

      if(!responce.ok){
            throw new Error(`Error: ${responce.status} ${responce.statusText}`);
      }
      const data = await responce.json() ;
      console.log(data);
      return data;
}


//dipslay cars ui 

const showResultUI = (user: UserData) => {
      main_container.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <div class="card-header">
            <img src="${user.avatar_url}" alt="user" />
          </div>
          <div class="card-body">
            <h3>${user.login}</h3>
            <p>${user.location ?? "Location not available"}</p>
            <a href="${user.html_url}" target="_blank">View Profile</a>
          </div>
        </div>`
      );
    };
    


function fetchUserData(url:string){
      myCustomFetcher<UserData[]>(url ,  {}).then((userInfro) =>{
           for(const user of userInfro){
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
      } catch (error) {
        console.log(error);
      }
    });
    