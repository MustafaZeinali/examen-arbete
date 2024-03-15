
const GetUser =async (user) => {
    const url = "/api/user"
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    }
    const response = await fetch(url, options)
    const fetchData = response.json()
    if (fetchData){
        return true
    }else{
        console.log("api is not available");
    }
}

export default GetUser;