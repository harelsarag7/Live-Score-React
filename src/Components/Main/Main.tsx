import { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Page_404 from "../Page_404/Page_404";
import Home from "./Home/Home";
import "./Main.css";
import Table from "./Table/Table";
import TeamPage from "./TeamPage/TeamPage";

function Main() {

    useEffect(() => {
        localStorage.setItem('League', "202");
    localStorage.setItem('Country',"62");
    }, [])
    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home />}>Home</Route>
                <Route path="/Home" element={<Home />}>Home</Route>
                <Route path="/News" element={<div>News</div>}>News</Route>
                <Route path="/Highlights" element={<div>Highlights</div>}>Highlights</Route>
                <Route path="/Table" element={<Table />}>Table</Route>
                <Route path="/Team/:teamId" element={<TeamPage/>}>Team Page</Route>
                <Route path="/*" element={<Page_404/>}>Table</Route>
            </Routes>
            
        </div>
    )
}

export default Main;