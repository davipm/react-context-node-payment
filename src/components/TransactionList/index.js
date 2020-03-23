import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Transaction from "../Transaction";

import { GlobalContext } from "../../store/GlobalState";

import { boxShadow } from "../../styles/variables";

const List = styled("ul")`
  margin-bottom: 40px;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 10px 0;
    padding: 10px;
    color: #333;
    background-color: #fff;
    box-shadow: ${boxShadow};
  }
`;

function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <List>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </List>
    </>
  );
}

export default TransactionList;
