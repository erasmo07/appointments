import React, { Fragment, useState } from 'react';
import Form from './components/Form';

function App() {
  
  const [appointments, setAppointments] = useState([]);

  const addAppointment = appointment => {
    setAppointments([ ...appointments, appointment]);
  }

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addAppointment={addAppointment}/>
          </div>
          <div className="one-half column">
            Two
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
