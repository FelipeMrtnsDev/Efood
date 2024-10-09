import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cardapio } from "../../pages/Home";

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
        remover: (state, action: PayloadAction<Cardapio>) => {
            const produtosFiltrados = state.items.filter((item) => item.id !== action.payload.id)

            state.items = produtosFiltrados
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        }
    },
})

export const { add, open, close, remover } = cartSlice.actions;
export default cartSlice.reducer;
