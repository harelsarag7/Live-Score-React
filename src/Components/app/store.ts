import { configureStore } from "@reduxjs/toolkit";
import chosenLeagueSlice from "./chosenLeagueSlice";
import chosenWebMode from "./lightDarkSlice";

export const store = configureStore({
    reducer: {
       chosenLeague: chosenLeagueSlice,
       chosenMode: chosenWebMode 
    }

})