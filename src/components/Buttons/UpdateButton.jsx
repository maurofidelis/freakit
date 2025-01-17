import React from 'react';
import PropTypes from 'prop-types';
import { FaSyncAlt } from 'react-icons/fa';
import { Button } from './UpdateButton.styles';

const UpdateButton = ({ label, onClick, isLoading, disabled }) => (
  <Button onClick={onClick} disabled={isLoading || disabled}>
    {isLoading ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3Zm-7 5a7 7 0 1 1 14 0A7 7 0 0 1 1 8Z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 8 8"
            to="360 8 8"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    ) : (
      <FaSyncAlt style={{ marginRight: '8px' }} />
    )}
    {label || 'Atualizar'}
  </Button>
);

UpdateButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

UpdateButton.defaultProps = {
  label: 'Atualizar',
  isLoading: false,
  disabled: false,
};

export default UpdateButton;