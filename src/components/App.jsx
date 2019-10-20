import React from "react";
import Nav from "./Nav";
import '../assets/styles/index.scss'
import { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container-fluid">
      <Nav isOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} />
    </div>
  );
};

export default App;
