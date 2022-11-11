import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    let updatedItems;
    let removeUpdatedItems;

    if (action.type === 'ADD') {
        addItemLogic();
        return {
            ...state,
            items: updatedItems,
            totalAmount: state.totalAmount + action.item.price * action.item.amount
        }
    } else if (action.type === 'REMOVE') {
        removeItemLogic();
        return {
            ...state,
            items: removeUpdatedItems
        }
    }

    return defaultCartState;

    function removeItemLogic() {
        const items = [...state.items];

        const existingItem = items.find(item => item.id === action.id);
        const existingItemIndex = items.findIndex(item => item.id === action.id);

        if (existingItem.amount >= 1) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            removeUpdatedItems = [...state.items];
            removeUpdatedItems[existingItemIndex] = updatedItem;
        }
    }

    function addItemLogic() {
        const itemIndex = state.items.findIndex(item => item.id === action.item.id);
        let existingItem = state.items[itemIndex];

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
    }
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