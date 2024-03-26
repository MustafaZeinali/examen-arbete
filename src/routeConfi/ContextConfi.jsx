import { createContext, useState , useEffect} from "react";

export const ConfiContext = createContext();

const ContextRoot = ({children}) => {
    const [content , setContent] = useState ([])
    const [postContents , setPostContents] = useState([])
    const [isLogined , setIsLogined] = useState(false)

    useEffect(() => {
        const fetchDataFromApi = async () => {
          const response = await fetch("/api/content");
          if (!response.ok) {
            console.log("Error fetching content");
            throw new Error("Error fetching content");
          } else {
            const data = await response.json();
            setContent(data);
          }
        };
        fetchDataFromApi();
      }, []);

      useEffect(() => {
        const jwt = sessionStorage.getItem("jwt");
        console.log("jwt is working");
        if(jwt) {
          setIsLogined(!isLogined);
        }else{
          console.log("error getting jwt");
        }
      },[]);

    
    return(
        <ConfiContext.Provider value={{ postContents,setPostContents,content,setContent,isLogined,setIsLogined}}>
            {children}
        </ConfiContext.Provider>
    )
}
export default  ContextRoot   