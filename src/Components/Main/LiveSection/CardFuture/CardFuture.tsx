import { LiveScore } from "../../../../interfaces/LiveScoreInterface";
import "./CardFuture.css";

function CardFuture({ game }: { game: LiveScore }): JSX.Element {
    return (
        <div className="CardFuture">
                <p>{game.event_home_team}</p>
                <img src={game.home_team_logo} alt="" />
                <div>
                    <p>{game.event_date}</p>    
                    <p>VS</p>
                </div>
                <img src={game.away_team_logo} alt="" />
                <p>{game.event_away_team}</p>
        </div>
    );
}

export default CardFuture;
