import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        return {
            ...state,
            items: state.items.concat(action.item),
            totalAmount: state.totalAmount + action.item.price * action.item.amount
        }
    } else if (action.type === 'REMOVE') {
        return {
            ...state,
            ...state.items
        }
    }

    return defaultCartState;
}

const CartContextProvider = props => {

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    }
    const removeItemFromCart = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const cartInitialState = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart
    }


    return <CartContext.Provider value={cartInitialState}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;