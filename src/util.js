
/*

Use local storate as much as possible to keep the 
API request to a minimum

Local names :
ACCESS TOKEN -> cclicker_access_token
Bonus -> cclicker_bonus 
Multipliers -> cclicker_multipliers 

User 

getAccessToken() -> check for access token the local storage and return it or and empty string if none found
[asyn] refreshAcces() -> put / refresh the accesstoken in the local storage 

[asyn] userRegister() ->  Register a new User  retunn 1 if success 0 if failed 
[asyn] userLogin() ->  login a user and set the accesstoken in LS retunn 1 if success 0 if failed 
 

Score

[asyn] setUserScore(token) -> Use the access token to update the user score refresh token if necesary ( to use in the update intervale )
[asyn] getUserScore(token) -> Use the access token to get the user score refresh token if necesary 

setUserScore() -> set user_score in the local storage 
[asyn] getUserScore() -> get the_score from the local storage or fetch from db


Inventory

[asyn] setUserInventory(token) -> Use the access token to update the user inventory refresh token if necesary ( to use in the update intervale )
[asyn] getUserInventory(token) -> Use the access token to get the user inventory refresh token if necesary 

setUserInventory() -> set user inventory in the local storage 
[asyn] getUserInventory() -> get the inventory from the local storage or fetch from db

Bonus

[asyn] getBonus() get the bonus from the local storage or fetch it form the API if not in local storage
[asyn] getBonusId(bonusName) get the bonus from the local storage or use getBonus to set bonus in LS

Multipliers

[asyn] getMultipliers() get the mutiplier from the local storage or fetch it form the API if not in local storage
[asyn] getMultipliers(symbol) get the mutiplier from the local storage or use getmutiplier to set mutiplier in LS


*/


//check for access token the local storage and return it or and empty string if none found

/*
ACCESS TOKEN -> cclicker_access_token
Score -> cclicker_score
Bonus -> cclicker_bonus 
Multipliers -> cclicker_multipliers 
*/

const SERVEUR_HOST = "http://127.0.0.1:3000"
const SERVEUR_HOST_REMOTE = "https://*********"


/**
 * @returns {String}
 */
const getAccessToken = ()=>{
    return localStorage.getItem('cclicker_access_token')
}

/**
 * return the request status
 * @returns {"token expired login to creat a new one"|"Unauthorized"|"Invalid token"|String}
 */
const refreshAcces = async ()=>{
    
    try {
        let res = await fetch(SERVEUR_HOST+'/refresh')
        let ret = await res.json()
        localStorage.setItem("cclicker_access_token",ret)
        return ret
    } catch (error) {
        console.log(error)
        return error
    }

    
}


/**
 * return the request status
 * @returns {"pseudoname or pwd incorrect"|"Connection issues"|"Invalid token"|String}
 */
const forceRefresh = async (pseudo,pwd) =>{

    let token = await refreshAcces()
    console.log(token)
    if (token == "token expired login to creat a new one"||
    token == "Unauthorized"||
    token == "Invalid token"
    ){

        try {
            let res = await userLogin(pseudo,pwd)
            localStorage.setItem("cclicker_access_token",res)
            return res
         } catch (error) {
             return error
         }

    }

}


/**
 * 
 * @param {String} pseudoname 
 * @param {String} pwd 
 * @returns {Promise<"pseudoname or pwd incorrect"|"Connection issues"|{token:String}>}
 */
const userLogin = async (pseudoname, pwd)=>{

    const F_OPTION = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                pseudo: pseudoname,
                pwd: pwd
            }
        )
    }

    return new Promise((resolve, reject) => {
        fetch(SERVEUR_HOST+'/login',F_OPTION)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        })
        
    })

   

};

const userRegister = async (pseudoname, pwd)=>{

    const F_OPTION = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                pseudo: pseudoname,
                pwd: pwd
            }
        )
    }

    return new Promise((resolve, reject) => {
        fetch(SERVEUR_HOST+'/register',F_OPTION)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        })
        
    })

}

const userLogout = ()=>{

    return new Promise((resolve, reject) => {
        fetch(SERVEUR_HOST+'/logout')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        })
        
    })

} 

/**
 * @param {string} token
 * @param {{score:{base:string,multiplier:string}[]}}
 */
const setUserScore = (token, score) =()=>{

    const F_OPTION = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            score
        )
    }

    return new Promise((resolve, reject) => {
        fetch(SERVEUR_HOST+'/scores')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        })
        
    })

}

const getUserScore = (token) = ()=>{

    const F_OPTION = {
        method: 'GET'
    }

    return new Promise((resolve, reject) => {
        fetch(SERVEUR_HOST+'/scores')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        })
        
    })

}

const setUserScoreLocal = () =>{

}
const getUserScoreLocal = () =>{
    

}


(async() => {

     forceRefresh("test","test")

})();

