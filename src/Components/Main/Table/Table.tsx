import { tab } from '@testing-library/user-event/dist/tab';
import { useEffect, useState } from 'react';
import { TableFunctionAll } from '../../../functions/TableFunctions';
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

    useEffect(() => {
        let leagueId = 202;
        TableFunctionAll.getStandingByLeague(leagueId).then(res=> setTable(res))
    }, [])
    return (
        <div className='Table'>
            <div className="LeagueDiv">
                {Leagues.map((league) => <League key={league.id} name={league.name} onclick={() => TableFunctionAll.getStandingByLeague(league.id).then((res) => setTable(res))} />)}
            </div>
            <div className='TableDiv'>
                <table>
                    <tr>
                    <th>Team</th>
                    <th>Place</th>
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