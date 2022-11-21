import React, { useEffect, useState } from "react";
import "./LiveSection.css";
import Card from './Card/Card';
import CardLastGame from "./CardLastGame/CardLastGame";
import League from "../League/League";
import { cardFunctions } from "../../../functions/CardFunctions";
import { LiveScore } from "../../../interfaces/LiveScoreInterface";
import CardLoader from "./CardLoader/CardLoader";
import { loaderCardsArray } from "../../../arrays/LoaderCardsArray";
import CardLastGameLoader from "./CardLastGameLoader/CardLastGameLoader";
import Carousel from "react-elastic-carousel";
import CardFuture from "./CardFuture/CardFuture";
import useLocalStorage from 'react-use-localstorage';
import { general } from "../../../interfaces/General";


function LiveSection(): JSX.Element {
  const [liveGame, SetLiveGame] = useState<LiveScore[] | undefined>(undefined);
  const [lastGame, SetLastGame] = useState<LiveScore[] | undefined>(undefined);
  // const [leagueId, setLeagueId] = useState<number>(Number);
  const [futureGames, SetFututreGames] = useState<LiveScore[] | undefined>([])
  const [localLeague, SetLocalLeague] = useLocalStorage(`league`, `202`)
  const [localCountry, SetLocalCountry] = useLocalStorage(`country`, `62`)
  const [filteredFutureGames, setFilteredFutureGames] = useState<string>("");


  useEffect(() => {
    // var league = localStorage.getItem('League');
    // var country = localStorage.getItem('Country');
    //    if(localStorage.getItem('League')  === null){
    //         league = "202";
    //         country = "62"
    //     }

    cardFunctions.LeagueOnClick(Number(localLeague), Number(localCountry)).then(res => {
      SetLiveGame(res[0])
      SetLastGame(res[1])
    })

    cardFunctions.getFuturesGamesByLeague(Number(localLeague), Number(localCountry)).then((res) => {
      SetFututreGames(res)
    })

  }, [localLeague, localCountry])

  function ClickedLeague(league: number, country: number) {
    if (league.toString().toLocaleLowerCase() === localLeague) {
      return;
    }
    SetLiveGame(undefined)
    SetLastGame(undefined)
    SetLocalLeague(league.toString().toLocaleLowerCase())
    SetLocalCountry(country.toString().toLocaleLowerCase())
  }


  //     function filterBySearch(event)  {
  //   // Access input value
  //   const query = event.target.value;
  //   // Create copy of item list
  //   // var updatedList = [...futureGames];
  //   // Include all elements which includes the search query
  //   const updatedList = futureGames?.filter((item) => {
  //     return 
  //   });
  //   // Trigger render with updated values
  //   setFilteredList(updatedList);
  // };

  function filterBySearch(e: any) {
    console.log(e.target.value);
    const futureSearchValue = e.target.value;

    //  const filtered = {futureGames .filter(name => name.includes(futureSearchValue))}

    // updatedList = updatedList.filter((item) => {
    //   return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    // });
    // const filteredAfterMap = futureGames?.filter((item)=> item.event_away_team?.includes(futureSearchValue))
    return setFilteredFutureGames(futureSearchValue.toString())
  }



  return (
    <div className="LiveSection">
      <div className="LeagueDiv">
        {general.Leagues.map((league) => <League key={league.id} image={league.image} name={league.name}
          onclick={() => ClickedLeague(league.id, league.countryId)}
        />)}
      </div>
      <div className="containers">
        <h3 className="games-header">Live Games</h3>
        <div id="live-games-container">
          {liveGame === undefined ?
            <Carousel breakPoints={general.breakPoints}>
              {loaderCardsArray.loaderCards.map((item) =>
                <CardLoader key={item.event_key} game={item} />
              )}
            </Carousel>

            : liveGame.length === 0 ?
              <div className="NoLiveGamesDiv">
                <p>No Live Games</p>
              </div>
              :
              <Carousel breakPoints={general.breakPoints}>
                {liveGame.map((item) =>
                  <Card key={item.event_key} game={item} />
                )}
              </Carousel>
          }
        </div>

        <h3 className="games-header">Last Games</h3>
        <div id="live-games-container-last-game">
          {lastGame === undefined ?
            <Carousel breakPoints={general.breakPoints}>
              {loaderCardsArray.loaderCards.map((item) =>
                <CardLastGameLoader key={item.event_key} game={item} />
              )}
            </Carousel>
            // "loading.."

            : lastGame.length === 0 ? 'No Last Games' :

              <Carousel breakPoints={general.breakPoints}>
                {lastGame.map((item) => (
                  <CardLastGame key={item.event_key} game={item} />
                ))}
              </Carousel>
          }
        </div>


        <div className="futureGamesAndVideo">
          <div className="future-games">
            <div className="futureGameInputDiv">
              <p> Future Games:</p>
              <input type="text" onChange={(e) => filterBySearch(e)} placeholder="Search team" name="" id="search-future-games" />
            </div>
            {futureGames?.length === 0 ? "Loading..." :
              futureGames === undefined ? "No Future Games" :
                // {names.filter(name => name.includes('J')) 
                futureGames.filter(team => team.event_away_team?.toLocaleLowerCase().includes(filteredFutureGames) || team.event_home_team?.toLocaleLowerCase().includes(filteredFutureGames)).map((item) => (
                  <CardFuture key={item.event_key} game={item} />
                ))}
          </div>
          <iframe id="video-section" src="https://www.youtube.com/embed/BHQCqOpo0nk?autoplay=1&mute=1" allowFullScreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
      </div>
    </div>

  );
}

export default LiveSection;
