import { cardFunctions } from "../../../../functions/CardFunctions";
import { LiveScore } from "../../../../interfaces/LiveScoreInterface";
import "./CardLoader.css";



function CardLoader( game: any ): JSX.Element {

   return (
      <div className="CardLoader">
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
            <img className="scorers-icon" src="https://i.ibb.co/yp992z3/football.png"  alt=""  onClick={() => cardFunctions.getScorers(game)}/>
            <img className="statistic-icon" src="https://i.ibb.co/xfFn4fq/pie-chart.png" alt="" />
            <img className="cards-icon" src="https://i.ibb.co/74K67wD/flash-cards.png" alt="" />
         </div>
      </div>
   )


}



export default CardLoader;

