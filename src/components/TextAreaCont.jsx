import { useContext, useEffect, useState } from "react"
import "../style/mainPage.css";
import UpdateItem from "./content/UpdateContent";
import { ConfiContext } from "../routeConfi/ContextConfi";

const MyTextarea = (props) => {
    const [itextarea, setItextarea] = useState(props.text)
    const {content} = useContext(ConfiContext)
    // useEffect(() => {
    //     const fetchData = async () =>{
    //         const response = await fetchData("/api/content")
    //         if(response){
    //             return true
    //         }else {
    //             console.log("det är fel");
    //         }
    //     }
    // })
    


    const handleTextareaChange = event => setItextarea(event.target.value)

    return(
        <>
         <textarea cols="200" rows="10"
        value={itextarea}
        onChange={handleTextareaChange}
        className="m-p-text"
        />
        
        </>
       
    )
}
export default MyTextarea