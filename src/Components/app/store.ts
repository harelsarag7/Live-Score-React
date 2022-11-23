import { configureStore } from "@reduxjs/toolkit";
import chosenLeagueSlice from "./chosenLeagueSlice";

export const store = configureStore({
    reducer: {
       chosenLeague: chosenLeagueSlice
    }

})