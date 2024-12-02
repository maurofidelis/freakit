import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #2c3e50;
  color: white;
  transition: left 0.3s ease;
  z-index: 1001;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 15px;
`;

export const MenuLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;

  &:hover {
    color: #1abc9c;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  margin: 10px;
  background: none;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;
