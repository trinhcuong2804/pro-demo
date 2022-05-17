import React, { useContext, useState } from 'react'
import { ContextPro } from '../contexts/ContextPro'

const Form = (props) => {
  const {state} = useContext(ContextPro)
  const {editMode} = useContext(ContextPro)

  const {handleSubmit} = useContext(ContextPro)
  const {handleChange} = useContext(ContextPro)

  return (
    <div className='form col-xl-4 col-12 my-4'>
        <div className='form-name fs-4 border-bottom pb-1 mb-5'>Add User</div>
        <form onSubmit={handleSubmit} className="form-body p-2 rounded">
            <label className=' form-label'>Name :</label>
            <input 
              className=' form-control' 
              type="name" 
              placeholder='Enter name...' 
              name='name'
              value={state.name}
              onChange={handleChange}/>
              
            <label className=' form-label'>Email :</label>
            <input 
              className=' form-control' 
              type="email" 
              placeholder='email' 
              name='email'
              value={state.email}
              onChange={handleChange}
              />

            <label className=' form-label'>Contact :</label>
            <input 
              className=' form-control' 
              type="contact" 
              placeholder='contact' 
              name='contact'
              value={state.contact}
              onChange={handleChange}
              />

            <label className=' form-label'>Address :</label>
            <input 
              className=' form-control' 
              type="address" 
              placeholder='address' 
              name='address'
              value={state.address}
              onChange={handleChange}/>

            <div className=' d-block mt-3'>
              <button type='submit' className=' btn-primary w-100 py-1 rounded border-0'>
                {!editMode ? "Submit" : "Update"}
              </button>
            </div>
        </form>
    </div>
  )
}

export default Form
