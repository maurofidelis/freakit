import React from 'react';
import PropTypes from 'prop-types';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from './CustomTable.styles';

const CustomTable = ({ columns, data, renderActions }) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.field}>{column.headerName}</TableCell>
          ))}
          {renderActions && <TableCell>Ações</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column) => (
              <TableCell key={column.field}>{row[column.field]}</TableCell>
            ))}
            {renderActions && (
              <TableCell>{renderActions(row)}</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderActions: PropTypes.func,
};

CustomTable.defaultProps = {
  renderActions: null,
};

export default CustomTable;