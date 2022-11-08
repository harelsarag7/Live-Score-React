import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import "./Main.css";

function Main() {

    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home />}>Home</Route>
                <Route path="/News" element={<div>News</div>}>News</Route>
                <Route path="/Highlights" element={<div>Highlights</div>}>Highlights</Route>
                <Route path="/Table" element={<div>Table</div>}>Table</Route>
            </Routes>
            
        </div>
    )
}

export default Main;