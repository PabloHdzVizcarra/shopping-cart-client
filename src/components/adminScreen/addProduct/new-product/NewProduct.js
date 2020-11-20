import React from 'react'
import PropTypes from 'prop-types'
import ElementH2 from '../../../atoms/element-h2/ElementH2'
import Input from '../../../loginScreen/input/Input'
import Button from '../../../atoms/button/Button'
import Select from '../../../atoms/selected/Select'
import SubmitButton from '../../../atoms/button-submit/SubmitButton'
import TextArea from '../../../atoms/textarea/TextArea'
import Label from '../../../atoms/<label>/Label'

const NewProduct = ({ values, handleInputChange, handleClickButton, handleSubmitForm }) => {
  const { name, price, image, category, description } = values

  return (
    <form
      className='bg-green-100 p-4 rounded w-8/12'
      data-testid='new_product'
      onSubmit={(event) => handleSubmitForm(event)}
    >
      <ElementH2
        text='Agrega un Producto'
        styles='text-green-600 text-center text-4xl'
      />

      <Input
        labelText='Nombre'
        inputName='name'
        inputValue={name}
        inputType='text'
        handleInputChange={handleInputChange}
        styles='grid p-2'
      />
      <Input
        labelText='Precio'
        inputName='price'
        inputValue={price}
        inputType='text'
        handleInputChange={handleInputChange}
        styles='grid p-2'
      />
      <Input
        labelText='URL Imagen'
        inputName='image'
        inputValue={image}
        inputType='text'
        handleInputChange={handleInputChange}
        styles='grid p-2'
      />

      <div
        className='grid p-2'
      >
        <Label
          text="Description"
          elementStyles="text-xl text-green-800"
        />
        <TextArea
          styles="py-2 bg-gray-300 rounded-lg ml-4 leading-tight text-teal-700 focus:outline-none px-2 resize-none"
          name="description"
          cols={100}
          rows={5}
          value={description}
          handleInputChange={handleInputChange}
        />
      </div>

      <div
        className="grid p-2"
      >
        <Label
          text='Categoria'
          elementStyles="text-xl text-green-800"
        />
        <Select
          listOptions={
            ['---', 'general', 'limpieza', 'electronica', 'ferreteria', 'perfumeria', 'farmacia', 'jugueteria', 'deportes', 'ropa', 'bebes', 'abarrotes']
          }
          nameElement='category'
          styles='p-2 w-full mt-2 rounded'
          handleInputChange={handleInputChange}
          valueElement={category}
        />
      </div>

      <div
        className='flex justify-around'
      >
        <SubmitButton
          styles="font-bold text-white hover:bg-green-700 bg-green-500 px-4 py-2 rounded mt-4 w-3/12 transition duration-300"
          name="Agregar"
        />

        <Button
          text="Cancelar"
          styles="font-bold text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded mt-4 w-3/12 duration-300 transition ease-in-out"
          nameButton='cancel'
          handleClick={handleClickButton}
        />
      </div>
    </form>
  )
}

NewProduct.propTypes = {
  values: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleClickButton: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
}

export default NewProduct
