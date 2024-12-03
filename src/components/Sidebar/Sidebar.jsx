import React from "react";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import {
  SidebarContainer,
  Overlay,
  SidebarContent,
  CloseButton,
  Menu,
  MenuItem,
} from "./Sidebar.styles";

const Sidebar = ({ isOpen, onClose, menuItems }) => {
  return (
    <>
      {/* Container da Sidebar */}
      <SidebarContainer isOpen={isOpen}>
        <SidebarContent>
          {/* Botão de Fechar */}
          <CloseButton onClick={onClose} aria-label="Fechar Sidebar">
            <IoMdClose />
          </CloseButton>

          {/* Menu */}
          <Menu>
            {menuItems.map((item, index) => (
              <MenuItem key={index}>
                <a href={item.link}>
                  {item.icon && <span>{item.icon}</span>}
                  {item.label}
                </a>
              </MenuItem>
            ))}
          </Menu>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

// PropTypes para validação
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
};

export default Sidebar;
