import { useEffect, useState } from "react";
import "./LiveSection.css";
import Card, { CardLiveGame, LiveScore } from './Card/Card';
import CardLastGame from "./CardLastGame/CardLastGame";

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



// goalsscorers - need to change to modal or collape
// function getScores(game: any) {
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
//     }

//  get games from spesific country
// async function getApiData() {
//   const response = await fetch(
//     `https://apiv2.allsportsapi.com/football/?met=Livescore&countryId=62&APIkey=${apiKey}`
//   ).then((response) => response.json());
// return SetGames(response.result); 
// }

// country id 62 = israel
// country id 6 = spain
  

function getScorers({game}: {game:LiveScore}) {
   // alert("hey")
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
    console.log(liveGame);
  }, [])

  
    
    return (
        <div className="LiveSection">
            <div id="live-games-container">
              <h1>Live Games</h1>
                {liveGame.map((item) => {
                    return <Card key={item.event_home_team} onclick={()=> { alert(item.event_status) }} event_away_team={item.event_away_team} away_team_logo={item.away_team_logo} event_status={item.event_status} event_final_result={item.event_final_result} event_home_team={item.event_home_team} home_team_logo={item.home_team_logo}/>
                })}
            </div>
            <div id="live-games-container-last-game">
              <h1>Last Games</h1>
                {lastGame.map((item) => {
                    return <CardLastGame key={item.home_scorer} onclick={()=> { alert(item.event_status) }} event_away_team={item.event_away_team} away_team_logo={item.away_team_logo} event_status={item.event_status} event_final_result={item.event_final_result} event_home_team={item.event_home_team} home_team_logo={item.home_team_logo}/>
                })}
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
  