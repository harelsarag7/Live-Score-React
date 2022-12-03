import { configureStore } from "@reduxjs/toolkit";
import chosenLeagueSlice from "./chosenLeagueSlice";
import chosenWebMode from "./lightDarkSlice";
import isNavOpen from "./mobileNav"

export const store = configureStore({
    reducer: {
       chosenLeague: chosenLeagueSlice,
       chosenMode: chosenWebMode,
       mobileNav: isNavOpen,
    }

})