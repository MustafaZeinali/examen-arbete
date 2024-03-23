import { useEffect, useState , useContext } from "react";
import "../style/mainPage.css";
import ClearItem from "./content/DeleteContent.jsx";
import MyTextarea from "./TextAreaCont";
import { ConfiContext } from "../routeConfi/ContextConfi";
import UpdateItem from "./content/UpdateContent";


const FetchData = () => {
  const {content, setContent} = useContext(ConfiContext);
  const [showMore, setShowMore] = useState(false);
  const [hideMore, setHideMore] = useState(false);
  const [showTextArea , setShowTextArea] = useState(true)
  const [hideText , setHideText] = useState(false)

  const showMoreInfo = () => {
    console.log("it clicked");
    setShowMore(!showMore);
    setHideMore(!hideMore);
  };

  const clickShowTextArea = () => {

    setShowTextArea(!showTextArea);
    setHideText(!hideText);
  }

 

  return (
    <>
      <article className="main-page-Container">
        {content.map((item) => (
          <div className="m-post-container" key={item._id}>
            <div className="m-p-more">
              <p onClick={showMoreInfo}>...</p>
              <div style={{ display: !showMore ? "none" : "" }}>
                <span onClick={clickShowTextArea} > redigera </span>
                <span onClick={ () => ClearItem(item._id)} > ta bort </span> 
              </div>
            </div>
            <div className="m-p-top">
              <img className="m-p-image" src={item.image} />
            </div>

            {!showTextArea ? <MyTextarea text={item.context}/> :<p className="m-p-text" >{item.context}</p>} 
            {!showTextArea ? <button onClick={() =>UpdateItem(item._id)} >Spara</button> : ""}
            <p className="m-p-date"> {item.createdAt} </p>
          </div>
        ))}
      </article>
    </>
  );
};
export default FetchData;
