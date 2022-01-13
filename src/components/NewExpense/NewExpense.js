import React from 'react';
import ExpenseForm from "./ExpenseForm";
import './css/NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            id : Math.random().toString(),
            ...enteredExpenseData
            
        };

        props.onFetchDataFromNewExpense(expenseData);
    }

    return (
        <>
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseData} />
            </div>
        </>
    );

}

export default NewExpense;