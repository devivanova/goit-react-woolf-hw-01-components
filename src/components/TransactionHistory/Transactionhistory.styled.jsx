import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  border: 3px solid #dfdfdf;
  width: 600px;
  margin: 50px auto;
  padding: 10px;
  border-collapse: collapse;
  color: #7d7d7d;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  & th {
    background-color: #05bcd5;
    color: white;
    font-weight: bold;
    border: 1px solid #dfdfdf;
  }

  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & td {
    border: 1px solid #dfdfdf;
  }
`;