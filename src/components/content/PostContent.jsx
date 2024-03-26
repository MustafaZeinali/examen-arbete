import { useState } from "react";
import SendData from "../../api/content/postContent.js";
import "../../style/postContents.css";
import { IoClose } from "react-icons/io5";
import { NavLink , useNavigate} from "react-router-dom";
  
const SendContents = () => {
  const [context, setContext] = useState({
    text: "",
    image: "",
  });
  const HandleAddContent = async (e) => {
    e.preventDefault;

    const newContent = {
      context: context.text,
      image: context.image,
    };

    const result = await SendData(newContent);

    if (result) {
      return true;
    } else {
      console.log("Failed to send");
    }

  };
  const navigate = useNavigate()
  const handleNavigae = () => {
    navigate("/");
  }
  // const navigate = useNavigate();
//   function handleData(item){
//     setContext({...context, item: e.target. })
//   }
  const handleContextText = (e) => {
    setContext({
      ...context,
      text: e.target.value
    });
}
    const handleContextImage = (e) => {
        setContext({
          ...context,
          image: e.target.value
        });
      };
  
  return (
    <main>
      <div className="ipost-container">
      <p  className="log-close-icon-post-Content"   ><IoClose onClick={handleNavigae}/></p>

        <section className="itext" >
          <label htmlFor="itext"> </label>
          <textarea onChange={handleContextText} name="itext" id="itext" cols="30" rows="10"
          placeholder="vad tänker du på att skriva?"
          value={context.text}/>
        </section>
        {/* <section>
          <input onChange={handleContextImage} className="i-send-image" type="file" name="" value={context.image}/>
        </section> */}
        <section>

          <input onChange={handleContextImage} className="i-send-image" type="text" name="" value={context.image} placeholder="http://"/>
        </section>
        <section>
          <button onClick={HandleAddContent} className="itext-btn" >Lägg till</button>
        </section>
      </div>
    </main>
  );
};

export default SendContents;
