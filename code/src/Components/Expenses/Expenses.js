import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredItem = props.items.filter((expense) => {
      return  expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesList  items = {filteredItem} />
      </Card>
    </div>
  );
};

export default Expenses;
