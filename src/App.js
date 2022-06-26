import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

import { useState } from "react";
function App() {
    
    const [expenses,setExpenses] = useState([
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94120,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 79949, date: new Date(2021, 2, 28) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294760,
            date: new Date(2021, 2, 10),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450000,
            date: new Date(2021, 5, 12),
        },
    ]);
    
    const extractDataHandlder=(enteredData)=>{
        console.log(enteredData);
       setExpenses((prev)=>[enteredData,...prev]);
       console.log(expenses);
        
    }
    return (
        <div>
            <NewExpense onExtractData={extractDataHandlder}/>
           
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
