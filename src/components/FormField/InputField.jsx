import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, Label, Input } from './InputField.styles';

const InputField = ({ label, name, value, onChange, placeholder, type, error }) => (
  <InputWrapper>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
    {error && <span className="error">{error}</span>}
  </InputWrapper>
);

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  error: null,
};

export default InputField;
