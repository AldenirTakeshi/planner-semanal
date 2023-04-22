import React from "react";

const Appointment = (props) => {
  return (
    <li className={props.appointment.done ? "done" : ""}>
      <div>
        <input
          type="checkbox"
          id={`appointments-${props.appointment.id}`}
          onChange={() => props.toggleDone(props.appointment.id)}
          checked={props.appointment.done}
        />
        <label htmlFor="checkbox">{props.appointment.name}</label>
      </div>
      <button onClick={() => props.RemoveAppointements(props.appointment.id)}>
        Remover
      </button>
    </li>
  );
};
export default Appointment;
