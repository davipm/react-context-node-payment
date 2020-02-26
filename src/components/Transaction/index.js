import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../store/GlobalState";

import { Button } from "../../styles/Button";

const ListItem = styled("li")`
  border-right: 5px solid ${props => (props.type ? "#2ecc71" : "#c0392b")};

  &:hover ${Button} {
    opacity: 1;
  }
`;

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sing = transaction.amount < 0 ? "-" : "+";

  return (
    <ListItem type={transaction.amount > 0}>
      {transaction.text}{" "}
      <span>
        {sing}${Math.abs(transaction.amount)}
      </span>
      <Button delete onClick={() => deleteTransaction(transaction.id)}>
        X
      </Button>
    </ListItem>
  );
}

export default Transaction;
