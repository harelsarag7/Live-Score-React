import { useEffect, useState } from "react";
import "./LiveSection.css";
import Card, { LiveScore } from './Card/Card';
import CardLastGame from "./CardLastGame/CardLastGame";
import League from "../League/League";

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
const apiKey = "581fb55ff92d00056049811d83a45652c46ae3ff89ec0166c24366d92d25a22c"

async function getApiDataLiveGame() {
  const response = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`
  ).then((response) => response.json());
    
  return SetLiveGame(response.result? response.result :<h3>No Games</h3>); 
  }
async function getApiDataLastGame() {
  const response = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${apiKey}&from=2021-05-18&to=2021-05-18`
  ).then((response) => response.json());
    
  return SetLastGame(response.result? response.result :<h3>No Games</h3>); 
  }

function getYesterdayDate() {
  let newDate = new Date();
  let compilerDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()-1);

  let dd = String(compilerDate.getDate()).padStart(2, '0');
  let mm = String(compilerDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = compilerDate.getFullYear();
  
  let yesterday =  `${yyyy}-${mm}-${dd}`;

console.log(yesterday);
  return yesterday;
}


function getDateBeforeWeek() {
    let today = new Date();
    let compilerDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);

    let dd = String(compilerDate.getDate()).padStart(2, '0');
  let mm = String(compilerDate.getMonth() + 1).padStart(2, '0');
  let yyyy = compilerDate.getFullYear();
  
  let dateBeforeLastWeek = `${yyyy}-${mm}-${dd}`;

    console.log(dateBeforeLastWeek);
    return dateBeforeLastWeek;
}

async function LeagueOnClick(leagueId :number, countryId: number){
  const liveGames = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}}&countryId=${countryId}`
  ).then((liveGames) => liveGames.json());
  const filterLiveGames = liveGames.result.filter((team: any) => team.league_key ===  leagueId)
   SetLiveGame(filterLiveGames); 


const yesterday = getYesterdayDate();
const dateBeforeWeek = getDateBeforeWeek();
  const response = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${apiKey}&from=${dateBeforeWeek}&to=${yesterday}&countryId=${countryId}`
  ).then((response) => response.json())
  const filterGames = response.result.filter((team: any) => team.league_key ===  leagueId)
   SetLastGame(filterGames); 
}
  


  useEffect(() => {
    getApiDataLiveGame()
    getApiDataLastGame()   
  }, [])

  
    
    return (
        <div className="LiveSection">
          <div className="LeagueDiv">
                {Leagues.map((league) => <League key={league.id} name={league.name} onclick={() => LeagueOnClick(league.id, league.countryId)} />)}
            </div>
          <div className="containers">
              <h3 className="games-header">Live Games</h3>
            <div id="live-games-container">
                {liveGame.length? liveGame.map((item) => {
                  return <Card key={item.event_key}  game={item} />
                }): "No live games"} 
            </div>
              <h3 className="games-header">Last Games</h3>
            <div id="live-games-container-last-game">
                {lastGame.map((item) => {
                    return <CardLastGame key={item.event_key} game={item}/>
                })}
            </div>
          </div>
        </div>
        
    );
}

export default LiveSection;









// // get games by month
// async function getApiDataLastMonth() {
//     const response:liveScore = await fetch(
//       `https://apiv2.allsportsapi.com/football/?met=Fixtures&countryId=62&APIkey=${apiKey}&from=2022-10-01&to=2022-11-06`
//     ).then((response) => response.json());
  
  
//   // setGames(response)
//     // card title= Vs= 
//       return response;
//   }
  