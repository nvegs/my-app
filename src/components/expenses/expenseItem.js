import React from 'react';
import './css/expenseItem.css';
import {useState} from "react";
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
const [title, setTitle] = useState(props.title);
    return (
        <>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                    <button onClick={()=> setTitle('Changes Made!')}>Change title</button>
                </div>
            </div>
        </>
    );
}

export default ExpenseItem;