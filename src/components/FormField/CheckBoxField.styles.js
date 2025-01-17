import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
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
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
