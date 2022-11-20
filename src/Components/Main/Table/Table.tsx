import { tab } from '@testing-library/user-event/dist/tab';
import { useEffect, useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { cardFunctions } from '../../../functions/CardFunctions';
import ScrollToTop from '../../../functions/scrollUpFunction';
import { TableFunctionAll } from '../../../functions/TableFunctions';
import { teamFucntions } from '../../../functions/TeamsFunctions';
import { general } from '../../../interfaces/General';
import { standingInterface } from '../../../interfaces/TableInterface';
import League from '../League/League';
import './Table.css';
import TableStracture from './TableStracture/TableStracture';


function Table() {
    const [table, setTable] = useState<standingInterface[]>([])
    const [leagueId, setLeagueId] = useState(202);
    const [localLeague, SetLocalLeague] = useLocalStorage(`league`, `202`)
    const [localCountry, SetLocalCountry] = useLocalStorage(`country`, ``)

    useEffect(() => {
        var league = localStorage.getItem('league');
        var country = localStorage.getItem('country');
        if(localStorage.getItem('league')  === null){
            league = "202";
            country = "62"
        }
        TableFunctionAll.getStandingByLeague(Number(league)).then(res=> {
            let promises = res.map(team => teamFucntions.getTeamLogo(team.team_key).then(img => team.logo = img));
            Promise.all(promises).then(() => setTable(res));
        });
        ScrollToTop();
    }, [leagueId])

    function ClickedLeague(league: number, country: number) {
        if(league === leagueId){
            return;
          }
          SetLocalLeague(league.toString().toLocaleLowerCase())
          SetLocalCountry(country.toString().toLocaleLowerCase())
                //   cardFunctions.setLocalLeague(league, country)
         setLeagueId(league)
     
     }

    return (
        <div className='Table'>
            <div className="LeagueDiv">
                {general.Leagues.map((league) => <League key={league.id} image={league.image} name={league.name} onclick={() => ClickedLeague(league.id,league.countryId)}/>)}
            </div>
            <div className='TableDiv'>
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
    )
}

export default Table;