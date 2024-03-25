
const updateContent = async (itemId , theContent ) => {

    const url = "/api/content/edit/" + itemId ;
    console.log("itemId22",itemId);
    console.log("theContent223",theContent);

    const data = {
        context: theContent.context, 
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
