import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cardFunctions } from "../../../../functions/CardFunctions";
import { LiveScore } from "../../../../interfaces/LiveScoreInterface";
import "./CardLastGameOnMobile.css"


function CardLastGameOnMobile({ game }:{game:LiveScore}): JSX.Element {

    const [isOpen, setIsOpen] = useState<boolean>(false)

   return (
      <div className="CardLastGameOnMobile" onClick={() => setIsOpen(!isOpen)}>
         <div className="info-container">

               <p className="team-name">{game.event_home_team}</p>
            <div className="home-team-image team">
               <NavLink to={`/Team/${game.home_team_key}`}><img className="team-logo" src={game.home_team_logo} alt="" /></NavLink>
            </div>
            <div className="score-container">
               {/* <p></p><p></p> */}
               VS
               <span className="score-live" >{game.event_final_result}</span>
               <span>{game.event_status}'</span>
            </div>
            <div className="home-team-image team">
               <NavLink to={`/Team/${game.away_team_key}`}><img className="team-logo" src={game.away_team_logo} alt="" /></NavLink>
            </div>
               <p className="team-name">{game.event_away_team}</p>
         </div>
    {isOpen? 
         <div className="icons">
            <img className="statistic-icon" src="https://i.ibb.co/xfFn4fq/pie-chart.png" alt="" />
            <img className="video-icon" src="https://i.ibb.co/xqWJ1Bp/youtube.png" alt="" />
            <img className="H2H-icon" src="https://i.ibb.co/WksBhv4/fight.png" alt="" />
         </div>
        : <> </>}
      </div>
      
   )


}



export default CardLastGameOnMobile;


