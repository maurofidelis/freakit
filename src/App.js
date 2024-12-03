import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import logo from "./assets/logo.png";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import MainContent from "./components/MainContent/MainContent";
import UserForm  from "./components/Forms/UserForm";

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
      <MainContent isSidebarExpanded={isSidebarExpanded}>
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          Home / Dashboard
        </div> 

        {/* Conteúdo Principal */}
        <div className="content-container">
          <UserForm />
        </div>
      </MainContent>      
    </div>
  );
};

export default App;
