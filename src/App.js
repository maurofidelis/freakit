import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import logo from "./assets/logo.png";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const App = () => {

  // useState para Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const menuItems = [
    { label: "Home", link: "/", icon: <FaHome /> },
    { label: "Perfil", link: "/profile", icon: <FaUser /> },
    { label: "Settings", link: "/settings", icon: <FaCog />},
    {
      label: "Configurações",
      link: "/settings",
      icon: <FaCog />,
      submenu: [
        { label: "Opção 1", link: "/settings/option1" },
        { label: "Opção 2", link: "/settings/option2" },
      ],
    },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  return (
    <div>
      <Navbar
        logo={logo}
        username="John Doe"
        userRole="Administrator"
        profilePicture="https://via.placeholder.com/40"
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        menuItems={menuItems} 
      />
    </div>
  );
};

export default App;
