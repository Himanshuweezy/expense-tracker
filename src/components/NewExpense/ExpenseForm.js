import './ExpenseForm.css'
import { useState } from 'react';


export const ExpenseForm = (props) => {

    const [enteredTitle,SetEnteredTitle] = useState('');
    const [enteredAmount,SetEnteredAmount] = useState('');
    const [enteredDate,SetEnteredDate] = useState('');
  
    // const [input,SetInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: '' 
    // })

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            id:Math.random(),
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onExtractData(expenseData);

        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');
    }

    const titleHandler=(event)=>{
        SetEnteredTitle(event.target.value);

        // SetInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value}
        // })
    //     SetInput({
    //         ...input,
    //         enteredTitle: event.target.value
    // })
     console.log(enteredTitle);
}

    const amountHandler=(event)=>{
        SetEnteredAmount(event.target.value);
    //     SetInput((prevState)=>{
    //         return {...prevState,enteredAmount:event.target.value}
    // })
        
        // SetInput({
        //     ...input,
        //     enteredAmount: event.target.value})
         console.log(enteredAmount);
         }

const dateHandler=(event)=>{
    SetEnteredDate(event.target.value);
    // SetInput((prevState)=>{
    //     return {...prevState,enteredDate:event.target.value}

    // })
    
    // SetInput({
    //     ...input,
    //     enteredDate: event.target.value
    // })
    console.log(enteredDate);
}

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={props.check}>Close</button>
            </div>
        </form>
    );
    }