import { NavLink } from "react-router-dom";
import { LiveScore } from "../../../../interfaces/LiveScoreInterface";
import "./CardFuture.css";

function CardFuture({ game }: { game: LiveScore }): JSX.Element {
    return (
        <div className="CardFuture">
            <p>{game.event_home_team}</p>
            <NavLink to={'/team/' + game.home_team_key}>
                <img src={game.home_team_logo} alt="" />
            </NavLink>
            <div>
                <p>{game.event_date}</p>
                <p>VS</p>
            </div>
            <NavLink to={'/team/' + game.away_team_key}>
                <img src={game.away_team_logo} alt="" />
            </NavLink>
            <p>{game.event_away_team}</p>
        </div>
    );
}

export default CardFuture;
