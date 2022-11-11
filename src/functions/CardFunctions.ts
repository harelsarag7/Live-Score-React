import { config } from "../config/config"
import { LiveScore } from "../interfaces/LiveScoreInterface"

 class CardFunctions {
     getScorers(game: LiveScore) {
        let home_scorers = []
        let away_scorers = []
        for(let i = 0; i < game.goalscorers.length; i++){
          if(game.goalscorers[i].home_scorer){
            home_scorers.push(game.goalscorers[i].home_scorer? game.goalscorers[i].home_scorer : "<></>" )
          } else if(game.goalscorers[i].away_scorer){
      
            away_scorers.push(game.goalscorers[i].away_scorer? game.goalscorers[i].away_scorer : "<></>")
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


      getYesterdayDate() {
      let newDate = new Date();
      let compilerDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()-1);
    
      let dd = String(compilerDate.getDate()).padStart(2, '0');
      let mm = String(compilerDate.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = compilerDate.getFullYear();
      
      let yesterday =  `${yyyy}-${mm}-${dd}`;
    
    console.log(yesterday);
      return yesterday;
    }


     getDateBeforeWeek() {
      let today = new Date();
      let compilerDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);
  
      let dd = String(compilerDate.getDate()).padStart(2, '0');
    let mm = String(compilerDate.getMonth() + 1).padStart(2, '0');
    let yyyy = compilerDate.getFullYear();
    
    let dateBeforeLastWeek = `${yyyy}-${mm}-${dd}`;
  
      console.log(dateBeforeLastWeek);
      return dateBeforeLastWeek;
    }
    


    async  LeagueOnClick(leagueId :number, countryId: number){
      const liveGames = await fetch(
        `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${config.apiKey}}&countryId=${countryId}`
      ).then((liveGames) => liveGames.json())
      const filterLiveGames = liveGames.result.filter((team: any) => team.league_key ===  leagueId);

      const yesterday = cardFunctions.getYesterdayDate();
      const dateBeforeWeek = cardFunctions.getDateBeforeWeek();
      const response = await fetch(
        `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${config.apiKey}&from=${dateBeforeWeek}&to=${yesterday}&countryId=${countryId}`
        ).then((response) => response.json())
      const filterLastGames = response.result.filter((team: any) => team.league_key ===  leagueId)
      
      return [filterLiveGames, filterLastGames]; 
    }
      

      async  getApiDataLastGame() {
      const response = await fetch(
        `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${config.apiKey}&from=2021-05-18&to=2021-05-18`
      ).then((response) => response.json());
        
      return response.result? response.result :"<h3>No Games</h3>"; 
      }

      async  getApiDataLiveGame() {
        const response = await fetch(
          `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${config.apiKey}`
        ).then((response) => response.json());
          
        return response.result? response.result :"<h3>No Games</h3>"; 
        }
    
     
}
export const cardFunctions = new CardFunctions();
