
import React, { useState } from 'react';
import SaveButton from '../../components/Buttons/SaveButton';

const UserCreatePage = () => {
  const [formData, setFormData] = useState("{\n  \"id\": \"\",\n  \"name\": \"\",\n  \"email\": \"\"\n}");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    fetch('/api/user/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => {
      alert('Registro criado com sucesso!');
      window.location.href = '/user';
    });
  };

  return (
    <div>
      <h1>Criar User</h1>
      
      <label>
        ID
        <input name="id" onChange={handleChange} value={formData.id} />
      </label>

      <label>
        Nome
        <input name="name" onChange={handleChange} value={formData.name} />
      </label>

      <label>
        E-mail
        <input name="email" onChange={handleChange} value={formData.email} />
      </label>
      <SaveButton label="Salvar" onClick={handleSubmit} />
    </div>
  );
};

export default UserCreatePage;
