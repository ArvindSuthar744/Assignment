import { configureStore } from '@reduxjs/toolkit';
import { reducer1 } from './reducer';


export const  data = configureStore({
    reducer:{
        xyz:reducer1
    }
})