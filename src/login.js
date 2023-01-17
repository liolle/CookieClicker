const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const username_l = document.querySelector("#username");
const pwd_l = document.querySelector("#pwd");
const username_s = document.querySelector("#username_s");
const pwd_s = document.querySelector("#pwd_s");

const loginBtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");
const play_now = document.querySelector("#play_now");


const login = (pseudo,pwd)=>{

  const [ps,pw] = [localStorage.getItem("cclicker_ps"),localStorage.getItem("cclicker_pw")]

  if (!ps || ! pw){
    alert("No user info found, create an account")
  }
  else if(ps == pseudo && pw == pwd){
    window.open("./main.html","_self")
  }
  else{
    alert('wrong Username or Password')
  }
  

}

const register = (pseudo,pwd)=>{
  const [ps,pw] = [localStorage.setItem("cclicker_ps",pseudo),localStorage.setItem("cclicker_pw",pwd)]
}



play_now.addEventListener("click",()=>{{

  window.open("./main.html","_self")

}})

loginBtn.addEventListener("click",()=>{{

  if (username_l.value.lengtn == 0|| pwd_l.value.lengtn == 0){
    alert("enter login info")
    return
  }

  login(username_l.value , pwd_l.value)

}})

signUpBtn.addEventListener("click",()=>{

  if (username_s.value.lengtn == 0|| pwd_s.value.lengtn == 0){
    alert("enter login info")
    return
  }

  register(username_s.value,pwd_s.value)
  container.classList.remove("sign-up-mode");

})

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});