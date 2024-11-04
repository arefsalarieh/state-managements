import React from 'react'
import CustomModal from '../../customModal/customModal'
import ZustandForm from '../zustandForm/zustandForm'
import { useStore } from '../../../stores/zustand/zustandStore';

const UpdateZustand = ({id ,setOpen}) => {
  const clothes = useStore((state) => state.clothes);
  const cloth = clothes.find(item => item.id === id);
  const updateClothes = useStore((state) => state.updateClothes);

  const handleUpdateZustand = (values) =>{
    updateClothes(values , id)
    setOpen(false)
  }
  return (
    <div>
    <CustomModal setOpen={setOpen}>
        <ZustandForm  habdleSubmit={handleUpdateZustand} name={cloth.name} color={cloth.color} cost={cloth.cost}  text='update cloth'/>

    </CustomModal>
</div>
  )
}

export default UpdateZustand