import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.idDrink === action.payload.idDrink
            );

            if (existingItem) {
                existingItem.quantity += 1; 
            } else { 
                state.items.push({ ...action.payload, quantity: 1 });
            }              
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.idDrink !== action.payload
            );
        },

        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.idDrink === action.payload
            );

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        (item) => item.idDrink !== action.payload
                    );
                }
            }
        },
    }
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
