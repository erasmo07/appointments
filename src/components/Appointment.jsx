import React from 'react';

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

export default Appointment;