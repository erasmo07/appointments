import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';

import PropTypes from 'prop-types';


const Form = ({addAppointment}) => {
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        description: ''
    }); 

    const [error, setError] = useState(false);
    
    const {pet, owner, date, time, description} = appointment;

    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name] : e.target.value
        });
    }

    const handelSubmit = e => {
        e.preventDefault();
        if (pet.trim() === '' ||
            owner.trim() === '' ||
            date.trim() === '' ||
            time.trim() === '' ||
            description.trim() === ''
        ) {
            setError(true);
            return;
        } else {
            setError(false);
        }

        appointment.id = uuid()  
        addAppointment(appointment);

        setAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            description: ''
        })
    }

    return ( 
        <Fragment>
            <h1>Crear cita</h1>

            {error
            ? <p className="alert-error">Todo los campos son obligatorios</p>
            : null}

            <form onSubmit={handelSubmit}>
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name='pet'
                    className='u-full-width'
                    placeholder='Nombre de la mascota'
                    onChange={handleChange}
                    value={pet}
                />
                <label>Nombre de dueño</label>
                <input
                    type="text"
                    name='owner'
                    className='u-full-width'
                    placeholder='Nombre del dueño'
                    onChange={handleChange}
                    value={owner}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name='date'
                    className='u-full-width'
                    onChange={handleChange}
                    value={date}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name='time'
                    className='u-full-width'
                    onChange={handleChange}
                    value={time}
                />
                <label>Sintomas</label>
                <textarea
                    name="description"
                    cols="30" rows="10"
                    onChange={handleChange}
                    value={description}
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

Form.propTypes = {
    addAppointment: PropTypes.func.isRequired
}
 
export default Form;