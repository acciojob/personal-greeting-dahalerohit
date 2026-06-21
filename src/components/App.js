import { useState } from "react";


const App = () => {
  
    const[name, setName] = useState("");

  return (
    <div>
      <h2>Enter your name</h2>

      <input
        type="text"
        placeholder=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name.trim() !== "" && <h3>Hello {name}!</h3>}
    </div>
  );
}
  


export default App
