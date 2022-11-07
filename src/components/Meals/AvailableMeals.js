import classes from './AvailableMeals.module.css';
import { MEALS } from '../../assets/Meals.js';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {
                        MEALS.map(item => <MealItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price} />)
                    }
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;