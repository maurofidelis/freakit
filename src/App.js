import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import logo from "./assets/logo.png";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const menuItems = [
    { label: "Home", link: "/", icon: <FaHome /> },
    { label: "Perfil", link: "/profile", icon: <FaUser /> },
    { label: "Configurações", link: "/settings", icon: <FaCog /> },
  ];

  const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded);

  return (
    <div>
      <Navbar
        logo={logo}
        username="John Doe"
        userRole="Administrator"
        profilePicture="https://via.placeholder.com/40"
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarExpanded}
      />
      <Sidebar
        isExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
        menuItems={menuItems}
      />
    </div>
  );
};

export default App;
