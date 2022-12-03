import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggle: true
}

const isNavOpen = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    setNav: (state) => {
      state.toggle = !state.toggle;
    }

  }
});

export const { setNav } = isNavOpen.actions

export default isNavOpen.reducer