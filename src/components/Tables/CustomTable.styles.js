import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: #f8f9fa;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #dee2e6;
  text-align: left;
  font-size: 14px;
  color: #495057;

  &:first-child {
    font-weight: bold;
  }
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;