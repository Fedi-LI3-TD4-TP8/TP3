// src/components/Compteur.jsx
import React, { useState } from "react";

function Compteur() {
  // Déclaration d'un état "count" initialisé à 0
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter
  const increment = () => setCount(count + 1);

  // Fonction pour décrémenter
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
}

export default Compteur;
