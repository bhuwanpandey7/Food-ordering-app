import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {

    const cartContext = useContext(CartContext);

    const addItemHandler = (item) => {
        cartContext.addItem({ ...item, amount: 1 })
    }

    const onRemoveItemHandler = id => {
        cartContext.removeItem(id);
    }

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartContext.items.map(item =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={addItemHandler.bind(null, item)}
                    onRemove={onRemoveItemHandler.bind(null, item.id)} />
            )
        }
    </ul>

    return (
        <Modal onClick={props.onClick}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount:</span>
                <span>{cartContext.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClick} className={classes['button-alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;