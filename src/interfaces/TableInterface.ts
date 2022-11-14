export interface standingInterface {
    standing_place: number;
    standing_place_type: string;
    standing_team: string;
    standing_P: number;
    standing_W: number;
    standing_D: number;
    standing_L: number;
    standing_F: number;
    standing_A: number;
    standing_GD: number;
    standing_PTS: number;
    team_key: number;
    league_key: number;
    league_season: string;
    league_round: string;
    standing_updated: string;
    fk_stage_key: number;
    stage_name: string;
    logo: string;
}

export interface Home {
    standing_place: number;
    standing_place_type?: any;
    standing_team: string;
    standing_P: number;
    standing_W: number;
    standing_D: number;
    standing_L: number;
    standing_F: number;
    standing_A: number;
    standing_GD: number;
    standing_PTS: number;
    team_key: number;
    league_key: number;
    league_season: string;
    league_round: string;
    standing_updated: string;
    fk_stage_key: number;
    stage_name: string;
}

export interface Away {
    standing_place: number;
    standing_place_type?: any;
    standing_team: string;
    standing_P: number;
    standing_W: number;
    standing_D: number;
    standing_L: number;
    standing_F: number;
    standing_A: number;
    standing_GD: number;
    standing_PTS: number;
    team_key: number;
    league_key: number;
    league_season: string;
    league_round: string;
    standing_updated: string;
    fk_stage_key: number;
    stage_name: string;
}

export interface Result {
    total: standingInterface[];
    home: Home[];
    away: Away[];
}

export interface TableInterfaceSuccess {
    success: number;
    result: Result;
}


