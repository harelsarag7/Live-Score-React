import { cardFunctions } from "../../../../functions/CardFunctions";
import { LiveScore } from "../../../../interfaces/LiveScoreInterface";
import "./CardLastGameLoader.css";



function CardLastGameLoader( game: any ): JSX.Element {

   return (
      <div className="CardLastGameLoader">
         <div className="info-container">

            <div className="home-team-image team">
               <p>{game.event_home_team}</p>
               <div className="team-logo loader"></div>
            </div>
            <div className="score-container">
               <p></p><p></p>
               VS
               <span className="score-live" >{game.event_final_result}</span>
               <span>{game.event_status}'</span>
            </div>
            <div className="home-team-image team ">
               <p>{game.event_away_team}</p>
               <div className="team-logo loader"></div>
            </div>
         </div>

         <div className="icons">
         <img className="statistic-icon" src="https://i.ibb.co/xfFn4fq/pie-chart.png" alt="" />
            <img className="video-icon" src="https://i.ibb.co/xqWJ1Bp/youtube.png" alt="" />
            <img className="H2H-icon" src="https://i.ibb.co/WksBhv4/fight.png" alt="" />
         </div>
      </div>
   )


}



export default CardLastGameLoader;

