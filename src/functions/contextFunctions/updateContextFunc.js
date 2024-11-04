const updateContextFunc = (values ,TechList , setTechList , id , setOpen) => {
    const newArr = TechList.map((item) => {
      if (item.id === id) {
        return { id: id, ...values };
      } else {
        return item;
      }
    });

    setTechList(newArr);
    setOpen(false);
  };

  export default updateContextFunc