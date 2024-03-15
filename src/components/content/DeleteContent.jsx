
import removeContent from "../../api/content/deleteContent.js";


const ClearItem = async (itemId) => {

    // const filterId = itemId.filter(item => item._id !== itemId)
    // if(filterId) {
    //     removeContent(itemId);
    // }else {
    //     console.log(" det nåt fel i koden");
    // }
    console.log("clear item" , itemId);
   const isRemoved = await removeContent(itemId);
   if(isRemoved){
    console.log("it works");
    return true;
   }else {
    console.log("nåt fel i koden");
   }
    

    // const remove = (object) => {
    //     if(object.filter( item => item.id === itemId)){
    //         return true
    //     }else{
    //         console.log("function is not working");
    //     }
    // };
    // const result = removeContent(itemId);
    // if(result){
    //     return true;
    // }else{
    //     console.log("fel i kod");
    // }
    
}
export default ClearItem