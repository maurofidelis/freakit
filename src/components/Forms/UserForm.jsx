
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
      const response = await fetch("/api/endpoint", {
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
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder=""
            value={formValues.username || ""}
            onChange={(e) => {
              const value = e.target.value;
              const isValid = true;
              if (!isValid) {
                setValidationErrors((prev) => ({ ...prev, username: "Valor inválido." }));
              } else {
                setValidationErrors((prev) => ({ ...prev, username: "" }));
              }
              handleChange(e);
            }}
            required={false}
          />
          {validationErrors.username && (
            <ValidationError>{validationErrors.username}</ValidationError>
          )}
        </FormField>

        <FormField>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder=""
            value={formValues.password || ""}
            onChange={(e) => {
              const value = e.target.value;
              const isValid = true;
              if (!isValid) {
                setValidationErrors((prev) => ({ ...prev, password: "Valor inválido." }));
              } else {
                setValidationErrors((prev) => ({ ...prev, password: "" }));
              }
              handleChange(e);
            }}
            required={false}
          />
          {validationErrors.password && (
            <ValidationError>{validationErrors.password}</ValidationError>
          )}
        </FormField>

        <FormField>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=""
            value={formValues.email || ""}
            onChange={(e) => {
              const value = e.target.value;
              const isValid = true;
              if (!isValid) {
                setValidationErrors((prev) => ({ ...prev, email: "Valor inválido." }));
              } else {
                setValidationErrors((prev) => ({ ...prev, email: "" }));
              }
              handleChange(e);
            }}
            required={false}
          />
          {validationErrors.email && (
            <ValidationError>{validationErrors.email}</ValidationError>
          )}
        </FormField>

        <FormField>
          <label htmlFor="country">País:</label>
          <select
            id="country"
            name="country"
            value={formValues.country || ""}
            onChange={(e) => {
              const value = e.target.value;
              const isValid = true;
              if (!isValid) {
                setValidationErrors((prev) => ({ ...prev, country: "Valor inválido." }));
              } else {
                setValidationErrors((prev) => ({ ...prev, country: "" }));
              }
              handleChange(e);
            }}
          >
            <option value="">Selecione...</option>
            <option value="br">Brasil</option>
<option value="us">Estados Unidos</option>
<option value="uk">Reino Unido</option>
          </select>
          {validationErrors.country && (
            <ValidationError>{validationErrors.country}</ValidationError>
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
