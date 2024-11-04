

const addReducerFunc = (values ,dispatch ) => {
    const obj = {id:Math.random() , ...values}
    dispatch({type:'create' , payload : obj})
}

export default addReducerFunc