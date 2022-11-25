import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDark, setLight } from "../app/lightDarkSlice";
import "./Header.css";
import NavBar from "./NavBar/NavBar";

function Header(): JSX.Element {
    const webMode = useSelector((state: any) => state.chosenMode.toggle)
    let selectorChangeModeDispatch = useDispatch();
    // console.log("mode: "+ webMode);


    useEffect(() => {
        console.log("modeEffect: " + webMode);

    }, [webMode])

    function changingMode(e: any) {
        if (e.checked) {
            selectorChangeModeDispatch(setDark())
        } else {
            selectorChangeModeDispatch(setLight())
        }
        // console.log(webMode);

    }

    return (
        <div className="Header">
            <div className="header-container">

                <div id="logo" ></div>
                <div className="HeaderLinksDiv">
                    <NavBar />
                </div>
                <div className="darkModeLightModeDiv">
                    Dark/Light
                    <input className="switch-input" id='darkLightModeInput' type="checkbox" onChange={(e) => changingMode(e.target)} name="" />
                    <label className="input"></label>
                </div>
            </div>
        </div>
    );
}

export default Header;
