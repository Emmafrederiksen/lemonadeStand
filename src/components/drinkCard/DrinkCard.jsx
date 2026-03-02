import './DrinkCard.css';

export default function DrinkCard({ drink, onAddDrink }) {
    return (
        <div className='drink-card'>
            <img 
                src={drink.strDrinkThumb}
                alt={drink.strDrink} 
                className='drink-image'>
            </img>

            <div className='drink-content'>
                <h3>{drink.strDrink}</h3>
                <button onClick={() => onAddDrink(drink)}>Add to Cart</button>
            </div>

        </div>
    );
}