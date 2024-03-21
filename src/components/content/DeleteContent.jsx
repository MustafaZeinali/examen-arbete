
import removeContent from "../../api/content/deleteContent.js";


const ClearItem = async (itemId) => {

    console.log("clear item" , itemId);
   const isRemoved = await removeContent(itemId);
   if(isRemoved){
    console.log("it works");
    return true;
   }else {
    console.log("nåt fel i koden");
   }
    
}
export default ClearItem