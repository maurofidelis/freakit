import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxWrapper, Label, Checkbox } from './CheckboxField.styles';

const CheckboxField = ({ label, name, checked, onChange, error }) => (
  <CheckboxWrapper>
    <Label>
      <Checkbox
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </Label>
    {error && <span className="error">{error}</span>}
  </CheckboxWrapper>
);

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

CheckboxField.defaultProps = {
  error: null,
};

export default CheckboxField;
