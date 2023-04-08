import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [disp, setDisp] = useState('yes');



  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
 
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setDisp('no')
  
  };
  function dispform(){
    setDisp('yes')
  }
  function dispformNo(){
    setDisp('no')
  }

  if(disp=="no"){
  
    return <div className='new-expense__controls'>
    <button onClick={dispform} >Add Expense</button>
    </div>
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='nn'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
        <button type="button" onClick={dispformNo}>Cancel</button>
      <div >
        <button type='submit'>submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;