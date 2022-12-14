import { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Page_404 from "../Page_404/Page_404";
import Youtube from "../Youtube/Youtube";
import Home from "./Home/Home";
import "./Main.css";
import News from "./News/News";
import Table from "./Table/Table";
import TeamPage from "./TeamPage/TeamPage";

function Main() {


    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/News" element={<News/>}></Route>
                <Route path="/Highlights" element={<div>Highlights</div>}></Route>
                <Route path="/Table" element={<Table />}></Route>
                <Route path="/Team/:teamId" element={<TeamPage/>}></Route>
                <Route path="/*" element={<Page_404/>}></Route>
            </Routes>
            <Youtube/>
        </div>
    )
}

export default Main;