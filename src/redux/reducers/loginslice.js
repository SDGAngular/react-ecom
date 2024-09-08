import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  users:[
    {email},
    {}
  ]
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    
  },
});

export const { increment, decrement } = loginSlice.actions;
export default loginSlice.reducer;
