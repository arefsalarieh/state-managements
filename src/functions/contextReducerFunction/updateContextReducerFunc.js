

const updateContextReducerFunc = (id , dispatch , setOpen , values) => {
    values.id = id
    dispatch({type:'update' , payload : values})
    setOpen(false)

}

export default updateContextReducerFunc