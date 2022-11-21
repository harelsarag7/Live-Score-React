import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loaderCardsArray } from "../../../arrays/LoaderCardsArray";
import { cardFunctions } from "../../../functions/CardFunctions";
import ScrollToTop from "../../../functions/scrollUpFunction";
import { TableFunctionAll } from "../../../functions/TableFunctions";
import { teamFucntions } from "../../../functions/TeamsFunctions";
import { LiveScore, TeamInterface } from "../../../interfaces/LiveScoreInterface";
import { standingInterface } from "../../../interfaces/TableInterface";
import CardLastGame from "../LiveSection/CardLastGame/CardLastGame";
import CardLastGameLoader from "../LiveSection/CardLastGameLoader/CardLastGameLoader";
import TableStracture from "../Table/TableStracture/TableStracture";
import "./TeamPage.css";

function TeamPage(): JSX.Element {
  const [table, setTable] = useState<standingInterface[]>([])
const teamId = useParams()
const [team, setTeam] = useState<TeamInterface>();
const [lastGame, SetLastGame] = useState<LiveScore[] | undefined>(undefined);


useEffect(() => {
    const numberTeamId = teamId["teamId"]
    var league = localStorage.getItem('league');
    var country = localStorage.getItem('country');
    TableFunctionAll.getStandingByLeague(Number(league)).then(res=> {
      let promises = res.map(team => teamFucntions.getTeamLogo(team.team_key).then(img => team.logo = img));
      Promise.all(promises).then(() => setTable(res));
  });

  teamFucntions.getLastTeamGames(Number(numberTeamId)).then(res => {
    SetLastGame(res)
})

    ScrollToTop();
    teamFucntions.getTeamData(numberTeamId? +numberTeamId: 0).then(res => {
        console.log(numberTeamId? +numberTeamId: 0);
        setTeam(res)
    });
        
}, [teamId])

    return (
        <div className="TeamPage">
                <div className="team-container">
                    <h1>{team?.team_name}</h1> 
                    <img id="team-logo" src={team?.team_logo} alt="" />
                <div className="layout">

                  <div className="LiveAndLastGamesPerTeam">
                    <div> Live Match:</div>
                    <div> Featured Match:</div>
                  </div>  
                 
                 
                  <div className="LiveAndLastGamesPerTeam">
                    <div> Last Games:</div>
                    <div id="team-last-games">
          {
          lastGame === undefined
            ? loaderCardsArray.loaderCards.map((item) =>
              <CardLastGameLoader key={item.event_key} game={item} />
            )
            : lastGame.length === 0
              ? 'No Last Games'
              :
              lastGame.map((item) =>
                <CardLastGame key={item.event_key} game={item} />
              )}
        </div>





                    <div>Table: teamID is in color</div>

                    <div className="table-container">
                    <table>
                    <tr>
                    {/* <th>Team</th> */}
                    <th>Place</th>
                    <th>Team</th>
                    <th>Points</th>
                    <th>Win</th>
                    <th>Lose</th>
                    </tr>
                    {table?.map((team)=> <TableStracture key={team.team_key} standing={team}/>)}
                </table>
                       </div>
                  </div>

                </div>

                </div>

            
        </div>
    );
}

export default TeamPage;
