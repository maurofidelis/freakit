import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { ActionButton, ButtonContainer } from './TableActionButtons.styles';

const TableActionButtons = ({ onView, onEdit, onDelete, isDisabled }) => (
  <ButtonContainer>
    <ActionButton onClick={onView} disabled={isDisabled} title="View">
      <FaEye />
    </ActionButton>
    <ActionButton onClick={onEdit} disabled={isDisabled} title="Edit">
      <FaEdit />
    </ActionButton>
    <ActionButton onClick={onDelete} disabled={isDisabled} title="Delete">
      <FaTrash />
    </ActionButton>
  </ButtonContainer>
);

TableActionButtons.propTypes = {
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

TableActionButtons.defaultProps = {
  isDisabled: false,
};

export default TableActionButtons;