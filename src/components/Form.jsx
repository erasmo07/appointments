import React, { Fragment } from 'react';

const Form = () => {
    return ( 
        <Fragment>
            <h1>Crear cita</h1>

            <form action="">
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name='pet'
                    className='u-full-width'
                    placeholder='Nombre de la mascota'
                />
                <label>Nombre de dueño</label>
                <input
                    type="text"
                    name='owner'
                    className='u-full-width'
                    placeholder='Nombre del dueño'
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name='date'
                    className='u-full-width'
                />
                <label>Hora</label>
                <input
                    type="time"
                    name='time'
                    className='u-full-width'
                />
                <label>Sintomas</label>
                <textarea
                    name="description"
                    cols="30" rows="10"
                    className='u-full-width'>
                </textarea>
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Form;