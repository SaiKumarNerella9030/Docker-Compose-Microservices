import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("/")
      .then((res) => res.text())
      .then((text) => setMsg(text))
      .catch((err) => setMsg("Error: " + err.message));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "20px" }}>
      <h1>React Frontend</h1>
      <p>Message from backend:</p>
      <pre>{msg}</pre>
    </div>
  );
}

export default App;

