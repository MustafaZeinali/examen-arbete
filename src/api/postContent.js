

const SendData = async(content) => {
    const url = "/api/content"
    const option = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    }
    const response = await fetch(url, option)
    const sendContent = response.json();
    if (sendContent){
        return true;
    }else{
        console.log("it is wrong in code");
    }
}
export default SendData;