import React from 'react';
import PropTypes from 'prop-types';
import { SelectWrapper, Label, Select } from './SelectField.styles';

const SelectField = ({ label, name, value, onChange, options, error }) => (
  <SelectWrapper>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Select id={name} name={name} value={value} onChange={onChange}>
      <option value="">Selecione</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
    {error && <span className="error">{error}</span>}
  </SelectWrapper>
);

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
};

SelectField.defaultProps = {
  label: '',
  error: null,
};

export default SelectField;
