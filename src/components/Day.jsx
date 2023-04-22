import React from "react";
import { useState } from "react";
import Appointment from "./Appointment";

const Day = (props) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointments = () => {
    const name = prompt("Informe o nome do compromisso:");
    const newAppointments = {
      id: Math.floor(1000000 * (Math.random() + 1)),
      name,
      done: false,
    };
    setAppointments((currentState) => [...currentState, newAppointments]);
  };

  const RemoveAppointements = (appointmentId) => {
    setAppointments((currentState) =>
      currentState.filter((appointment) => appointment.id !== appointmentId)
    );
  };

  const toggleDone = (appointmentId) => {
    setAppointments((currentState) =>
      currentState.map((appointment) => {
        if (appointment.id !== appointmentId) {
          return appointment;
        } else {
          return { ...appointment, done: !appointment.done };
        }
      })
    );
  };
  return (
    <div className="day">
      <h2>{props.day}</h2>
      <ul>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            toggleDone={toggleDone}
            RemoveAppointements={RemoveAppointements}
          />
        ))}{" "}
      </ul>
      <button onClick={addAppointments}>Adicionar</button>
    </div>
  );
};

export default Day;
