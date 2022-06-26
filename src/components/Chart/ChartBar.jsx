import './ChartBar.css'
export const ChartBar = (props) => {
    let chartBarHeight='0%';
    if (props.maxValue>0){
        chartBarHeight=Math.round(props.value/props.maxValue*100)+'%';
        console.log(chartBarHeight);
    }
return(
    <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height:chartBarHeight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
)
}
// Compare this snippet from src\components\Chart\ChartBar.jsx:
// import { useState } from 'react';
// import { Card } from '../UI/Card';
// import { ExpenseItem } from './ExpenseItem';
// import './Expenses.css';
// import { ExpensesFilter } from './ExpensesFilter';
// import { ExpensesChart } from './ExpensesChart';
// export const Expenses = (props) => {
//     const [selectedDate, setSelectedDate] = useState('2020');
//     const expenses = props.expenses;
//     const filteredItems = expenses.filter((expense) => {
//         return expense.date.getFullYear().toString() === selectedDate;
//     });
//