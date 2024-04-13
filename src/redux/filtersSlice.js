import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: {
      reducer: (state, action) => {
        state.name = action.payload;
      },
    },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const selectNameFilter = (state) => state.filters.name;
