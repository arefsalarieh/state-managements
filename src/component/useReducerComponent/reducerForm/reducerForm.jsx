import { Field, Form, Formik } from 'formik'
import React from 'react'

const ReducerForm = ({func}) => {
  return (
    <div className='bg-gray-500 p-4 m-2 mt-8'>
      <h2 className='text-white mb-4'>Add new card</h2>
      <Formik initialValues={{name:'' , color:'' , cost:''}} onSubmit={func}>
        <Form className='flex gap-5'>
          <Field type='text' name='name'  className="input input-bordered   w-full" placeholder='name'/>
          <Field type='text' name='color'  className="input input-bordered   w-full" placeholder='color'/>
          <Field type='text' name='cost'  className="input input-bordered   w-full" placeholder='cost'/>


          <button type='submit' className='badge badge-primary p-4 cursor-pointer'>click</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ReducerForm