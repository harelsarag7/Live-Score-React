import "./Header.css";
import NavBar from "./NavBar/NavBar";

function Header(): JSX.Element {
    return (
        <div className="Header">
                <div id="logo" ></div>
            <div className="HeaderLinksDiv">
                <NavBar />
            </div>
        </div>
    );
}

export default Header;
