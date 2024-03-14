
import './App.css'
import MainPage from './components/MainPage'
import Header from './components/header/Header'
import { useEffect, useState } from "react";
import Test from "./Test";


function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/product');
        if (!response.ok) {
          console.log("nåt har gått fel", response);
          throw new Error("it is wrong");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Test/>
      </div>
      <h1>backend</h1>
      <div>
        {post.map((item, i) => (
          <ul key={i}>
            <li>
              <p>{item.name}</p>
              <p>{item.createdAt}</p>
              <p>{item.timezone}</p>
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}

export default App;
