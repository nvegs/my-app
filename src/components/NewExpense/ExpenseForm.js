import React from 'react';
import './css/ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');

    //update input field
    const titleChangeHandler = (e) => {
        setTitleInput(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setAmountInput(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setDateInput(e.target.value);
    };

    //submit input field
    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: titleInput,
            amount: amountInput,
            date: new Date(dateInput)
        };

        props.onSaveExpenseData(expenseData);

        setTitleInput('');
        setAmountInput('');
        setDateInput('');
    }



    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__controls">
                        <label>Title</label>
                        <input type="text" value={titleInput} onChange={titleChangeHandler} />
                    </div>

                    <div className="new-expense__controls">
                        <label>Amount</label>
                        <input type="number" value={amountInput} min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>

                    <div className="new-expense__controls">
                        <label>Date</label>
                        <input type="date" value={dateInput} min="2018-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </>
    );
}

export default ExpenseForm;