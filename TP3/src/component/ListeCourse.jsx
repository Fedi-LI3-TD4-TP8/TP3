import React, { useState } from "react";

function ListeCourses() {
  const [articles, setArticles] = useState([]); // tableau des articles
  const [nouvelArticle, setNouvelArticle] = useState(""); // texte à ajouter

  const ajouterArticle = () => {
    if (nouvelArticle.trim() === "") return; // éviter les entrées vides
    setArticles([...articles, nouvelArticle]); // ajouter au tableau
    setNouvelArticle(""); // réinitialiser le champ
  };

  return (
    <div>
      <h2>Liste de courses</h2>

      <input
        type="text"
        placeholder="Ajouter un article"
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
      />

      <button onClick={ajouterArticle}>Ajouter</button>

      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;
