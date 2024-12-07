import "./TopRated.css"

const recipes = [
    {
        title: "Supă la plic",
        rating: "★★★★★",
        author: "Mari",
        image: "recipe.png",
    },
    {
        title: "Pâine cu pateu",
        rating: "★★★★★",
        author: "Ionut",
        image: "recipe.png",
    },
    {
        title: "Cartofi prăjiți",
        rating: "★★★★★",
        author: "Edi",
        image: "recipe.png",
    },
];

function TopRated() {
    return (
        <section className="top-rated">
            <h1>Top rated recipes</h1>
            <div className="recipes">
                {recipes.map((recipe, index) => (
                    <div className="recipe" key={index}>
                        <div className="photo">
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                        <div className="details">
                            <h3>{recipe.title}</h3>
                            <p>{recipe.rating}</p>
                            <p>Author: {recipe.author}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopRated;