import ArrowDown from "./ArrowDown/ArrowDown";

import "./WelcomeComponent.css";

function WelcomeComponent( ): JSX.Element {
    return (
        <div className="WelcomeComponent" >
            <div></div>
          <h2>Live Score</h2>
          <p>Lorem ipsum dolor sit amet, aut et consequuntur recusandae deserunt, praesentium fuga ratione</p>
            
            <ArrowDown/>
          <div></div>
        
        </div>
    );
}

export default WelcomeComponent;
