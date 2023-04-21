import React from "react";

const Appointment = (props) => {
  return (
    <li>
      <div>
        <input type="checkbox" id={`appointments-${props.appointment.id}`} />
        <label htmlFor="checkbox">{props.appointment.name}</label>
      </div>
      <button>Remover</button>
    </li>
  );
};
export default Appointment;
