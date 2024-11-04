const addContextFunc = (values , TechList, setTechList) => {
    const newObj = { id: Math.random(), ...values };
    setTechList([...TechList, newObj]);
  };

  export default addContextFunc