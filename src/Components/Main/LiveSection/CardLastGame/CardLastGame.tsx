import { NavLink } from "react-router-dom";
import { cardFunctions } from "../../../../functions/CardFunctions";
import { LiveScore } from "../../../../interfaces/LiveScoreInterface";
import ModalH2HComponent from "../../../Modals/ModalH2HComponent/ModalH2HComponent";
import ModalStatsComponent from "../../../Modals/ModalStatsComponent/ModalStatsComponent";
import ModalVideoComponent from "../../../ModalVideoComponent/ModalVideoComponent";
import "./CardLastGame.css"


function CardLastGame({ game }:{game:LiveScore}): JSX.Element {

   return (
      <div className="CardLastGame">
         {/* 
       <ul>
         <li>{game.event_home_team}</li>
         <li>{game.event_away_team}</li>
       </ul> */}


         <div className="info-container">

            <div className="home-team-image team">
               <p>{game.event_home_team}</p>
               <NavLink to={`/Team/${game.home_team_key}`}><img className="team-logo" src={game.home_team_logo} alt="" /></NavLink>
            </div>
            <div className="score-container">
               <p></p><p></p>
               VS
               <span className="score-live" >{game.event_final_result}</span>
               <span>{game.event_status}'</span>
            </div>
            <div className="home-team-image team">
               <p>{game.event_away_team}</p>
               <NavLink to={`/Team/${game.away_team_key}`}><img className="team-logo" src={game.away_team_logo} alt="" /></NavLink>
            </div>
         </div>

         <div className="icons">
            <ModalStatsComponent game={game} />
            <ModalVideoComponent game={game} />
            {/* <img className="video-icon" src="https://i.ibb.co/xqWJ1Bp/youtube.png" alt="" /> */}
            {/* <img className="statistic-icon" src="https://i.ibb.co/xfFn4fq/pie-chart.png" alt="" /> */}
            <ModalH2HComponent game={game} />
            {/* <img className="H2H-icon" src="https://i.ibb.co/WksBhv4/fight.png" alt="" /> */}
         </div>
      </div>
      
   )


}



export default CardLastGame;




// // let teamsMap = teams.result;
// // return (
//   return ( teams.result?
//     // {teamsMap.map((team) => console.log(team))}
//     <div className="Card">
//   {/* <p>{teams.map((team) => {team.event_key})}</p> */}
//   <div className="info-container">

//   <div className="home-team-image team">
//     <ul>
//     {teamsMap? teamsMap.map((game) =>
//      <li>{game.country_name}</li>): <></>}
//     </ul>
//       {props.result[0].event_home_team}
//       <img className="team-logo" src={teams.result[counter].home_team_logo} alt="" />
//     </div>
//     <div className="score-container">
//        VS
//        <span className="score-live" >{teams.result[counter].event_final_result}</span>
//        <span>{teams.result[counter].event_status}'</span>
//     </div>
//   <div className="home-team-image team">{teams.result[counter].event_away_team}
//       <img className="team-logo" src={teams.result[counter].away_team_logo} alt="" />
//   </div>
// </div>

//   {/* <button onClick={getScores(teams.result[counter].goalscorers)}>click */}
//   <div className="statistics-container">
//   <button onClick={() => getScores(teams.result? teams.result[counter] : "No Goals")}>Goals</button>
//   </div>
//   {/* <button onClick={() => {teams.result? teams.result[counter].goalscorers.length: <></>}}>click</button> */}

//    {/* {users.result[counter].event_key ?
//    <li key={users.result[counter].country_name}>{users.result[counter].country_name}</li> : <></>
//     }
//   </ul> */}
// </div>
//   : <></>)

// };