import { configureStore } from '@reduxjs/toolkit';
import monthReducer from './slices/calendarSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        month: monthReducer,
    }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;