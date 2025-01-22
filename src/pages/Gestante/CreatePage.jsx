
import React, { useState } from 'react';
import SaveButton from '../../components/Buttons/SaveButton';

import InputField from '../../components/FormField/InputField';
import SelectField from '../../components/FormField/SelectField';

const GestanteCreatePage = () => {
  const [formData, setFormData] = useState("{\n  \"cpf\": \"\",\n  \"nome\": \"\",\n  \"cns\": \"\",\n  \"municipio_cod_ibge\": \"\"\n}");

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
      window.location.href = '/gestante';
    });
  };

  return (
    <div>
      <h1>Criar Gestante</h1>
      
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
      <SaveButton label="Salvar" onClick={handleSubmit} />
    </div>
  );
};

export default GestanteCreatePage;
