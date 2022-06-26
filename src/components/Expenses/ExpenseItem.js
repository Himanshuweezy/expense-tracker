import './ExpenseItem.css';

import { Card } from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
export const ExpenseItem = (props) => {
    
    // const abstDate= new Date(2022, 2, 23).toISOString();
    // const absTilte='Food'
    // const absPrice=543.95
   
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs.{props.amount}</div>
                <button onClick={()=>props.delete(props.id)}>Delete</button>
            </div>
           
        </Card> 
    );
};
