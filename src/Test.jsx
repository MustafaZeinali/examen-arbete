import SendData from "./api/postContent.js";
import { useState } from "react";

const Test = () => {
  const [writeData, setWriteData] = useState({
    context: "",
    price: "",
  });

  const HandelAddContent = async (e) => {
    e.preventDefault;
    const addContent = {
      name: writeData.context,
      price: writeData.price,
    };
    const result = await SendData(addContent);
    if (result) {
      console.log(" it works from result ");

      return true;
    } else {
      console.log("it is not worked from frontend");
    }
  };
  const handleContextChange = (e) => {
    setWriteData({
      ...writeData,
      context: e.target.value
    });
  };

  const handlePriceChange = (e) => {
    setWriteData({
      ...writeData,
      price: e.target.value
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="content"> it's here for content</label>
        <input
          onChange={handleContextChange}
          value={writeData.context}
          id="content"
          type="text"
          name="context"
        />
      </div>
      <div>
        <label htmlFor="price"> do whatever</label>
        <input
          value={writeData.price}
          onChange={handlePriceChange}
          id="price"
          type="number"
          name="price"
        />
      </div>
      <button onClick={HandelAddContent} type="button">
        {" "}
        click to send{" "}
      </button>
    </div>
  );
};

export default Test;
