import { createRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const inputRef = createRef();

const MealItemForm = props => {

    const [isInvalid, setIsInvalid] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        const value = inputRef.current.value;
        if (!value || value < 1 || value > 5) {
            setIsInvalid(true);
            return;
        }
        const amount = +value;

        props.addToCart(amount)
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            label="Amount"
            ref={inputRef}
            input={
                {
                    id: `amount_${props.id}`,
                    type: 'number',
                    inputMode: 'numeric',
                    min: 1,
                    max: 10,
                    defaultValue: 1,
                    step: 1
                }}
        />
        <button>+ Add</button>
        {!isInvalid && 'Enter valid value between 1-5'}
    </form>
}

export default MealItemForm;