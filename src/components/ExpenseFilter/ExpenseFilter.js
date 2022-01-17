import React from 'react';
import './css/ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (e) => {
        props.fetchExpenseFilterData(e.target.value);
        console.log(props.selected);
    }
    
    
return (
    <>
        <div className="expenses-filter">
            <div className="expenses-filter__controls">
                <label>Filter the year</label>
                <select  value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2021"></option>
                    <option value="2020"></option>
                    <option value="2019"></option>
                    <option value="2018"></option>
                </select>
            </div>
        </div>
    </>

);
}


export default ExpenseFilter;