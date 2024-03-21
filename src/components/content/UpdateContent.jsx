import updateContent from "../../api/content/updateContent.js"
import { useContext, useEffect, useState } from "react"
import { ConfiContext } from "../../routeConfi/ContextConfi.jsx"
import getData from "../../api/content/getContent.js"
const UpdateItem = async( myItem) => {
    // const { postContents , setPostContents } = useContext(ConfiContext)
    // const [editText , setEditContent] =useState("")

    // const [content, setContent] = useState("");
    // const [text , setText] = useState("");
    // const [updateContent, setUpdateContent] = useState([])

     // Store current content
//   const [updateError, setUpdateError] = useState(null); // Track update errors

    // const fetchData = async() => {
    //     const data = await getData();
    //     if (data){
    //         setUpdateContent(data)
    //     }else{
    //         console.log("get Data from  UpdateItem failed");
    //     }
    //     fetchData();
    // }

    

        
      
        const response = await updateContent(myItem)
        if(response){
            console.log("update1: " + response);
            return true
        }else{
            console.log("it is wrong to update");
        }
    

// return(
//     <>
//     {/* {updateContent.map( item => (
//         <li>
//             <p>{item.context}</p>
//         </li>
//     ))} */}
//    <input onChange={(e) => setContent( e.target.value)} type="text" name="content" value={content}/>
//    <button onClick={statusUpdate}> click</button>
//     </>
// )

//   const handleUpdate = async (newContent) => {
//     try {
//       const success = await updateContent(objectId, newContent);
//       if (success) {
//         return true
//       } else {
//         throw new Error('Update failed'); // Simulate an error scenario
//       }
//     } catch (error) {
//       setUpdateError(error.message); // Set error message for display
//     }
//   };
//     if (handleUpdate){
//         return true
//     }else{
//         console.log("it not working");
//     }



  // UI elements for displaying content and handling updates
//   return (
//     <div>
//       <p>Current content: {content}</p>
//       <input
//         type="text"
//         value={content} // Pre-populate input with current content
//         onChange={(e) => setContent(e.target.value)} // Update local state on input change
//       />
//       <button onClick={() => handleUpdate(content)}>Update</button>
//       {updateError && <p style={{ color: 'red' }}>Error: {updateError}</p>}
//     </div>
//   );

   
    // const handleSubmit = async(itemId , newContent) => {
    //     const isUpdated = await updateContent(itemId , newContent)
    //     console.log("updateContent:", isUpdated);
    // if (!isUpdated){
    //     console.log("jsx updated: it is not wroking update");
    // }else{
    //     console.log("isUpdated" ,isUpdated);
    //     return true;

    // }
    // }


   

    // return (
    //     <>
    //    {/* <input onChange={setValue} type="text" value={editText} />
    //    <button onClick={handleSubmit} type="submit"></button> */}
    //    {postContents && postContents.map( item => (
    //     <li>
    //         <p>{item.context}</p>
    //     </li>
    //    ))}
    //     </>
    // )

}

export default UpdateItem