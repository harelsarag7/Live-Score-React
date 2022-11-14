import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../../../functions/scrollUpFunction";
import { teamFucntions } from "../../../functions/TeamsFunctions";
import { TeamInterface } from "../../../interfaces/LiveScoreInterface";
import "./TeamPage.css";

function TeamPage(): JSX.Element {
const teamId = useParams()
const [team, setTeam] = useState<TeamInterface>();

useEffect(() => {
    const numberTeamId = teamId["teamId"]
    
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
                    <div> Table: teamID is in color </div>
                  </div>

                </div>

                </div>

            
        </div>
    );
}

export default TeamPage;
