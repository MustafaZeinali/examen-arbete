

const updateContent = async (objectId , content ) => {

    const url = "/api/content/edit/" + objectId ;
    console.log("updateContent1",objectId);

    const data = {
        context: content,
   
    }
    console.log("updateContent2",data);

    const options = {
        method : "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, options)
    const statusObject = await response.json()
    if (statusObject){
        return true;
    }else{
        console.log("Failed to update content from updateContent");
    }
}
export default updateContent