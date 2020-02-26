import React from "react";
import styled from "styled-components";
import Global from "./styles/Global";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransiction";
import TransactionList from "./components/TransactionList";

import GlobalState from "./store/GlobalState";

const Container = styled("div")`
  margin: 30px auto;
  width: 350px;
`;

function App() {
  return (
    <GlobalState>
      <Header />
      <Container>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Container>
      <Global />
    </GlobalState>
  );
}

export default App;
