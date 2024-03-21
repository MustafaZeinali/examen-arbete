import { Outlet } from "react-router";
import Header from "../components/header/Header.jsx";
// import SendContents from "../components/content/PostContent.jsx";

 const Root = () => (
    <>
    <Header/>
    <Outlet/>
    </>
)
export default Root