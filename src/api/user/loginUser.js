
const sessionStorageKey = "jwt"
const userLogin = async(username, password) => {
    const url= "/api/user/login"

    const data = {
        username: username,
        password: password
    }

    const options = {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, options)
    const objectStatus = await response.json()
    if(objectStatus){
        sessionStorage.setItem(sessionStorageKey, objectStatus.token)
        return {login: objectStatus.status}

    }else{
        console.log("ai login failed");
    }
}

export default userLogin