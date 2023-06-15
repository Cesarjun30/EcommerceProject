import React from 'react'
import {BsCloudUpload} from 'react-icons/bs'
const NewProduct = () => {
  return (
    <div className='newProduct'>
    <div className='newProductForm'>
  <form>
  <label htmlFor='name'>Name:</label> <br/>
  <input type={"text"} className='newProdInput' name='name' /><br/>
  
  <select className='newProdInput'>
    <option>Sneakers</option>
    <option>Dress</option>
    <option>For Men</option>
    <option>For Kids</option>
  </select>

  <div className='imageUploader'>
  <BsCloudUpload className='uploadIcon'/>

  </div>

  </form>
  </div> 

    </div>
  )
}

export default NewProduct