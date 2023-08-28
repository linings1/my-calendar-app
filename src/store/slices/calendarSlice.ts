import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';

const initialState = dayjs().month();

const monthSlice = createSlice({
    name: 'month',
    initialState,
    reducers: {
        handlePreviousMonth: (state, action) => {
            state = action.payload - 1;
            console.log(state);
            console.log(action);
            return state;
        },
        handleNextMonth: (state, action) => {
            state = action.payload + 1;
            console.log(state);
            console.log(action);
            return state;
        },
        resetMonth: (state, action) => {
            state = initialState;
            return state;
        }
    }
});

const { actions, reducer } = monthSlice;
export const { handlePreviousMonth, handleNextMonth, resetMonth } = actions;

export default reducer;