
import React, { useState, useEffect } from 'react';
import UpdateButton from '../../components/Buttons/UpdateButton';

const UserEditPage = ({ match }) => {
  const [formData, setFormData] = useState("{\n  \"id\": \"\",\n  \"name\": \"\",\n  \"email\": \"\"\n}");

  useEffect(() => {
    fetch(`/api/user/update/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, [match.params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    fetch('/api/user/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => {
      alert('Registro atualizado com sucesso!');
      window.location.href = '/user';
    });
  };

  return (
    <div>
      <h1>Editar User</h1>
      
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
      <UpdateButton label="Editar" onClick={handleSubmit} />
    </div>
  );
};

export default UserEditPage;
