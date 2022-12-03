import { NavLink } from "react-router-dom";
import { LiveScore } from "../../../../interfaces/LiveScoreInterface";
import "./CardFuture.css";

function CardFuture({ game }: { game: LiveScore }): JSX.Element {
    return (
        <div className="CardFuture">
         <div className="info-container">

                <p className="team-name">{game.event_home_team}</p>
                <div className="home-team-image team">
                <NavLink to={`/Team/${game.home_team_key}`}><img className="team-logo" src={game.home_team_logo} alt="" /></NavLink>
                </div>
                <div className="score-container">
                VS
                {/* <span className="score-live" >{game.event_date}</span> */}
                <span>{game.event_date}</span>
                </div>
                <div className="home-team-image team">
                <NavLink to={`/Team/${game.away_team_key}`}><img className="team-logo" src={game.away_team_logo} alt="" /></NavLink>
                </div>
                <p className="team-name">{game.event_away_team}</p>
                </div>
      
      
        </div>



    );
}

export default CardFuture;
