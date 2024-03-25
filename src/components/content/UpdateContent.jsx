import updateContent from "../../api/content/updateContent.js";
import { useContext, useEffect, useState } from "react";
import { ConfiContext } from "../../routeConfi/ContextConfi.jsx";
import getData from "../../api/content/getContent.js";
import MyTextarea from "../TextAreaCont.jsx";
const UpdateItem = async ({itemId ,getContent}) => {
  //const { content } = useContext(ConfiContext);
  // const [input , setInput] = useState("")

  // const textChanged = <MyTextarea text={content.context} />

  // const newUpdate = {
  //     content :   textChanged ,
  //     itemId : content._id
  // }
  console.log("itemId: ", itemId);
  console.log("theContent: ", getContent);
  let theContent = getContent.filter((item) => item._id === itemId);
  console.log("theContent: ", theContent);
    try{
        const response = await updateContent(
            itemId,theContent[0]
           );
           console.log(" itemId,getContent: ", itemId,getContent);
           if (response) {
             console.log("update1: " + response);
             return true;
           } else {
             console.log("it is wrong to update");
           }
         }catch(error){
            console.error("Error updating content: ", error);
         }
     }
  

export default UpdateItem;
