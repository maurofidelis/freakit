
import React, { useState } from "react";
import {
  FormContainer,
  FormHeader,
  FormField,
  SubmitButton,
  Message,
} from "./UserForm.styles";

const UserForm = () => {
  const [formValues, setFormValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/userform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setSuccessMessage("Formulário enviado com sucesso!");
        setFormValues({});
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.detail || "Erro ao enviar o formulário.");
      }
    } catch {
      setErrorMessage("Erro de conexão com o servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormHeader>Preencha o Formulário</FormHeader>
      <form onSubmit={handleSubmit}>
        
        <FormField>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={formValues.name || ""}
            onChange={handleChange}
            required={true}
          />
        </FormField>

        <FormField>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={formValues.email || ""}
            onChange={handleChange}
            required={true}
          />
        </FormField>

        <FormField>
          <label htmlFor="age">Idade:</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Digite sua idade"
            value={formValues.age || ""}
            onChange={handleChange}
            required={true}
          />
        </FormField>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </SubmitButton>
      </form>
      {successMessage && <Message>{successMessage}</Message>}
      {errorMessage && <Message isError>{errorMessage}</Message>}
    </FormContainer>
  );
};

export default UserForm;
