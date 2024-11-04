

const updateReducerFunc = (id ,values , setOpen , dispatch) => {
    values.id = id
    dispatch({type:'update' , payload : values})
    setOpen(false)
}

export default updateReducerFunc