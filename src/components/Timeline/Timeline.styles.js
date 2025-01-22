import styled from 'styled-components';

export const TimelineContainer = styled.div`
  margin: 20px 0;
  padding-left: 20px;
  border-left: 2px solid #ccc;
  ul {
    list-style: none;
    padding: 0;
  }
`;

export const TimelineItem = styled.li`
  position: relative;
  margin-bottom: 20px;
  padding-left: 10px;

  div {
    padding: 5px 10px;
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

export const TimelinePoint = styled.span`
  position: absolute;
  left: -8px;
  top: 8px;
  width: 12px;
  height: 12px;
  background: #007bff;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;


export const DetailButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ConsultationList = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: #f0f8ff;
  border: 1px solid #cce7ff;
  border-radius: 5px;

  h5 {
    margin-bottom: 10px;
  }

  div {
    margin-bottom: 8px;
  }
`;

export const EntregaButton = styled.button`
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #218838;
  }
`;