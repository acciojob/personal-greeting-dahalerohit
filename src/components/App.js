import React, { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    const [name, setName] = useState("");

  return (
    <div>
      <h2>Personalized Greeting</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name.trim() !== "" && <h3>Hello, {name}!</h3>}
    </div>
  );
}
  


export default App
