import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [expense, setExpense] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense(expense);
        setExpense('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter expense..."
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
