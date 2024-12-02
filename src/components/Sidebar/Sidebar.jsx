import React from "react";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, onClose, menuItems }) => {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            { /* Overlay */ }
            {isOpen && <div className={styles.overlay} onClick={onClose}></div>}

            { /* Conteúdo da Sidebar */ }
            <div className={styles.sidebarContent}>
                <button className={styles.closebutton} onClick={onClose} aria-label="Fechar Sidebar">
                    <IoMdClose />                
                </button>
                <ul className={styles.menu}>
                    {menuItems.map((item, index) => (
                        <li key={index} className={styles.menuItems}>
                            <a href={item.link} className={styles.menuItems}>
                                {item.icon && <span className={styles.icon}>{item.icon}</span>}
                                {item.label}
                            </a>    
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// PropTypes para melhorar a reutilização
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