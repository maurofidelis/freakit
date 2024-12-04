
import styled from "styled-components";

export const FormContainer = styled.div`
`;

export const FormHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  color: #333333;
  font-weight: bold;
`;

export const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333333;
  }

  input,
  select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:focus {
      border-color: #1abc9c;
      box-shadow: 0 0 5px rgba(26, 188, 156, 0.4);
      outline: none;
    }

    &:hover {
      border-color: #16a085;
    }
  }

  select {
    appearance: none; /* Remove a seta padrão do select */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231ABC9C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: #1abc9c;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #16a085;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  font-size: 14px;
  margin-top: 20px;
  color: ${(props) => (props.isError ? "red" : "green")};
  text-align: center;
`;

export const ValidationError = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;
