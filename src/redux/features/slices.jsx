import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

export const slices = createSlice({
    name:'counting',
    initialState:{value:0},
    reducers:{
        increment:(state)=>{state.value+=1},
        decrement:(state)=>{state.value-=1},
        reset:(state)=>{state.value=0},
        add:(state,action)=>{state.value+=Number(action.payload)}
    }
}) 

export  const {increment , decrement , reset,add} =slices.actions

export default slices.reducer