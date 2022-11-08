import { useEffect, useState } from "react";
import "./LiveSection.css";
import Card, { LiveScore } from './Card/Card';

function LiveSection(): JSX.Element {
const [games, SetGames] = useState<LiveScore[]>([])
const apiKey = "581fb55ff92d00056049811d83a45652c46ae3ff89ec0166c24366d92d25a22c"

async function getApiData() {
  const response = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`
  ).then((response) => response.json());

  return SetGames(response.result); 
  }

  useEffect(() => {
    getApiData()
    console.log(games);
  }, [])

  
    
    return (
        <div className="LiveSection">
            <div id="live-games-container">
                {games.map((item) => {
                    return <Card game={item}/>
                })}
            </div>
        </div>
    );
}

export default LiveSection;



// // goalsscorers - need to change to modal or collape
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



// get games from spesific country
// async function getApiData() {
//   const response:liveScore = await fetch(
//     `https://apiv2.allsportsapi.com/football/?met=Livescore&countryId=6&APIkey=${apiKey}`
//   ).then((response) => response.json());


//country id 62 = israel
//country id 6 = spain
  

// // get games by month
// async function getApiDataLastMonth() {
//     const response:liveScore = await fetch(
//       `https://apiv2.allsportsapi.com/football/?met=Fixtures&countryId=62&APIkey=${apiKey}&from=2022-10-01&to=2022-11-06`
//     ).then((response) => response.json());
  
  
//   // setGames(response)
//     // card title= Vs= 
//       return response;
//   }
  