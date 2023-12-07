import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import BackTop from "../utilities/back-to-top";
export const Layout = ()=> {
    return (
        <>
            <BackTop/>
            <Header/>
            <main className="main">
                <div className="container"><Outlet></Outlet></div>
            </main>
            <Footer/>
        </>
    );
}