import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered to You</h2>
            <p>
                Pick your favourite dish from our extensive menu of options,
                then savour a delectable lunch or dinner at home.
            </p>
            <p>
                All of our dishes are prepared by skilled chefs using top-notch
                ingredients at the perfect time.
            </p>
        </section>
    );
};

export default MealsSummary;