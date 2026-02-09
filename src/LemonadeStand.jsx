import { useState } from "react";

export default function LemonadeStand() {

    const [profit, setProfit] = useState(0);

    return (
        <div>
            <h1>🍋 Lemonade Stand</h1>

            <p>Profit: ${profit}</p>

            <button onClick={() => setProfit(p => p + 5)}>
                Sell a cup of lemonade (+$5)
            </button>

            <button onClick={() => setProfit(p => p - 2)}>
                Buy more lemons (-$2)
            </button>
        </div>
    );
}