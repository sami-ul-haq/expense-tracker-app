import { useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #e6e8e9;
  background-color: #e6e8e9;
  margin-bottom: 25px;
`;

const TransactionItems = styled.div``;

const TransactionsContainer = ({ transactions }) => {
  const [searchInput, setSearchInput] = useState("");

  console.log("inside", transactions);

  return (
    <Container>
      <Heading>Transactions</Heading>

      <SearchInput
        type={"text"}
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <TransactionItems>
        {transactions?.length ? (
          transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))
        ) : (
          <p>No Transactions</p>
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;
