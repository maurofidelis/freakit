import React from "react";
import SaveButton from "../components/Buttons/SaveButton";
import UpdateButton from "../components/Buttons/UpdateButton";

const HomePage = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo à página inicial do sistema!</p>
      <SaveButton />
      <UpdateButton />
    </div>
  );
};

export default HomePage;
