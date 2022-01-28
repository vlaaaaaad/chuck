import { useState } from "react";
import axios from "axios";
import "../styles/Category.css";

function Category({category, setActiveJoke}) {

    const fetchJoke = async () => {
        var url = "https://api.chucknorris.io/jokes/random";
        if(category != "random") {
            url += "?category=" + category;
        }
        const response = await axios.get(url);
        setActiveJoke(response.data.value);
    }

    return (
        <button className="Category" onClick={fetchJoke}>
            {category}
        </button>
    )
}

export default Category;
