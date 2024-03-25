import { useContext, useEffect, useState } from "react"
import "../style/mainPage.css";


const MyTextarea = ({getContent,_id, setGetContent}) => {
   console.log("2", getContent);
    const style = {
        width: "60em",
        height: "10em",
    }
    

    const handleTextareaChange = event => setGetContent(getContent.map(c => {
        if(c._id === _id) {
            return {...c, context: event.target.value}
        }
        return c
    })
    )
    
    return( 
        <>
         <textarea cols="150" rows="10"
        value={getContent.filter(c => c._id === _id).map(c => {return c.context})}
        onChange={handleTextareaChange}
        className="m-p-textarea"
        style={style}
        />
        
        </>
       
    )
}
export default MyTextarea