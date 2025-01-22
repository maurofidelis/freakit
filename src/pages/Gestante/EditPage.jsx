
import React, { useState, useEffect } from 'react';
import UpdateButton from '../../components/Buttons/UpdateButton';

import InputField from '../../components/FormField/InputField';
import SelectField from '../../components/FormField/SelectField';

const GestanteEditPage = ({ match }) => {
  const [formData, setFormData] = useState("{\n  \"cpf\": \"\",\n  \"nome\": \"\",\n  \"cns\": \"\",\n  \"municipio_cod_ibge\": \"\"\n}");

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
      window.location.href = '/gestante';
    });
  };

  return (
    <div>
      <h1>Editar Gestante</h1>
      
      <label>
        <InputField 
          label={"CPF da Gestante"}
          name={"cpf"}
          onChange={handleChange}
          placeholder={"Por favor, digite o CPF da Gestante"}
          type={"text"}
        />
      </label>

      <label>
        <InputField 
          label={"Nome da Gestante"}
          name={'nome'}
          onChange={handleChange}
          placeholder={"Por favor, digite o nome da Gestante"}
          type={"text"}
        />
      </label>

      <label>
       <InputField 
          label={"CNS da Gestante"}
          name={"cns"}
          onChange={handleChange}
          placeholder={"Por favor, digite o CNS da Gestante"}
          type={"text"}
        />
      </label>

      <label>
        <SelectField 
          label={"Município da Gestante"}
          name={"municipio_cod_ibge"}
          onChange={handleChange}
          options={
            [
              { value: 'admin', label: 'Administrador' },
              { value: 'user', label: 'Usuário' },
            ]
          }
        />
      </label>
      <UpdateButton label="Editar" onClick={handleSubmit} />
    </div>
  );
};

export default GestanteEditPage;
