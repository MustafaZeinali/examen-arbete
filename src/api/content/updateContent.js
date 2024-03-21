

const updateContent = async (objectId , content ,picture) => {

    const url = "/api/content/edit/" + objectId ;
    console.log("updateContent1",objectId);

    const data = {
        context: content,
        image: picture
    }
    console.log("updateContent2",data);

    const options = {
        method : "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify()
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