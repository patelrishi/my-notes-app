import React from 'react'

export const createClearMsg = (dispatch) => {
    return () => { //return one fun 
        setTimeout(() => {
            dispatch({ type: 'CLEAR' });
        }, 1000)
    }
}
