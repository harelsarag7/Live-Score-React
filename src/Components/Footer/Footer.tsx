import "./Footer.css";

function Footer(): JSX.Element {
    let date = new Date().getFullYear()
    return (
        <div className="Footer">
			<p>All Rights Reserved: {date}</p>
        </div>
    );
}

export default Footer;
