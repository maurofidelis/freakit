import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.isExpanded ? "240px" : "80px")}; /* Largura dinâmica */
  height: 100%;
  background-color: #2c3e50;
  color: white;
  transition: width 0.3s ease; /* Transição suave */
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #3f4b59;
  h1 {
    font-size: ${(props) => (props.isExpanded ? "20px" : "18px")};
    margin: 0;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
`;

export const SidebarMenuItem = styled.li`
  margin: 10px 0;
  a {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: background 0.3s;
    .icon {
      margin-right: ${(props) => (props.isExpanded ? "10px" : "0")}; /* Espaço entre ícone e texto */
      font-size: 20px;
    }
    &:hover {
      background-color: #1abc9c;
    }
  }
`;
