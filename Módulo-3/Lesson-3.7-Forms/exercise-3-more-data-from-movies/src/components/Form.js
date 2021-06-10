import React from 'react';
import "../stylesheets/App.css"

const Form = (props) => {

  const handleInput = (ev)=>{
    props.handleInput(ev.currentTarget.value)
  }

  //Select
  const handleFormChange = (ev)=>{
    props.handleFormChange(ev.currentTarget.value)
  }

  //Checkbox
  const handleCheckboxChange = (ev)=>{
    props.handleCheckboxChange(ev.currentTarget.value)
  }


  return (
    <>
    <form>
    <h2>FORMULARIO</h2>
    <label>Nombre</label>
    <input
      name="name"
      id="name"
      value={props.name}
      onChange={handleInput}
    />

  <label>Idioma</label>
     <select
            name='language'
            value={props.language}
            onChange={handleFormChange}
          >
            <option value=''>...</option>
            <option value='Español'>Español</option>
            <option value='Ingles'>Ingles</option>
            <option value='Portugués'>Portugués</option>
          </select>

             <label htmlFor='gender1'>
                <input
                  id='gender1'
                  type='checkbox'
                  value='Comedia'
                  name='genderClasification'
                  onChange={handleCheckboxChange}
                />
                <p>Comedia</p>
              </label>
              <label htmlFor='gender2'>
                <input
                  id='gender2'
                  type='checkbox'
                  value='Drama'
                  name='genderClasification'
                  onChange={handleCheckboxChange}
                />
                <p>Drama</p>
              </label>
              <label htmlFor='gender3'>
                <input
                  id='gender3'
                  type='checkbox'
                  value='Fantasia'
                  name='genderClasification'
                  onChange={handleCheckboxChange}
                />
                <p>Fantasia</p>
              </label>
        </form>
    </>
  );
};

export default Form;