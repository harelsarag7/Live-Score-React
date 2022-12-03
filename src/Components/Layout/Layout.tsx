import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WelcomeComponent from "../Main/Home/WelcomeComponent/WelcomeComponent";
import Main from "../Main/Main";
import "./Layout.css";

function Layout(): JSX.Element {
    const webMode = useSelector((state: any) => state.chosenMode.toggle)
    console.log(webMode);


    return (
        <div className="Layout" data-theme={webMode ? `dark-mode` : `light-mode`}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default Layout;
