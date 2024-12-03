import React from "react";
import PropTypes from "prop-types";
import { NavbarContainer, UserProfile, UserInfo } from "./Navbar.styles";
import styles from "./Navbar.module.css";

const Navbar = ({ logo, username, userRole, profilePicture, onToggleSidebar, isSidebarOpen }) => {
    return (
        <NavbarContainer>
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
    isSidebarOpen: PropTypes.bool.isRequired
};

Navbar.defaultProps = {
    profilePicture: "https://via.placeholder.com/40",
}

export default Navbar;