import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  color: #495057;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e2e6ea;
    color: #212529;
  }

  &:disabled {
    background: #e9ecef;
    color: #adb5bd;
    cursor: not-allowed;
  }

  svg {
    font-size: 16px;
  }
`;