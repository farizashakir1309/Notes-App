import { useState } from "react";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Notes>My Notes App</Notes>
    </>
  );
}

export default App;
