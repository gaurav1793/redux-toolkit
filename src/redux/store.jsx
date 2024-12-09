import React from 'react'
import {configureStore}from '@reduxjs/toolkit'
import sliceReducer from './features/slices'


export const store = configureStore({
    reducer: {
        counting:sliceReducer
    },
})