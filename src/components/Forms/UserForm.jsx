
import React, { useState } from "react";

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
    <div>
      <h2>Preencha o Formulário</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
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
        </div>

        <div>
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
        </div>

        <div>
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
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default UserForm;
