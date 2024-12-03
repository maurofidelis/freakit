import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  ToggleButton,
} from "./Sidebar.styles";

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const menuItems = [
    { label: "Home", link: "/", icon: <FaHome /> },
    { label: "Perfil", link: "/profile", icon: <FaUser /> },
    { label: "Configurações", link: "/settings", icon: <FaCog /> },
  ];

  return (
    <SidebarContainer isExpanded={isExpanded}>
      {/* Cabeçalho da Sidebar */}
      <SidebarHeader>
        <h1>{isExpanded ? "Menu" : "M"}</h1>
        <ToggleButton onClick={toggleSidebar}>
          {isExpanded ? "←" : "→"}
        </ToggleButton>
      </SidebarHeader>

      {/* Menu de Navegação */}
      <SidebarMenu>
        {menuItems.map((item, index) => (
          <SidebarMenuItem key={index} isExpanded={isExpanded}>
            <Link to={item.link}>
              <span className="icon">{item.icon}</span>
              {isExpanded && <span className="label">{item.label}</span>}
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isExpanded: PropTypes.bool.isRequired, // Indica se está expandida
  toggleSidebar: PropTypes.func.isRequired, // Alterna o estado
};

export default Sidebar;
