import React from 'react';
import { useState } from "react";
import Expenses from './components/expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
// import IncrementItem from './components/experiment/IncrementItem';
// import Counter from "./components/experiment/counter";
// import CountRender from "./components/experiment/readCounter";
// import StopWatch from "./components/experiment/timerCount";


const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const saveExpenseData = (fetchData) => {

    setExpenses(previousExpenses => {
      return [fetchData, ...previousExpenses];
    });
    // console.log(fetchData);
  };

  return (
    <>
      <NewExpense onFetchDataFromNewExpense={saveExpenseData} />
      <Expenses item={expenses} />

      {/* <IncrementItem /> */}
      {/* <Counter />
      <CountRender />
      <StopWatch /> */}
    </>
  );
}


export default App;