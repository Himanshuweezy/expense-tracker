import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';
import { Card } from '../UI/Card';
import { useState } from 'react';

export const NewExpense = (props) => {
    const [buttonState, setButtonState] = useState(false);
    const extractDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
        };
        console.log(expenseData);
        props.onExtractData(expenseData);
    };
    const buttonClickHandler = () => {
        setButtonState((prevState) => {
            return !prevState;
        });
    };
    return (
        <Card className="new-expense">
            {buttonState === true ? (
                <ExpenseForm onExtractData={extractDataHandler}  check={buttonClickHandler} />
                
             
            ) : (
                <button onClick={buttonClickHandler}>Add New Expense</button>
            )}
            {/* <button onClick={buttonClickHandler}>Add New Expense</button>
            <ExpenseForm onExtractData={extractDataHandler}/> */}
        </Card>
    );
};
