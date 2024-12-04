#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Template do componente de formulário
const generateFormComponent = (componentName, fields, endpoint) => {
  const fieldsCode = fields
    .map((field) => {
      const validations = [];
      if (field.validationRules) {
        if (field.validationRules.minLength) {
          validations.push(`value.length >= ${field.validationRules.minLength}`);
        }
        if (field.validationRules.maxLength) {
          validations.push(`value.length <= ${field.validationRules.maxLength}`);
        }
        if (field.validationRules.min !== undefined) {
          validations.push(`Number(value) >= ${field.validationRules.min}`);
        }
        if (field.validationRules.max !== undefined) {
          validations.push(`Number(value) <= ${field.validationRules.max}`);
        }
        if (field.validationRules.pattern) {
          validations.push(
            `new RegExp("${field.validationRules.pattern}").test(value)`
          );
        }
      }

      const validationCheck = validations.length
        ? `const isValid = ${validations.join(" && ")};`
        : "const isValid = true;";
      const errorMessage =
        field.validationRules?.errorMessage || "Valor inválido.";

      if (field.type === "select") {
        const optionsCode = field.options
          .map(
            (option) =>
              `<option value="${option.value}">${option.label}</option>`
          )
          .join("\n");

        return `
        <FormField>
          <label htmlFor="${field.name}">${field.label}:</label>
          <select
            id="${field.name}"
            name="${field.name}"
            value={formValues.${field.name} || ""}
            onChange={(e) => {
              const value = e.target.value;
              ${validationCheck}
              if (!isValid) {
                setValidationErrors((prev) => ({ ...prev, ${field.name}: "${errorMessage}" }));
              } else {
                setValidationErrors((prev) => ({ ...prev, ${field.name}: "" }));
              }
              handleChange(e);
            }}
          >
            <option value="">Selecione...</option>
            ${optionsCode}
          </select>
          {validationErrors.${field.name} && (
            <ValidationError>{validationErrors.${field.name}}</ValidationError>
          )}
        </FormField>`;
      }

      return `
        <FormField>
          <label htmlFor="${field.name}">${field.label}:</label>
          <input
            type="${field.type}"
            id="${field.name}"
            name="${field.name}"
            placeholder="${field.placeholder || ""}"
            value={formValues.${field.name} || ""}
            onChange={(e) => {
              const value = e.target.value;
              ${validationCheck}
              if (!isValid) {
                setValidationErrors((prev) => ({ ...prev, ${field.name}: "${errorMessage}" }));
              } else {
                setValidationErrors((prev) => ({ ...prev, ${field.name}: "" }));
              }
              handleChange(e);
            }}
            required={${field.required || false}}
          />
          {validationErrors.${field.name} && (
            <ValidationError>{validationErrors.${field.name}}</ValidationError>
          )}
        </FormField>`;
    })
    .join("\n");

  return `
import React, { useState } from "react";
import {
  FormContainer,
  FormHeader,
  FormField,
  SubmitButton,
  Message,
  ValidationError,
} from "./${componentName}.styles";

const ${componentName} = () => {
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
      const response = await fetch("${endpoint}", {
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
        ${fieldsCode}
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </SubmitButton>
      </form>
      {successMessage && <Message>{successMessage}</Message>}
      {errorMessage && <Message isError>{errorMessage}</Message>}
    </FormContainer>
  );
};

export default ${componentName};
`;
};

// Template do arquivo de estilos 
const generateStylesFile = () => {
  return `
import styled from "styled-components";

export const FormContainer = styled.div\`
\`;

export const FormHeader = styled.h2\`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  color: #333333;
  font-weight: bold;
\`;

export const FormField = styled.div\`
  margin-bottom: 20px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333333;
  }

  input,
  select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:focus {
      border-color: #1abc9c;
      box-shadow: 0 0 5px rgba(26, 188, 156, 0.4);
      outline: none;
    }

    &:hover {
      border-color: #16a085;
    }
  }

  select {
    appearance: none; /* Remove a seta padrão do select */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231ABC9C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
  }
\`;

export const SubmitButton = styled.button\`
  width: 100%;
  padding: 12px 20px;
  background-color: #1abc9c;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #16a085;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
\`;

export const Message = styled.p\`
  font-size: 14px;
  margin-top: 20px;
  color: \${(props) => (props.isError ? "red" : "green")};
  text-align: center;
\`;

export const ValidationError = styled.span\`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
\`;
`;
};

// Função para criar os arquivos
const createFiles = (componentName, fields, endpoint) => {
  const componentCode = generateFormComponent(componentName, fields, endpoint);
  const stylesCode = generateStylesFile();

  const componentPath = path.join(
    process.cwd(),
    "src",
    "components",
    "Forms",
    `${componentName}.jsx`
  );
  const stylesPath = path.join(
    process.cwd(),
    "src",
    "components",
    "Forms",
    `${componentName}.styles.js`
  );

  fs.writeFileSync(componentPath, componentCode, "utf8");
  fs.writeFileSync(stylesPath, stylesCode, "utf8");

  console.log(
    `Componente ${componentName}.jsx e estilos ${componentName}.styles.js gerados com sucesso!`
  );
};

// Função principal
const main = () => {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.error(
      "Uso: node generate-form.js <NomeDoComponente> <ArquivoComCampos> <Endpoint>"
    );
    process.exit(1);
  }

  const [componentName, fieldsFile, endpoint] = args;

  const fieldsPath = path.join(process.cwd(), fieldsFile);
  if (!fs.existsSync(fieldsPath)) {
    console.error(`Arquivo ${fieldsFile} não encontrado.`);
    process.exit(1);
  }

  const fields = JSON.parse(fs.readFileSync(fieldsPath, "utf8"));
  createFiles(componentName, fields, endpoint);
};

main();
