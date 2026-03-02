import { useEffect, useState } from "react";
import DrinkCard from "../components/drinkCard/DrinkCard";
import './Shop.css';

export default function Shop() {

    const [drinks, setDrinks] = useState([]);

    useEffect (() => { 
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
        .then(response => response.json())
        .then((data) => {
            setDrinks(data.drinks || []);
        })
        .catch((error) => {
            console.error("Error fetching drinks:", error);
        });
    }, []);

    const handleAddToCart = (drink) => {
        console.log("Added to cart:", drink);
    };

    return (
        <div className="shop">
            <h1>Shop 🍋</h1>

            {drinks.length === 0 && <p>Loading drinks...</p>}

            <div className="drink-grid">
                {drinks.map((drink) => (
                    <DrinkCard 
                        key={drink.idDrink} 
                        drink={drink} 
                        onAddDrink={handleAddToCart} 
                    />
                ))}
            </div>
        </div>
    );
}
