import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cars:[
        "Model S","Model 3","Models X","Model Y"
    ]
};
const carSlice =createSlice({
    name:"car",
    initialState,
    reducers:{}
})
export const SelectCars = state =>state.car.cars;
export default carSlice.reducer