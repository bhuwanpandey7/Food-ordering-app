import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {

    const cartContext = useContext(CartContext);

    const cartItems = <ul className={classes['cart-items']}>
        {
            [{
                id: 'm1',
                name: 'Sushi',
                description: 'Finest fish and veggies',
                price: 22.99,
            }].map(({ id, name }) => <li key={id}>{name}</li>)
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