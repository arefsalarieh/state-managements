const deleteContextFunc = (id , TechList , setTechList) =>{
    const newArr = TechList.filter(item=>item.id !== id)
    setTechList(newArr);
  }

  export default deleteContextFunc