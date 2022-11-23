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
import { useDispatch, useSelector } from "react-redux";
import { chooseCountry, chooseLeague } from "../../app/chosenLeagueSlice";


function Table() {
    const [table, setTable] = useState<standingInterface[]>([])
    const [leagueId, setLeagueId] = useState(202);
    const selectorLeagueLeague = useSelector((state: any) => state.chosenLeague.league)
    const selectorLeagueCountry = useSelector((state: any) => state.chosenLeague.country)
    let selectorLeagueDispatch = useDispatch();
    console.log(selectorLeagueLeague)
    console.log(selectorLeagueCountry)


    useEffect(() => {
        TableFunctionAll.getStandingByLeague(selectorLeagueLeague).then(res => {
            let promises = res.map(team => teamFucntions.getTeamLogo(team.team_key).then(img => team.logo = img));
            Promise.all(promises).then(() => setTable(res));
        });
        ScrollToTop();
    }, [leagueId])

    function ClickedLeague(league: number, country: number) {
        if (league.toString().toLocaleLowerCase() === selectorLeagueLeague.league && country.toString().toLocaleLowerCase() === selectorLeagueCountry.country) {
            return;
        }
        selectorLeagueDispatch(chooseLeague(league))
        selectorLeagueDispatch(chooseCountry(country))
        setLeagueId(league)
    }

    return (
        <div className='Table'>
            <div className="LeagueDiv LeagueDivTable">
                {general.Leagues.map((league) => <League key={league.id} image={league.image} name={league.name} onclick={() => ClickedLeague(league.id, league.countryId)} />)}
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

                    {table?.map((team) => <TableStracture key={team.team_key} standing={team} />)}
                </table>
            </div>
        </div>
    )
}

export default Table;