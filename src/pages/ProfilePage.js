import React from "react";
import UserForm from "../components/Forms/UserForm";


const ProfilePage = () => {
  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Informações sobre o usuário logado.</p>
      <UserForm />
    </div>
  );
};

export default ProfilePage;
