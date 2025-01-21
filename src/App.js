import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import logo from "./assets/logo.png";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const menuItems = [
    { label: "Home", link: "/", icon: <FaHome /> },
    { label: "Perfil", link: "/profile", icon: <FaUser /> },
    { label: "Configurações", link: "/settings", icon: <FaCog /> },
  ];

  const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded);

  return (
    <Router>
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
          <Routes>
            {/* Rotas para renderizar páginas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
};

export default App;