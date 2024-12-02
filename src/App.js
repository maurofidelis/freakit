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
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  
  return (
    <div>
      <Navbar
        logo={logo}
        username="John Doe"
        userRole="Administrator"
        profilePicture="https://via.placeholder.com/40"
        onToggleSidebar={toggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} menuItems={menuItems} />
    </div>
  );
};

export default App;
