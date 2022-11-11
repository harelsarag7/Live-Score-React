import { useEffect, useState } from "react";
import "./LiveSection.css";
import Card from './Card/Card';
import CardLastGame from "./CardLastGame/CardLastGame";
import League from "../League/League";
import { cardFunctions } from "../../../functions/CardFunctions";
import { LiveScore } from "../../../interfaces/LiveScoreInterface";


const Leagues = [
  {
      name: 'Champion League',
      id: 2,
      countryId: 1

  },
  {
      name: 'Premier Leauge',
      id: 152,
      countryId: 44

  },
  {
      name: 'La Liga',
      id: 302,
      countryId: 6

  },
  {
      name: 'BundesLiga',
      id: 171,
      countryId: 4

  },
  {
      name: 'Serie A',
      id: 207,
      countryId: 5

  },
  {
      name: 'Israel League',
      id: 202,
      countryId: 62
  },
  {
      name: 'World Cup',
      id: 28,
      countryId: 8
  },
]

function LiveSection(): JSX.Element {
const [liveGame, SetLiveGame] = useState<LiveScore[]>([])
const [lastGame, SetLastGame] = useState<LiveScore[]>([])

  useEffect(() => {
     cardFunctions.getApiDataLiveGame().then(liveGames => SetLiveGame(liveGames));
    cardFunctions.getApiDataLastGame().then(lastGames => SetLastGame(lastGames));   
  }, [])

  
    
    return (
        <div className="LiveSection">
          <div className="LeagueDiv">
                {Leagues.map((league) => <League key={league.id} name={league.name} onclick={() => cardFunctions.LeagueOnClick(league.id, league.countryId).then(res => {
                  SetLiveGame(res[0])
                  SetLastGame(res[1])
                  })}  />)}
            </div>
          <div className="containers">
              <h3 className="games-header">Live Games</h3>
            <div id="live-games-container">
                {liveGame.length? liveGame.map((item) => 
                   <Card key={item.event_key}  game={item} />
                ): "No live games"} 
            </div>
              <h3 className="games-header">Last Games</h3>
            <div id="live-games-container-last-game">
                {lastGame.map((item) => 
                     <CardLastGame key={item.event_key} game={item}/>
                )}
            </div>
          </div>
        </div>
        
    );
}

export default LiveSection;
