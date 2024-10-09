import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cardapio, Product } from "../../pages/Home";

type CartState = {
    items: Cardapio[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Cardapio>) => {
            const productInCart = state.items.find((item) => item.id === action.payload.id);
            if (productInCart) {
                alert('O produto já está no carrinho');
            } else {
                state.items.push(action.payload);
            }
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        }
    },
})

export const { add, open, close } = cartSlice.actions;
export default cartSlice.reducer;
