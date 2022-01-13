import React from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from "react";
import ExpenseList from '../ExpenseList/ExpenseList';

const Expenses = (props) => {
    const [filtered, setFiltered] = useState('2022');

    //updating the filtered state
    const onFetchExpenseFilterData = (updateFiltered) => {
        setFiltered(updateFiltered);
    }

    //filter according to years
    const filterAccordingToYears = (expenses) => {
        return expenses.date.getFullYear().toString() === filtered;
    }

    // filter the array of object according to the selected years
    const filteredExpenses = props.item.filter(filterAccordingToYears);

    return (
        <>
            <ExpenseFilter selected={filtered} fetchExpenseFilterData={onFetchExpenseFilterData} />
            <ExpenseList items={filteredExpenses} />
        </>
    );
}

export default Expenses;