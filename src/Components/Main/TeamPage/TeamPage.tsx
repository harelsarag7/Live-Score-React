import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { teamFucntions } from "../../../functions/TeamsFunctions";
import { TeamInterface } from "../../../interfaces/LiveScoreInterface";
import "./TeamPage.css";

function TeamPage(): JSX.Element {
const teamId = useParams()
const [team, setTeam] = useState<TeamInterface>();

useEffect(() => {
    const numberTeamId = teamId["teamId"]
    
    
    teamFucntions.getTeamData(numberTeamId? +numberTeamId: 0).then(res => {
        console.log(numberTeamId? +numberTeamId: 0);
        setTeam(res)
    });
        
}, [teamId])

    return (
        <div className="TeamPage">

                <p>hey:</p> {team?.team_name}

            
        </div>
    );
}

export default TeamPage;
