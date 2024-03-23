import "../../style/mainPage.css";
import { useEffect, useState, useRef, useContext } from "react";
import { ConfiContext } from "../../routeConfi/ContextConfi";
import ClearItem from "../content/DeleteContent.jsx";
import UpdateItem from "../content/UpdateContent";
import getData from "../../api/content/getContent";
import updateContent from "../../api/content/updateContent";
import FetchData from "../getData";
const MainPage = () => {
  const {postContents, setPostContents} = useContext(ConfiContext);
  // const {postContent, setPostContent} = useContext(ConfiContext);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [isActived, setIsActived] = useState(false);
  // const[abc , setAbc] = useState("")
  // const [isUpdated, setIsUpdated] = useState("")
  const [showTextArea , setShowTextArea] = useState(true)
  const [hideText , setHideText] = useState(false)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/content");
  //       if (!response.ok) {
  //         console.log("nåt har gått fel", response);
  //         throw new Error("it is wrong");
  //       }
  //       const data = await response.json();
  //       setPostContents(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect( () => {
  //   async function fetchData(){
  //     if( postContents.length === -1){
        
  //       setPostContents( await getData() )
  //       console.log(postContents);
  //     }else{
  //       return false;
  //     }
  //   }
  //   console.log(fetchData());
  //   fetchData();
  // },[]);

  const showMore = () => {
    console.log("it clicked");
    setShow(!show);
    setHide(false);
  };

  // const closeOptions = () => {
  //   console.log("main clicked");
  //   setShow(false);
  //   setHide(!hide)

  const clickShowTextArea = () => {

    setShowTextArea(false);
    setHideText(!hideText);
  }
  // }
  const handleEdit = () => {
    setIsActived(!isActived);
  }
  // const handleUPdate = async() => {
  //   const isUPdated =  UpdateItem(item._id)
  //   const comboItems = [...postContents , ...isUPdated]
  //   console.log(comboItems);
  //   if(comboItems){
  //     return true;
  //   }else{
  //     console.log("updating item failed");
  //   }
  // }
  const handlerTextAreaChange = (e) => {
    setAbc(e.target.value)
  } 


  return (
    <main>
      <article className="main-page-Container">
        {/* <section className="m-post-container"> */}

        {/* <div>
              <img className="m-p-profile" src={profile} alt="profile" />{" "}
              <p>name</p>
            </div> */}
        {/* {postContents && postContents.map((item) => (
          <ul className="m-post-container" key={item._id}>
            <section onClick={showMore} className="m-p-more">
              ...
              <div style={{ display: !show ? "none" : "" }}>
                {" "}
                <span  onClick={ clickShowTextArea} className="feature">  edit  </span>
                <span onClick={() => ClearItem(item._id)} className="feature">
                  delete
                </span>{" "}
              </div>
            </section>
            <li className="m-p-top">
              <img className="m-p-image" src={item.image} alt="" />
                 {!showTextArea? <textarea className="m-p-text" name="" id="" cols="75" rows="10" value={item.context} />
                 :  <p className="m-p-text">{item.context}</p>}
              
              { !showTextArea? <button onClick={() => UpdateItem(item._id )} >click</button> : "" }
              <p className="m-p-date">{item.createdAt}</p>
            </li>
           
          </ul>
        ))} */}
        <FetchData/>

        {/* <div className="m-p-image"> 
           
            <img src={image1} alt="image of flower" /> 
          </div> */}
        {/* <p className="m-p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores
            libero incidunt iste, voluptatibus cumque eius quaerat veniam,
            voluptates dicta dolorem reiciendis repudiandae architecto pariatur
            eveniet saepe. Amet, aliquid dolor.
          </p>
          <p  className="m-p-date">2024/02/27 14.21</p> */}
        {/* </section>
         */}
      </article>
    </main>
  );
};

export default MainPage;
