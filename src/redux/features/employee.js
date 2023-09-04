import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const addEmployee = createAction("employee/add");

export default createReducer(initialState, (builder) =>
  builder.addCase(addEmployee, (draft, action) => {
    draft.list = [...draft.list, action.payload];
    return;
  })
);
