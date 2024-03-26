import "../../style/mainPage.css";
import { FaRegPlusSquare } from "react-icons/fa";
// import { useEffect, useState, useRef, useContext } from "react";
// import { ConfiContext } from "../../routeConfi/ContextConfi";
// import ClearItem from "../content/DeleteContent.jsx";
// import UpdateItem from "../content/UpdateContent";
// import getData from "../../api/content/getContent";
// import updateContent from "../../api/content/updateContent";
import FetchData from "../getData";
import SendContents from "../content/PostContent";
import { useContext, useState } from "react";
import { ConfiContext } from "../../routeConfi/ContextConfi";

const MainPage = () => {
  const [showAddItem , setShowAddItem] = useState(false)
  const [hideAddItem , setHideAddItem] = useState(true)
  const {isLogined} = useContext(ConfiContext)
  
  const handleAddItem = () =>{
    setShowAddItem(true);
    setHideAddItem(false);
    console.log("it clicks");
  }
  console.log( "isLogined",isLogined);
  return (
    <>
      <div >
          {isLogined ? <p>inloggad</p> : null}
         <div className="add-content">
         {!isLogined ? <span className="add-content-icon" onClick={handleAddItem}> <FaRegPlusSquare style={{display: !showAddItem ? "" : "none"}}/>  </span>: ""}
         {!hideAddItem ? <SendContents/> : ""} 
        </div> 
      

       
        <FetchData/>
      </div>
       

       
      
    </>
  );
};

export default MainPage;
