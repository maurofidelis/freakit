import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  .error {
    color: red;
    font-size: 12px;
    margin-top: 4px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
