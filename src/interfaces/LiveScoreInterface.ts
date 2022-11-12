// export interface LiveScore {
    
// }
interface Goalscorer {
   time: string;
   home_scorer: string;
   home_scorer_id: string;
   home_assist: string;
   home_assist_id: string;
   score: string;
   away_scorer: string;
   away_scorer_id: string;
   away_assist: string;
   away_assist_id: string;
   info: string;
   info_time: string;
}
interface Substitute {
   time: string;
   home_scorer: any;
   home_assist: string;
   score: string;
   away_scorer: any;
   away_assist: string;
   info: string;
   info_time: string;
}
interface Card {
   time: string;
   home_fault: string;
   card: string;
   away_fault: string;
   info: string;
   home_player_id: string;
   away_player_id: string;
   info_time: string;
}
interface HomeTeam {
   starting_lineups: any[];
   substitutes: any[];
   coaches: any[];
   missing_players: any[];
}
interface AwayTeam {
   starting_lineups: any[];
   substitutes: any[];
   coaches: any[];
   missing_players: any[];
}
interface Lineups {
   home_team: HomeTeam;
   away_team: AwayTeam;
}
interface Statistic {
   type: string;
   home: string;
   away: string;
}
export interface LiveScore {

   event_key: number;
   event_date: string;
   event_time: string;
   event_home_team?: string;
   home_team_key: number;
   event_away_team?: string;
   away_team_key: number;
   event_halftime_result: string;
   event_final_result: string;
   event_ft_result: string;
   event_penalty_result: string;
   event_status: string;
   country_name: string;
   league_name: string;
   league_key: number;
   league_round: string;
   league_season: string;
   event_live: string;
   event_stadium: string;
   event_referee: string;
   home_team_logo: string;
   away_team_logo: string;
   event_country_key: number;
   league_logo: string;
   country_logo: string;
   event_home_formation: string;
   event_away_formation: string;
   fk_stage_key: number;
   stage_name: string;
   league_group?: any;
   goalscorers: Goalscorer[];
   substitutes: Substitute[];
   cards: Card[];
   lineups: Lineups;
   statistics: Statistic[];
   onclick:()=>void
}









// Spesific Team interface:

     interface Player {
        player_key: any;
        player_name: string;
        player_number: string;
        player_country?: any;
        player_type: string;
        player_age: string;
        player_match_played: string;
        player_goals: string;
        player_yellow_cards: string;
        player_red_cards: string;
        player_image: string;
    }

     interface Coach {
        coach_name: string;
        coach_country?: any;
        coach_age?: any;
    }

    export interface TeamInterface {
        team_key: number;
        team_name: string;
        team_logo: string;
        players: Player[];
        coaches: Coach[];
    }

  

