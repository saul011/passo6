import React, { useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetCalculator from './components/BudgetCalculator';

function App() {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div className="App">
            <h1>Personal Budget Manager</h1>
            <Balance balance={1000} /> {/* Example initial balance */}
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} />
            <BudgetCalculator expenses={expenses} />
        </div>
    );
}

export default App;
