import React from 'react'

const addContextReducerFunc = ( values , dispatch) => {
    const obj = {id:Math.random() , ...values}
    dispatch({type:'create' , payload : obj})
}

export default addContextReducerFunc