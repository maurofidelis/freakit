
import React, { useState } from "react";
import {
  FormContainer,
  FormHeader,
  FormField,
  SubmitButton,
  Message,
  ValidationError,
} from "./UserForm.styles";

const UserForm = () => {
  const [formValues, setFormValues] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasErrors = Object.values(validationErrors).some((err) => err);
    if (hasErrors) {
      setErrorMessage("Por favor, corrija os erros antes de enviar.");
      return;
    }
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
        setValidationErrors({});
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
            onChange={(e) => {
              const value = e.target.value;
              const isValid = value.length >= 3 && value.length <= 50 && new RegExp("^[a-zA-Z ]+$").test(value);
              if (!isValid) {
                setValidationErrors((prev) => ({ ...prev, name: "O nome deve conter apenas letras e ter entre 3 e 50 caracteres." }));
              } else {
                setValidationErrors((prev) => ({ ...prev, name: "" }));
              }
              handleChange(e);
            }}
            required={true}
          />
          {validationErrors.name && (
            <ValidationError>{validationErrors.name}</ValidationError>
          )}
        </FormField>

        <FormField>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={formValues.email || ""}
            onChange={(e) => {
              const value = e.target.value;
              const isValid = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").test(value);
              if (!isValid) {
                setValidationErrors((prev) => ({ ...prev, email: "Por favor, insira um e-mail válido." }));
              } else {
                setValidationErrors((prev) => ({ ...prev, email: "" }));
              }
              handleChange(e);
            }}
            required={true}
          />
          {validationErrors.email && (
            <ValidationError>{validationErrors.email}</ValidationError>
          )}
        </FormField>

        <FormField>
          <label htmlFor="age">Idade:</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Digite sua idade"
            value={formValues.age || ""}
            onChange={(e) => {
              const value = e.target.value;
              const isValid = Number(value) >= 18 && Number(value) <= 100;
              if (!isValid) {
                setValidationErrors((prev) => ({ ...prev, age: "A idade deve estar entre 18 e 100 anos." }));
              } else {
                setValidationErrors((prev) => ({ ...prev, age: "" }));
              }
              handleChange(e);
            }}
            required={true}
          />
          {validationErrors.age && (
            <ValidationError>{validationErrors.age}</ValidationError>
          )}
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
