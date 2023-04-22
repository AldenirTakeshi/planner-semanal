import { useState } from "react";
import Day from "./components/Day";

const week = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function App() {
  return (
    <main>
      <h1>Planner-Semanal</h1>
      {week.map((day) => (
        <Day key={day} day={day} />
      ))}
    </main>
  );
}

export default App;
