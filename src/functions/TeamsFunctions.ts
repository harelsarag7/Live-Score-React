import { config } from "../config/config"
import { LiveScore, TeamInterface } from "../interfaces/LiveScoreInterface"

 class TeamFucntions {

    async getTeamData(teamKey: number): Promise<TeamInterface | undefined> {
        try {
          const response =  await fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${teamKey}&APIkey=${config.apiKey}`).then(res => res.json());
           return response.result[0];
           
        } catch (e){
            return undefined
        }

        // return response;
    }
}
export const teamFucntions = new TeamFucntions();
