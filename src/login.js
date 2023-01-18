const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const username_l = document.querySelector("#username_l");
const pwd_l = document.querySelector("#pwd_l");
const username_s = document.querySelector("#username_s");
const pwd_s = document.querySelector("#pwd_s");

const loginBtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");

import { getAccessToken, refreshAcces, forceRefresh, userLogin, userRegister, userLogout,auth } from './util.js';

/*

Local names :
ACCESS TOKEN -> cclicker_access_token
Bonus -> cclicker_bonus 
Multipliers -> cclicker_multipliers 


*/

const login = async (pseudo,pwd)=>{

  let local_token = localStorage.getItem("cclicker_access_token")

  if(local_token){
    if ((await auth(local_token) == "ping")){
      console.log(local_token)
      window.open("./main.html","_self")
      return
    }
  }

  
  try {
    const res = await userLogin(pseudo,pwd)
    const token_O = res.json()
    localStorage.setItem("cclicker_access_token",token_O.token)
    console.log('TOKEN_ '+token_O)
    if ((await auth(token_O.token) == "ping")){
      console.log('OK')
      window.open("./main.html","_self")
    }
    
  } catch (error) {
    if (error == "pseudoname or pwd incorrect"){
      alert("Wrong pseudo or password")
    }
    else if ("Connection issues"){
      alert("Connection issues try later")
    }
    else {
      alert("Unknown user, create a new account")
    }
    return
  }
  

}

const register = (pseudo,pwd)=>{
  const [ps,pw] = [localStorage.setItem("cclicker_ps",pseudo),localStorage.setItem("cclicker_pw",pwd)]
}



loginBtn.addEventListener("click",()=>{{
  
  console.log(!username_l.value || !pwd_l.value);

  if (!username_l.value || !pwd_l.value){
    alert("enter login info")
    return
  }
  console.log('Login')
  login(username_l.value , pwd_l.value)

}})

signUpBtn.addEventListener("click",()=>{

  if (!username_s.value ||!pwd_s.value){
    alert("enter info")
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