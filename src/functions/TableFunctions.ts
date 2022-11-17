import { config } from "../config/config"
import { standingInterface, TableInterfaceSuccess } from "../interfaces/TableInterface";

class TableFunctions {
    async getStandingByLeague(leagueId:number): Promise<standingInterface[]> {
        let standing: any = await fetch(`https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=207&APIkey=${config.apiKey2}&leagueId=${leagueId}`)
            .then(res => res.json())
        console.log(standing);
        return standing.result.total;
    }
}

export const TableFunctionAll = new TableFunctions()