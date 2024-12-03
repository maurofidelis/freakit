import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  background-color: white; /* Navbar branca */
  color: #2c3e50; /* Cor do texto */
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Espaço entre o hambúrguer e a logo */
`;

export const Logo = styled.img`
  height: 40px;
`;

export const UserProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #bdc3c7;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  text-align: right;
  margin-right: 15px;

  span {
    display: block;
  }

  .userRole {
    font-size: 12px;
    color: #7f8c8d;
  }
`;

export const HamburgerMenu = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  color: #2c3e50;
  cursor: pointer;
  margin-left: ${(props) => (props.isSidebarOpen ? "260px" : "0px")}; /* Move o botão dinamicamente */
  transition: margin-left 0.3s ease; /* Animação suave */
`;
