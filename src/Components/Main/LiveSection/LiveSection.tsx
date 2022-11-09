import { useEffect, useState } from "react";
import "./LiveSection.css";
import Card, { CardLiveGame, LiveScore } from './Card/Card';
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
const [liveGame, SetLiveGame] = useState<CardLiveGame[]>([])
const [lastGame, SetLastGame] = useState<CardLiveGame[]>([])
const apiKey = "581fb55ff92d00056049811d83a45652c46ae3ff89ec0166c24366d92d25a22c"

async function getApiDataLiveGame() {
  const response = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`
  ).then((response) => response.json());
    
  return SetLiveGame(response.result); 
  }
async function getApiDataLastGame() {
  const response = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${apiKey}&from=2021-05-18&to=2021-05-18`
  ).then((response) => response.json());
    
  return SetLastGame(response.result); 
  }
// async function getApiDataLeagues() {
//   let leagueId;
//   // &leagueId=${leagueId}
//   const response = await fetch(
//     `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${apiKey}`
//   ).then((response) => response.json());
//     console.log(response);
    
//   }







// goalsscorers - need to change to modal or collape
// function getScorers(game: any) {
//     let home_scorers = []
//     let away_scorers = []
//     for(let i = 0; i < game.goalscorers.length; i++){
//       if(game.goalscorers[i].home_scorer){
//         home_scorers.push(game.goalscorers[i].home_scorer? game.goalscorers[i].home_scorer : <></> )
//       } else if(game.goalscorers[i].away_scorers){
  
//         away_scorers.push(game.goalscorers[i].away_scorers? game.goalscorers[i].away_scorers : <></> )
//       } 
  
//       if(home_scorers.length === 0){
//         home_scorers.push("No Goals")
//       } else if(away_scorers.length === 0){
//         away_scorers.push("No Goals")
//       } 
//     }}

//  get games from spesific country
// async function getApiData() {
//   const response = await fetch(
//     `https://apiv2.allsportsapi.com/football/?met=Livescore&countryId=62&APIkey=${apiKey}`
//   ).then((response) => response.json());
// return SetGames(response.result); 
// }

// country id 62 = israel
// country id 6 = spain

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
// }
async function LeagueOnClick(leagueId :number, countryId: number){
  // setLive
  const liveGames = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}}&countryId=${countryId}`
  ).then((liveGames) => liveGames.json());
    // return console.log(liveGames.result.leagueId);
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
  

function getScorers(game:any) {
   let home_scorers = []
   let away_scorers = []
   for(let i = 0; i < game.goalscorers.length; i++){
     if(game.goalscorers[i].home_scorer){
       home_scorers.push(game.goalscorers[i].home_scorer? game.goalscorers[i].home_scorer : <></> )
     } else if(game.goalscorers[i].away_scorer){
 
       away_scorers.push(game.goalscorers[i].away_scorer? game.goalscorers[i].away_scorer : <></> )
     } 
   }
 
     if(home_scorers.length === 0){
       home_scorers.push("No Goals")
     }
     if(away_scorers.length === 0){
       away_scorers.push("No Goals")
     } 
   

   return alert(`${game.event_home_team}: ${home_scorers} \n ${game.event_away_team}: ${away_scorers}  `)
}

  useEffect(() => {
    getApiDataLiveGame()
    getApiDataLastGame()   
    // console.log(liveGame);
  }, [])

  
    
    return (
        <div className="LiveSection">
          <div className="LeagueDiv">
                {Leagues.map((league) => <League key={league.id} name={league.name} onclick={() => LeagueOnClick(league.id, league.countryId)} />)}
            </div>
          <div className="containers">
              <h3 className="games-header">Live Games</h3>
            <div id="live-games-container">
                {liveGame.map((item) => {
                  return <Card key={item.event_key} onclick={() => getScorers(item)} event_away_team={item.event_away_team} away_team_logo={item.away_team_logo} event_status={item.event_status} event_final_result={item.event_final_result} event_home_team={item.event_home_team} home_team_logo={item.home_team_logo}/>
                })} 
            </div>
              <h3 className="games-header">Last Games</h3>
            <div id="live-games-container-last-game">
                {lastGame.map((item) => {
                    return <CardLastGame key={item.event_key} onclick={()=> { alert(item.event_status) }} event_away_team={item.event_away_team} away_team_logo={item.away_team_logo} event_status={item.event_status} event_final_result={item.event_final_result} event_home_team={item.event_home_team} home_team_logo={item.home_team_logo}/>
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
  