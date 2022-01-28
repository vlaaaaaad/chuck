import "../styles/CategoriesList.css";
import Category from "./Category";

function CategoriesList({categories, setActiveJoke}) {

    return (
        <div>
            <h2>Categories</h2>
            <div className="CategoriesSection">
                {categories.map((category, index) => (
                    <Category key={index} category={category} setActiveJoke={setActiveJoke} />
                )  
                )}
                <Category category="random" setActiveJoke={setActiveJoke}/>
            </div>
        </div>
    )
}

export default CategoriesList;
