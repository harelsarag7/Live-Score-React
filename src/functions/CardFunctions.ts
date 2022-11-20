import { config } from "../config/config"
import { LiveScore } from "../interfaces/LiveScoreInterface"

class CardFunctions {
  getScorers(game: LiveScore) {
    let home_scorers = []
    let away_scorers = []
    for (let i = 0; i < game.goalscorers.length; i++) {
      if (game.goalscorers[i].home_scorer) {
        home_scorers.push(game.goalscorers[i].home_scorer ? game.goalscorers[i].home_scorer : "<></>")
      } else if (game.goalscorers[i].away_scorer) {

        away_scorers.push(game.goalscorers[i].away_scorer ? game.goalscorers[i].away_scorer : "<></>")
      }
    }

    if (home_scorers.length === 0) {
      home_scorers.push("No Goals")
    }
    if (away_scorers.length === 0) {
      away_scorers.push("No Goals")
    }


    return alert(`${game.event_home_team}: ${home_scorers} \n ${game.event_away_team}: ${away_scorers}  `)
  }


  getYesterdayDate() {
    let newDate = new Date();
    let compilerDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 1);

    let dd = String(compilerDate.getDate()).padStart(2, '0');
    let mm = String(compilerDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = compilerDate.getFullYear();

    let yesterday = `${yyyy}-${mm}-${dd}`;

    console.log(yesterday);
    return yesterday;
  }
  getTomarrowDate() {
    let newDate = new Date();
    let compilerDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);

    let dd = String(compilerDate.getDate()).padStart(2, '0');
    let mm = String(compilerDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = compilerDate.getFullYear();

    let tomarrow = `${yyyy}-${mm}-${dd}`;

    console.log(tomarrow);
    return tomarrow;
  }


  getDateBeforeWeek() {
    let today = new Date();
    let compilerDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14);

    let dd = String(compilerDate.getDate()).padStart(2, '0');
    let mm = String(compilerDate.getMonth() + 1).padStart(2, '0');
    let yyyy = compilerDate.getFullYear();

    let dateBeforeLastWeek = `${yyyy}-${mm}-${dd}`;

    console.log(dateBeforeLastWeek);
    return dateBeforeLastWeek;
  }
  getDatePlusWeek() {
    let today = new Date();
    let compilerDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    let dd = String(compilerDate.getDate()).padStart(2, '0');
    let mm = String(compilerDate.getMonth() + 1).padStart(2, '0');
    let yyyy = compilerDate.getFullYear();

    let datePlusWeek = `${yyyy}-${mm}-${dd}`;

    console.log(datePlusWeek);
    return datePlusWeek;
  }



  async LeagueOnClick(leagueId: number, countryId: number) {
    const liveGames = await fetch(
      `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${config.apiKey2}}&countryId=${countryId}`
    ).then((liveGames) => liveGames.json());
    console.log(liveGames)
    const filterLiveGames = liveGames.result.filter((team: any) => team.league_key === leagueId);

    const yesterday = cardFunctions.getYesterdayDate();
    const dateBeforeWeek = cardFunctions.getDateBeforeWeek();
    const response = await fetch(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${config.apiKey2}&from=${dateBeforeWeek}&to=${yesterday}&countryId=${countryId}`
    ).then((response) => response.json())
    const filterLastGames = response.result.filter((team: any) => team.league_key === leagueId)

    return [filterLiveGames, filterLastGames];
  }


  async getFuturesGamesByLeague(leagueId: number, countryId: number) {
    const tomarrow = cardFunctions.getTomarrowDate();
    const datePlusWeek = cardFunctions.getDatePlusWeek();
    const response = await fetch(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${config.apiKey2}&from=${tomarrow}&to=${datePlusWeek}&countryId=${countryId}`
    ).then((response) => response.json())
    const futureGames = response.result.filter((team: any) => team.league_key === leagueId)
      console.log("future: " + futureGames);
      
    return futureGames;
  }

  


  async getApiDataLastGame() {
    const response = await fetch(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${config.apiKey2}&from=2021-05-18&to=2021-05-18`
    ).then((response) => response.json());

    return response.result ? response.result : "<h3>No Games</h3>";
  }

  async getApiDataLiveGame() {
    
    const response = await fetch(
      `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${config.apiKey2}`
    ).then((response) => response.json());

    return response.result ;
  }

  getCards(game:LiveScore){
    let home_cards = []
    let away_cards = []
    for(let i=0; i<game.cards.length;i++){
      if(game.cards[i].home_fault){
        home_cards.push(game.cards[i].home_fault + ": " + game.cards[i].card)
      }
      else if(game.cards[i].away_fault){
        away_cards.push(game.cards[i].away_fault + ": " + game.cards[i].card)
      }
    }
    if(home_cards.length==0 && away_cards.length==0){
      return alert('No Cards')
    } else{
      return alert(` ${home_cards} \n  ${away_cards}  `)
    }
  }



   setLocalLeague(league: number, country: number) {
    localStorage.setItem('League', league.toString());
    localStorage.setItem('Country', country.toString());
    return league;

}




}
export const cardFunctions = new CardFunctions();
