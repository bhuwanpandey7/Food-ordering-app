import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {

    const inputRef = useRef();

    const [isInvalid, setIsInvalid] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        const value = inputRef.current.value;
        if (value < 1 || value > 5) {
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
                    max: 5,
                    defaultValue: 1,
                    step: 1
                }}
        />
        <button>+ Add</button>
        {
            isInvalid &&
            <small style={{ color: 'red' }}>{'Enter valid value between 1-5'}</small>
        }
    </form>
}

export default MealItemForm;