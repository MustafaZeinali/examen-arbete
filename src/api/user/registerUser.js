


const registerUser = async (username,password) => {

    const url = "/api/user/register"

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(username,password)
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (data){
        return 
    }else{
        console.log("register failed");
    }

}
export default registerUser