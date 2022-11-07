import classes from './Header.module.css';
import { Fragment } from 'react';
import mealsPicture from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Your Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes.headerImage}>
            <img alt="Your Meals" src={mealsPicture}></img>
        </div>
    </Fragment>
}

export default Header;