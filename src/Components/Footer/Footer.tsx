import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer(): JSX.Element {
  let date = new Date().getFullYear()
  return (
    <div className="Footer site-footer">

      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Live Score</h4>
            <ul>
              <li><NavLink to={'/Home'}>Home</NavLink></li>
              <li> <NavLink to={'/News'}>News</NavLink></li>
              <li> <NavLink to={'/Highlights'}>Highlights</NavLink></li>
              <li> <NavLink to={'/Table'}>Table</NavLink></li>
              <li> <NavLink to={'/'}>Build Tournament </NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">watch</a></li>
              <li><a href="#">shorts</a></li>
              <li><a href="#">bag</a></li>
              <li><a href="#">shoes</a></li>
              <li><a href="#">dress</a></li>
            </ul>
          </div>
          
          
        </div>
        <div className="footer-col down">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        <div className="footer-col down logoFooter">
            <div id="logo-footer"></div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
