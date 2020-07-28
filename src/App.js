import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  
  const [appointments, setAppointments] = useState([]);

  const addAppointment = appointment => {
    setAppointments([ ...appointments, appointment]);
  };

  const deleteAppointment = id => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const title = appointments.length === 0 ? "No hay citas" : "Administra tu citas";

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addAppointment={addAppointment}/>
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                appointment={appointment}
                deleteAppointment={deleteAppointment} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
