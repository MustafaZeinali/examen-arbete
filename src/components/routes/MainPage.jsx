import "../../style/mainPage.css";
import { useEffect, useState , useRef, useContext} from "react";
import { ConfiContext } from "../../routeConfi/ContextConfi";
import ClearItem from "../content/DeleteContent.jsx";


const MainPage = () => {
  const [postContent, setPostContent] = useState([]);
  // const {postContent, setPostContent} = useContext(ConfiContext);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/content");
        if (!response.ok) {
          console.log("nåt har gått fel", response);
          throw new Error("it is wrong");
        }
        const data = await response.json();
        setPostContent(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const showMore = () => {
    console.log("it clicked");
    setShow(!show);
    setHide (false)

  };

  // const closeOptions = () => {
  //   console.log("main clicked");
  //   setShow(false);
  //   setHide(!hide)

  // }


  return (
    <main >
     
      <article className="main-page-Container">
      
        {/* <section className="m-post-container"> */}

        {/* <div>
              <img className="m-p-profile" src={profile} alt="profile" />{" "}
              <p>name</p>
            </div> */}
        {postContent.map((item, i) => (
          <ul className="m-post-container" key={i}>
            <section onClick={showMore} className="m-p-more">
              ...
              <div  style={{display: !show? "none" : ""}}>
                {" "}
                <span className="feature"> edit </span>
                <span onClick={() => ClearItem(item._id)} className="feature">delete</span>{" "}
              </div>
            </section>
            <li className="m-p-top">
              <img className="m-p-image" src={item.image} alt="" />
              <p className="m-p-text">{item.context}</p>
              <p className="m-p-date">{item.createdAt}</p>
            </li>
          </ul>
        ))}

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
