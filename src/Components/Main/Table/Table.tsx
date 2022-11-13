import { cardFunctions } from '../../../functions/CardFunctions';
import League from '../League/League';
import './Table.css';


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

    return (
        <div className='Table'>
            <div className="LeagueDiv">
                {Leagues.map((league) => <League key={league.id} name={league.name}/>)}
            </div>
        </div>
    )
}

export default Table;