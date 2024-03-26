
import { useEffect, useState , useContext } from "react";
import "../style/mainPage.css";
import ClearItem from "./content/DeleteContent.jsx";
import MyTextarea from "./TextAreaCont";
import { ConfiContext } from "../routeConfi/ContextConfi";
import UpdateItem from "./content/UpdateContent";

const FetchData = ( ) => {
  const {content} = useContext(ConfiContext);
  const [showMore, setShowMore] = useState(false);
  const [hideMore, setHideMore] = useState(true);
  const [showTextArea , setShowTextArea] = useState(true)
  const [hideText , setHideText] = useState(false)
  const [getContent , setGetContent] = useState([]);


  const showMoreInfo = (itemId) => {

    setShowMore(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  const clickShowTextArea = () => {

    setShowTextArea(!showTextArea);
    setHideText(!hideText);
  }

    useEffect(() => {
      if (content.length !== 0) {
        setGetContent(content);
      }
    }, [content]);

  if (content.length === 0) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <>
      <article className="main-page-Container">
        {content.map((item) => (
          <div className="m-post-container" key={item._id}>
            <div className="m-p-more">
              <p onClick={() =>showMoreInfo(item._id)}>...</p>
              <div style={{display: showMore[item._id] ? "" : "none"} } >
                <span onClick={clickShowTextArea} > redigera </span>
                <span onClick={ () => ClearItem(item._id)} > ta bort </span> 
              </div>
            </div>
            <div className="m-p-top">
              <img className="m-p-image" src={item.image} />
            </div>
            
            {!showTextArea ? <MyTextarea className="m-p-textarea" {...{getContent,_id: item._id, setGetContent}}/> :<p className="m-p-text" >{item.context}</p>} 
            {/* {!showTextArea ? < itemId={item._id} theContent={item.context}/> :null } */}
            {!showTextArea ? <button onClick={() => UpdateItem({getContent,itemId: item._id})} >Spara</button> : ""}
            <p className="m-p-date"> {item.createdAt} </p>
          </div>
          
        ))}
        
      </article>
    </>
  );
};
export default FetchData;

