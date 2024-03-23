import { createContext, useRef, useState , useEffect} from "react";

export const ConfiContext = createContext();

const ContextRoot = ({children}) => {
    const [isLogin , setIsLogin] = useState(false)
    const [content , setContent] = useState ([])
    const [postContents , setPostContents] = useState([])

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

    const loginRef = useRef();
    const statusLogin = (state) => {
        if(state){
            loginRef.current.show()
        }else {
            loginRef.current.close()
        }
    };
    return(
        <ConfiContext.Provider value={{isLogin,setIsLogin, postContents,setPostContents,content,setContent,statusLogin}}>
            {children}
        </ConfiContext.Provider>
    )
}
export default  ContextRoot   