import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../store/GlobalState";

import { boxShadow } from "../../styles/variables";

const IncExpContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  box-shadow: ${boxShadow};

  > div {
    flex: 1;
    text-align: center;

    &:first-of-type {
      border-right: 1px solid #dedede;
    }
  }
`;

const Money = styled("p")`
  margin: 5px 0;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${props => (props.plus ? "#2ecc71" : props.minus ? "#c0392b" : "")};
`;

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <IncExpContainer>
      <div>
        <h4>Income</h4>
        <Money plus>{income}</Money>
      </div>
      <div>
        <h4>Expense</h4>
        <Money minus>{expense}</Money>
      </div>
    </IncExpContainer>
  );
}

export default IncomeExpenses;
