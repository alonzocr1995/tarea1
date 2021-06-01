import React, { useState } from "react";
import "./App.css";
import ExpensesForm from "./Expenses/ExpensesForm";
import ExpensesItem from "./Expenses/ExpensesItem";
import Header from "./Header/Header";
import { Grid } from "@material-ui/core";
import { IUser } from "./types";

const App = () => {
  const dummyData: IUser[] = [
    { name: "Alonzo", age: 25, email: "alonzocr@gmail.com" },
    { name: "Tiqui", age: 28, email: "tiquicr@gmail.com" },
  ];

  const [users, setUsers] = useState(dummyData);

  const saveUserDataHandler = (enteredUserData: IUser) => {
    console.log(enteredUserData);
    setUsers((prevUsers) => [enteredUserData, ...prevUsers]);
  };

  return (
    <div>
      <Header />
      <ExpensesForm onSaveUserData={saveUserDataHandler} />
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={1} sm={2} />
          <Grid item xs={12} sm={8}>
            <ExpensesItem data={users} />
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
