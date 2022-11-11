import { cardFunctions } from "../../../../functions/CardFunctions";
import { LiveScore } from "../../../../interfaces/LiveScoreInterface";
import "./Card.css";



function Card({ game }: { game: LiveScore }): JSX.Element {

   return (
      <div className="Card">
         <div className="info-container">

            <div className="home-team-image team">
               <p>{game.event_home_team}</p>
               <img className="team-logo" src={game.home_team_logo} alt="" />
            </div>
            <div className="score-container">
               <p></p><p></p>
               VS
               <span className="score-live" >{game.event_final_result}</span>
               <span>{game.event_status}'</span>
            </div>
            <div className="home-team-image team">
               <p>{game.event_away_team}</p>
               <img className="team-logo" src={game.away_team_logo} alt="" />
            </div>
         </div>

         <div className="icons">
            <img className="scorers-icon" src="https://i.ibb.co/yp992z3/football.png" onClick={() => cardFunctions.getScorers(game)} alt="" width={35} />
            <img className="statistic-icon" src="https://i.ibb.co/xfFn4fq/pie-chart.png" alt="" width={35} />
            <img className="cards-icon" src="https://i.ibb.co/74K67wD/flash-cards.png" alt="" width={35} />
         </div>
      </div>
   )


}



export default Card;

