import React from "react";
import SaveButton from "../components/Buttons/SaveButton";
import UpdateButton from "../components/Buttons/UpdateButton";
import TableActionButtons from "../components/Buttons/TableActionButtons";

const HomePage = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo à página inicial do sistema!</p>
      <SaveButton />
      <UpdateButton />
      <TableActionButtons />
    </div>
  );
};

export default HomePage;
