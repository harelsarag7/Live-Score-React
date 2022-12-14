import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    league: 202,
    country: 62
}

const chosenLeagueSlice = createSlice({
  name: 'chosenLeague',
  initialState,
  reducers: {
    chooseLeague: (state,action)=> { 
          state.league = action.payload
    },
    chooseCountry: (state,action)=> { 
        state.country = action.payload
    },
    
  }
});

export const { chooseLeague, chooseCountry } = chosenLeagueSlice.actions

export default chosenLeagueSlice.reducer