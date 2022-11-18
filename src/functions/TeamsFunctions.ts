import { config } from "../config/config"
import { LiveScore, TeamInterface } from "../interfaces/LiveScoreInterface"
import { cardFunctions } from "./CardFunctions";

 class TeamFucntions {

    async getTeamData(teamKey: number): Promise<TeamInterface | undefined> {
        try {
          const response =  await fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${teamKey}&APIkey=${config.apiKey2}`).then(res => res.json());
           return response.result[0];
           
        } catch (e){
            return undefined
        }

        // return response;
    }
    async getTeamLogo(teamKey: number): Promise<string> {
        try {
          const response =  await fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${teamKey}&APIkey=${config.apiKey2}`).then(res => res.json());
        //   console.log(response.result[0].team_logo);
           
          return response.result[0].team_logo;
           
        } catch (e){
            return ''
        }

        // return response;
    }

    
  async getLastTeamGames(teamId: number) {
    // const liveGames = await fetch(
    //   `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${config.apiKey2}}&countryId=${countryId}`
    // ).then((liveGames) => liveGames.json());
    // console.log(liveGames)
    // const filterLiveGames = liveGames.result.filter((team: any) => team.league_key === leagueId);
    // let TeamID = teamId.toString()
    const yesterday = cardFunctions.getYesterdayDate();
    const dateBeforeWeek = cardFunctions.getDateBeforeWeek();
    const response = await fetch(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${config.apiKey2}&from=${dateBeforeWeek}&to=${yesterday}&teamId=${teamId}`
    ).then((response) => response.json())
    // const filterLastGames = response.result.filter((team: any) => team.league_key === leagueId)
      console.log(response);
      
    return response.result;
  }

}
export const teamFucntions = new TeamFucntions();
