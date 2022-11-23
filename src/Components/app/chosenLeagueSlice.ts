import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    league: '202',
    country: '62'
}

const chosenLeagueSlice = createSlice({
  name: 'chosenLeague',
  initialState,
  reducers: {
    chooseLeague: (state,action)=> { 
        league: state.league = action.payload
        country: state.country = action.payload
    }
  }
});

export const { chooseLeague } = chosenLeagueSlice.actions

export default chosenLeagueSlice.reducer