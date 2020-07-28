import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment})=> (
    <div className='appointment'>
        <p>Mascota: <span>{appointment.pet}</span></p>
        <p>Dueño: <span>{appointment.owner}</span></p>
        <p>Fecha: <span>{appointment.date}</span></p>
        <p>Hora: <span>{appointment.time}</span></p>
        <p>Sintomas: <span>{appointment.description}</span></p>
        <button
            onClick={() => deleteAppointment(appointment.id) }
        >Eliminar</button>
    </div>
);

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;