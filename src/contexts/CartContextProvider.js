import React, { createContext, useReducer } from 'react';


const initialState= {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout : false,
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity,0);
    const total = items.reduce((total, product) => total + product.price*product.quantity,0);
    return {itemsCounter : itemsCounter , total : total }
}

const cartReducer= (state , action) =>{
    switch(action.type){
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity : 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout:false

            }

        case 'REMOVE_ITEM':
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return{
                ...state,
                selectedItems:[...newSelectedItems],
                ...sumItems(newSelectedItems)
            }

        case 'INCREASE':
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }

        case 'DECREASE':
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }

        case 'CHECKOUT':
            return{
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout : true,
            }
        
        case 'CLEAR':
            return{
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout : false,
            }
            
        default:
            return state;
        
    }       
}

export const CartContext = createContext()  

const CartContextProvider = (props) => {
    
    const [state , dispatch] = useReducer(cartReducer , initialState)
    
    return (
        <CartContext.Provider value={{state:state , dispatch:dispatch}}>
            {props.children}
        </CartContext.Provider>
    );
};


export default CartContextProvider;