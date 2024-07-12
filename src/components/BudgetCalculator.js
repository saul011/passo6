import React from 'react';

const BudgetCalculator = ({ expenses }) => {
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0);
    const remainingBalance = 1000 - totalExpenses; // Example initial balance

    return (
        <div>
            <h2>Budget Calculator</h2>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Remaining Balance: ${remainingBalance}</p>
        </div>
    );
};

export default BudgetCalculator;
