import { useEffect } from "react";
import { cardFunctions } from "../../../../functions/CardFunctions";
import { teamFucntions } from "../../../../functions/TeamsFunctions";
import { standingInterface } from "../../../../interfaces/TableInterface";
import "./TableStracture.css";

function TableStracture( { standing } : { standing : standingInterface }){
        // var logo: string = "";
    useEffect(() => {
        let logo =  teamFucntions.getTeamData(standing.team_key).then((res) => res?.team_logo)
        console.log(logo);

            // console.log(logo);
        
        
    }, [])
    return (
        <tr className="TableStracture">
                    <td className="rank">{standing.standing_place}</td>
                    {/* <td><img src={standing.logo} alt="" /></td> */}
                    {/* <td>{() => teamFucntions.getTeamLogo(standing.team_key)}</td> */}
                    <td className="team-name-logo"><img className="team-logo" src={standing.logo} alt="" />{standing.standing_team}</td>
                    <td>{standing.standing_PTS}</td>
                    <td>{standing.standing_W}</td>
                    <td>{standing.standing_L}</td>
        </tr>

    )
}

export default TableStracture;