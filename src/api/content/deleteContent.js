

const removeContent = async(itemId) => {

    const url = "/api/content/delete/" + itemId ;
    console.log("removwContent", url);

    const options = {
        method  : 'DELETE',
        headers:{
            "content-type" : "application/json"
        },
        // body: JSON.stringify({itemId})
    }
    const response = await fetch(url, options);
    const statusObject =  await response.json();
    if(statusObject){
        console.log(statusObject);
        return true;
    }else{
        console.log("Failed to delete");
    }
}
export default removeContent;