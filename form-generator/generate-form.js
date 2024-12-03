#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Template do componente de formulário
const generateFormComponent = (componentName, fields) => {
  const fieldsCode = fields
    .map((field) => {
      return `
        <div>
          <label htmlFor="${field.name}">${field.label}:</label>
          <input
            type="${field.type}"
            id="${field.name}"
            name="${field.name}"
            placeholder="${field.placeholder || ""}"
            value={formValues.${field.name} || ""}
            onChange={handleChange}
            required={${field.required || false}}
          />
        </div>`;
    })
    .join("\n");

  return `
import React, { useState } from "react";

const ${componentName} = () => {
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
      const response = await fetch("http://127.0.0.1:8000/api/${componentName.toLowerCase()}", {
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
        ${fieldsCode}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default ${componentName};
`;
};

// Função para criar o arquivo do componente
const createComponentFile = (componentName, fields) => {
  const componentCode = generateFormComponent(componentName, fields);
  const componentPath = path.join(process.cwd(), 'src', 'components', 'Forms', `${componentName}.jsx`);


  fs.writeFileSync(componentPath, componentCode, "utf8");
  console.log(`Componente ${componentName}.jsx gerado com sucesso em ${componentPath}`);
};

// Função principal
const main = () => {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("Uso: node generate-form.js <NomeDoComponente> <ArquivoComCampos>");
    process.exit(1);
  }

  const [componentName, fieldsFile] = args;

  const fieldsPath = path.join(process.cwd(), fieldsFile);
  if (!fs.existsSync(fieldsPath)) {
    console.error(`Arquivo ${fieldsFile} não encontrado.`);
    process.exit(1);
  }

  const fields = JSON.parse(fs.readFileSync(fieldsPath, "utf8"));
  createComponentFile(componentName, fields);
};

main();
