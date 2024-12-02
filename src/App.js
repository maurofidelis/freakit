import React from "react";
import Navbar from "./components/Navbar/Navbar";
import logo from "./assets/logo.png";

const App = () => {
  const handleToggleSidebar = () => {
    console.log("Sidebar toggle clicked");
  };

  return (
    <div>
      <Navbar
        logo={logo}
        username="John Doe"
        userRole="Administrator"
        profilePicture="https://via.placeholder.com/40"
        onToggleSidebar={handleToggleSidebar}
      />
    </div>
  );
};

export default App;
