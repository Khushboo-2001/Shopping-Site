import {createSlice, configureStore} from '@reduxjs/toolkit'


export const sliderSice=createSlice({
    name:'slider',
    initialState:{
        value:0,
        length:4,
    },
    reducers:{
        nextSlide(state, action){
            console.log("action", action);
            console.log("state", state);
            state.value=action.payload > state.length ? 0 :action.payload;
        },
        previousSlide(state, action){
            state.value=action.payload < 0 ? state.length : action.payload;
        },
        autoSlide(){},
    },
});

export const{ previousSlide, nextSlide, autoSlide} = sliderSice.actions;
export default sliderSice.reducer;