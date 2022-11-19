import { useEffect, useState } from "react";
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

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Leagues = [
  {
    name: 'Champion League',
    id: 2,
    countryId: 1,
    image: "data:image/png;base64,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"

  },
  {
    name: 'Premier Leauge',
    id: 152,
    countryId: 44,
    image: "https://seeklogo.com/images/E/england-flag-logo-9A30B7DCF3-seeklogo.com.png"

  },
  {
    name: 'La Liga',
    id: 302,
    countryId: 6,
    image: "https://i.pinimg.com/736x/ee/13/31/ee1331482f907f41c73b3d996b2945fa.jpg"

  },
  {
    name: 'BundesLiga',
    id: 171,
    countryId: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png"

  },
  {
    name: 'Serie A',
    id: 207,
    countryId: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png"

  },
  {
    name: 'Israel League',
    id: 202,
    countryId: 62,
    image: "https://cashcow-cdn.azureedge.net/images/3b4a5abe-8512-44f7-a3a2-71f8f5f19802.jpg"
  },
  {
    name: 'World Cup',
    id: 28,
    countryId: 8,
    image: "data:image/png;base64,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"
  },
]


function LiveSection(): JSX.Element {
  const [liveGame, SetLiveGame] = useState<LiveScore[] | undefined>(undefined);
  const [lastGame, SetLastGame] = useState<LiveScore[] | undefined>(undefined);
  const [leagueId, setLeagueId] = useState<number>(Number);

  useEffect(() => {
    var league = localStorage.getItem('League');
    var country = localStorage.getItem('Country');
       if(localStorage.getItem('League')  === null){
            league = "202";
            country = "62"
        }

    cardFunctions.LeagueOnClick(Number(league), Number(country)).then(res => {
        SetLiveGame(res[0])
        SetLastGame(res[1])
    })
    // ScrollToTop();
  }, [leagueId])

  function ClickedLeague(league: number, country: number) {
    if(league === leagueId){
      return;
    }
              SetLiveGame(undefined)
          SetLastGame(undefined)
   cardFunctions.setLocalLeague(league, country)
    setLeagueId(Number(league))

}
  
  return (
    <div className="LiveSection">
      <div className="LeagueDiv">
        {Leagues.map((league) => <League key={league.id} image={league.image} name={league.name}
        onclick={() => ClickedLeague(league.id,league.countryId)}
           />)}
      </div>
      <div className="containers">
        <h3 className="games-header">Live Games</h3>
        <div id="live-games-container">
          {liveGame === undefined
            ? loaderCardsArray.loaderCards.map((item) =>
              <CardLoader key={item.event_key} game={item} />
            )
            : liveGame.length === 0
              ? 
              <div className="NoLiveGamesDiv">
                <p>No Live Games</p>
              </div>
              :
              liveGame.map((item) =>
                <Card key={item.event_key} game={item} />
              )}
        </div>

        <h3 className="games-header">Last Games</h3>
        <div id="live-games-container-last-game">

          {lastGame === undefined
            ? loaderCardsArray.loaderCards.map((item) =>
              <CardLastGameLoader key={item.event_key} game={item} />
            )
            : lastGame.length === 0
              ? 'No Last Games'
              :
              <Carousel breakPoints={breakPoints}>
              {lastGame.map((item) => (
                <CardLastGame key={item.event_key} game={item} />
                ))}
             </Carousel>
}
        </div>
      </div>
    </div>

  );
}

export default LiveSection;
