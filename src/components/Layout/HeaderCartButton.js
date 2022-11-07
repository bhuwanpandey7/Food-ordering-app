import HeaderCartIcon from '../Cart/HeadorCartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return <button className={classes.button}>
        <span className={classes.icon}>
            <HeaderCartIcon />
        </span>
        <span>
            Your cart
        </span>
        <span className={classes.badge}>
            5
        </span>
    </button>
}

export default HeaderCartButton;