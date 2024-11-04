

const deleteContextReducerFunc = (dispatch , id) => {
    dispatch({ type: "delete", payload: id });
}

export default deleteContextReducerFunc