import { createContext, useState } from "react";

export const ConfiContext = createContext();

const ContextRoot = ({children}) => {
    const [isLogin , setIsLogin] = useState(false)
    const [postContents , setPostContents] = useState([])
    return(
        <ConfiContext.Provider value={{isLogin,setIsLogin, postContents,setPostContents}}>
            {children}
        </ConfiContext.Provider>
    )
}
export default  ContextRoot   