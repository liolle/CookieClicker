

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
 * @returns 
 */
const refreshAcces = async ()=>{
    
    try {
        let res = await fetch(SERVEUR_HOST+'/refresh')
        let ret = await res.json()
        console.log(ret);
        return ret
    } catch (error) {
        console.log(error)
        return error
    }

    
}

const forceRefresh = async =>{

    try {
        refreshAcces()
        
    } catch (err) {
        console.log("---")
        if (err == "token expired login to creat a new one"||
        err == "Unauthorized"||
        err == "Invalid token"
        ){
            console.log(err)
            try {
                let res = userLogin("test","test")
                
            } catch (error) {
                
                if (err == "pseudoname or pwd incorrect"){
                    //Retry login 
                }
                console.log(err)
            }
            
        }
        console.log(err)
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



(async() => {

    forceRefresh()

})();

