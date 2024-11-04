
const deleteReducerFunc = (dispatch , id) => {
    dispatch({type:'delete' , payload : id})

}

export default deleteReducerFunc