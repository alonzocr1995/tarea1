import React from "react";

import { IUser } from "../types";

interface IProps {
  data: IUser[];
}

const ExpensesItem: React.FC<IProps> = ({ data }) => {
  return (
    <div className="container">
      <hr />
      {data.map((user) => {
        return (
          <div>
            <label> Name </label>
            <h4>{user?.name}</h4>
            <label> Age </label>
            <h4>{user?.age}</h4>
            <label> Email </label>
            <h4>{user?.email}</h4>
            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ExpensesItem;
