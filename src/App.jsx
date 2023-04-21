import { useState } from "react";
import Appointment from "./components/Appointment";

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointments = () => {
    const name = prompt("Informe o nome do compromisso:");
    const newAppointments = {
      id: Math.floor(1000000 * (Math.random() + 1)),
      name,
      done: false,
    };
    setAppointments([...appointments, newAppointments]);
  };
  return (
    <main>
      <h1>Planner-Semanal</h1>
      <div className="day">
        <h2>Segunda-Feira</h2>
        <ul>
          {appointments.map((appointment) => (
            <Appointment key={appointment.id} appointment={appointment} />
          ))}{" "}
        </ul>
        <button onClick={addAppointments}>Adicionar</button>
      </div>
    </main>
  );
}

export default App;
