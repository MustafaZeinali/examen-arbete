

const getData = async() => {
    const url = "/api/content"
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }
    const response = await fetch(url, options)
    const sendContent = response.json();
    if (sendContent){
        return true;
    }else{
        console.log("it is wrong in code");
    }
}
export default getData;