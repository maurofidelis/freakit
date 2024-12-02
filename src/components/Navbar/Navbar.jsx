import React from "react";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa"; 
import { NavbarContainer, Logo, UserProfile, UserInfo } from "./Navbar.styles";
import styles from "./Navbar.module.css";

const Navbar = ({ logo, username, userRole, profilePicture, onToggleSidebar }) => {
    return (
        <NavbarContainer>
            { /* Seção da esquerda: Menu Hamburguer + Logo */ }
            <div className={styles.leftSection}>
                <button
                    className={styles.hamburguerMenu}
                    onClick={onToggleSidebar}
                    aria-label="Alternar a Barra Lateral"
                >
                    <FaBars />
                </button>
                <Logo src={logo} alt="Logo do Sistema" />
            </div>

            { /* Seção da direita: Informações do Usuário */ }
            <div className={styles.rightSection}>
                <UserInfo>
                    <span className={styles.username}>{username}</span>
                    <span className={styles.userRole}>{userRole}</span>
                </UserInfo>
                <UserProfile>
                <img
                    src={profilePicture || "https://via.placeholder.com/40"}
                    alt="Perfil do Usuário"
                    className={styles.profileImg}
                />
                </UserProfile>
            </div>
        </NavbarContainer>
    );
};

// PropTypes para melhor reusabilidade
Navbar.propTypes = {
    logo: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userRole: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
    onToggleSidebar: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
    profilePicture: "https://via.placeholder.com/40",
}

export default Navbar;