import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CategoriesList from "./components/CategoriesList";
import Joke from "./components/Joke";

function App() {
  const [categories, setCategories] = useState([]);
  const [activeJoke, setActiveJoke] = useState("Chuck Norris once clicked on a category button and saw a joke about himself.");

  useEffect(() => {
    fetchCategories();
  }, []) 

  const fetchCategories = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/categories")
    setCategories(response.data);
  }

  return (
    <div className="App">
      <Header />
      <CategoriesList categories={categories} setActiveJoke={setActiveJoke}/>
      <Joke text={activeJoke}/>
    </div>
  );
}

export default App;
