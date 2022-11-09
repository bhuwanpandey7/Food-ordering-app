import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import HeaderCartIcon from '../Cart/HeadorCartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const cartContext = useContext(CartContext);
    const totalItems = cartContext.items.reduce((acc, currItem) => acc + currItem.amount, 0);

    return <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}>
            <HeaderCartIcon />
        </span>
        <span>
            Your cart
        </span>
        <span className={classes.badge}>
            {totalItems}
        </span>
    </button>
}

export default HeaderCartButton;