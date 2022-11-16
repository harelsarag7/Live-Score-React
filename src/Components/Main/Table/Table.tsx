import { tab } from '@testing-library/user-event/dist/tab';
import { useEffect, useState } from 'react';
import { cardFunctions } from '../../../functions/CardFunctions';
import ScrollToTop from '../../../functions/scrollUpFunction';
import { TableFunctionAll } from '../../../functions/TableFunctions';
import { teamFucntions } from '../../../functions/TeamsFunctions';
import { standingInterface } from '../../../interfaces/TableInterface';
import League from '../League/League';
import './Table.css';
import TableStracture from './TableStracture/TableStracture';


const Leagues = [
    {
        name: 'Champion League',
        id: 2,
        countryId: 1

    },
    {
        name: 'Premier Leauge',
        id: 152,
        countryId: 44

    },
    {
        name: 'La Liga',
        id: 302,
        countryId: 6

    },
    {
        name: 'BundesLiga',
        id: 171,
        countryId: 4

    },
    {
        name: 'Serie A',
        id: 207,
        countryId: 5

    },
    {
        name: 'Israel League',
        id: 202,
        countryId: 62
    },
    {
        name: 'World Cup',
        id: 28,
        countryId: 8
    },
]


function Table() {
    const [table, setTable] = useState<standingInterface[]>([])
    const [leagueId, setLeagueId] = useState(202);

    useEffect(() => {
        const league = localStorage.getItem('League');
        const country = localStorage.getItem('Country');

        TableFunctionAll.getStandingByLeague(Number(league)).then(res=> {
            let promises = res.map(team => teamFucntions.getTeamLogo(team.team_key).then(img => team.logo = img));
            Promise.all(promises).then(() => setTable(res));
        });
        ScrollToTop();
    }, [leagueId])

    function ClickedLeague(league: number, country: number) {
        cardFunctions.setLocalLeague(league, country)
         setLeagueId(league)
     
     }

    return (
        <div className='Table'>
            <div className="LeagueDiv">
                {Leagues.map((league) => <League key={league.id} name={league.name} onclick={() => ClickedLeague(league.id,league.countryId)}/>)}
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