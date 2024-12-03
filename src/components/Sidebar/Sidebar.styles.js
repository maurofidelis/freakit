import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-260px")}; /* Transição para abrir/fechar */
  width: 260px;
  height: 100%;
  background-color: white; /* Cor branca */
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1); /* Sombra semelhante à Navbar */
  color: #2c3e50;
  transition: left 0.3s ease; /* Animação suave */
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${(props) => (props.isOpen ? "block" : "none")}; /* Exibir apenas se a sidebar estiver aberta */
`;

export const SidebarContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 24px;
  color: #2c3e50;
  cursor: pointer;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin: 10px 0;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      color: #1abc9c; /* Cor de destaque ao passar o mouse */
    }
  }
`;
