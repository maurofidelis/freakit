import styled from "styled-components";

export const MainContainer = styled.main`
  margin-left: ${(props) => (props.isSidebarExpanded ? "240px" : "80px")}; /* Espaço para a Sidebar */
  background-color: #f2edf3; /* Fundo da área de conteúdo */
  min-height: 100vh;
  padding: 20px;
  transition: margin-left 0.3s ease; /* Suaviza o ajuste de layout */
`;

export const Breadcrumbs = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #7b7b7b;
`;

export const ContentContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra dos containers */
`;
