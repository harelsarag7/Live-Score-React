import { LiveScore } from "../Components/Main/LiveSection/Card/Card"

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
     
}
export const cardFunctions = new CardFunctions();
