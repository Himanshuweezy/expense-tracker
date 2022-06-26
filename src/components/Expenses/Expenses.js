import { useState } from 'react';
import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';
import { ExpensesFilter } from './ExpensesFilter';
import { ExpensesChart } from './ExpensesChart';
export const Expenses = (props) => {
    const [selectedDate, setSelectedDate] = useState('2020');
    const expenses = props.expenses;
    const filteredItems = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedDate;
    });

    const dateSelectedHandler = (date) => {
        setSelectedDate(date);
       
    };

    return (
        <Card className="expenses">
            <ExpensesChart expenses={filteredItems} />
            <ExpensesFilter date={selectedDate} onSelectedDate={dateSelectedHandler} />
            {filteredItems.length === 0 && (
                <p className="message"> No Expenses Found in date:{selectedDate}</p>
            )}
            {filteredItems.length > 0 &&
                filteredItems.map((expense) => {
                    return (
                        <ExpenseItem
                        delete={props.delete}
                        id={expense.id}
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    );
                })}

            {/* <ExpenseItem
                    title={expenses[0].title}
                    amount={[expenses[0].amount]}
                    date={expenses[0].date}
                />
                <ExpenseItem
                    title={expenses[1].title}
                    amount={[expenses[1].amount]}
                    date={expenses[1].date}
                />
                <ExpenseItem
                    title={expenses[2].title}
                    amount={[expenses[2].amount]}
                    date={expenses[2].date}
                />
                <ExpenseItem
                    title={expenses[3].title}
                    amount={[expenses[3].amount]}
                    date={expenses[3].date}
                /> */}
        </Card>
    );
};
