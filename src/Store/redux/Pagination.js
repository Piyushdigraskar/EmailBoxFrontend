// paginationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialPaginationState = {
  currentPage: 1,
  hasNextPage: false,
  nextPage: null,
  hasPreviousPage: false,
  previousPage: null,
  lastPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialPaginationState,
  reducers: {
    setPageData(state, action) {
      const { currentPage, hasNextPage, nextPage, hasPreviousPage, previousPage, lastPage } = action.payload;
      state.currentPage = currentPage;
      state.hasNextPage = hasNextPage;
      state.nextPage = nextPage;
      state.hasPreviousPage = hasPreviousPage;
      state.previousPage = previousPage;
      state.lastPage = lastPage;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setPageData, setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
