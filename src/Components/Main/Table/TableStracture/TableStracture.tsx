import { cardFunctions } from "../../../../functions/CardFunctions";
import { teamFucntions } from "../../../../functions/TeamsFunctions";
import { standingInterface } from "../../../../interfaces/TableInterface";
import "./TableStracture.css";

function TableStracture( { standing } : { standing : standingInterface }){
    return (
        <tr className="TableStracture">
                    <td className="rank">{standing.standing_place}</td>
                    {/* <td><img src={getImg} alt="" /></td> */}
                    <td>{standing.standing_team}</td>
                    <td>{standing.standing_PTS}</td>
                    <td>{standing.standing_W}</td>
                    <td>{standing.standing_L}</td>
        </tr>

    )
}

export default TableStracture;