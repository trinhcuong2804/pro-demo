import React from 'react'
import Form from '../form/Form'
import ProList from '../productLists/ProList'

const Product = () => {
  
  return (
    <div className='product container'>
        <div className="row">
            <Form ></Form>
            <ProList></ProList>

        </div>
    </div>
  )
}

export default Product
