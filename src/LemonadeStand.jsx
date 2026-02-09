import { useState } from "react";

export default function LemonadeStand() {

    const [profit, setProfit] = useState(0);

    return (
        <div className="page">
            <div className="card">

                <h1>🍋 Lemonade Stand</h1>
                <p className="subtitle">Welcome to your lemonade stand! Manage your profits by selling lemonade and buying lemons 🍋</p>
                <hr />
        
                <p className={`profit 
                    ${profit < 0 ? "negative" : ""}
                    ${profit >= 1 ? "positive" : ""}
                `}>
                    Profit: <span>${profit}</span>
                </p>

                <div className="buttons">
                    <button className="button" onClick={() => setProfit(p => p + 5)}>
                        Sell a cup of lemonade (+$5)
                    </button>

                    <button className="button" onClick={() => setProfit(p => p - 2)}>
                        Buy more lemons (-$2)
                    </button>
                </div>   

                <p className="status">
                    {profit === 0 && "Ready to sell your first lemonade? 🍋"}
                    {profit > 0 && "Great job! You're making a profit! 💰"}
                    {profit < 0 && "Uh oh! You're in the red. Sell more lemonade to recover! 📉"}
                </p>

            </div>
        </div>
    );
}