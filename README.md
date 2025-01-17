# Freakit - Front-End React Kit

Este projeto é uma **interface de usuário modular e responsiva**, construída com React.js, para aplicações administrativas. Ele inclui componentes reutilizáveis como **Navbar**, **Sidebar**, e um sistema de **MainContent** que suporta formulários e navegação dinâmica com integração ao **React Router**.

---

## 📂 Estrutura do Projeto

```plaintext
src/
  components/
    Buttons/
      SaveButton.jsx 
      SaveButton.style.js
      TableActionButton.jsx
      TableActionButton.styles.js
      UpdateButton.jsx
      UpdateButton.styles.js
    Forms/
      UserForm.jsx
    MainContent/
      MainContent.jsx
      MainContent.styles.js
    Navbar/
      Navbar.jsx
      Navbar.styles.js
      Navbar.module.css
    Sidebar/
      Sidebar.jsx
      Sidebar.styles.js
      Sidebar.module.css
    Tables/
      CustomTable.jsx
      CustomTable.styles.js

  pages/
    HomePage.jsx
    ProfilePage.jsx
    SettingsPage.jsx
  assets/
    logo.png
  App.js
  README.md
```

---

## 🚀 Recursos Principais

- **Navbar**:
  - Menu dinâmico que interage com a sidebar.
  - Exibição do nome, função e foto de perfil do usuário.
  - Responsiva e estilizada.

- **Sidebar**:
  - Expansível e recolhível, com suporte a ícones e labels.
  - Integração direta com o React Router para navegação.
  - Suporte a temas claros e escuros.

- **MainContent**:
  - Área principal para exibição de páginas e formulários.
  
- **Formulários Dinâmicos**:
  - Gerados automaticamente com base em um arquivo JSON.
  - Suporte para validação no frontend.
  - Integração direta com endpoints do backend configuráveis.

---

## 🔧 Instalação

### Pré-requisitos

- **Node.js** (versão 16 ou superior).
- Gerenciador de pacotes (npm ou yarn).

### Passos de Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/maurofidelis/freakit.git
   cd freakit
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

---

## 🧩 Uso

### Navbar

#### Propriedades

| Propriedade       | Tipo        | Obrigatório | Descrição                              | Exemplo                        |
|--------------------|-------------|-------------|----------------------------------------|--------------------------------|
| `logo`            | `string`    | Sim         | Caminho para a imagem da logo.         | `"./assets/logo.png"`         |
| `username`        | `string`    | Sim         | Nome do usuário.                       | `"John Doe"`                  |
| `userRole`        | `string`    | Sim         | Função ou papel do usuário.            | `"Administrator"`             |
| `profilePicture`  | `string`    | Não         | URL para a imagem de perfil.           | `"https://via.placeholder.com/40"` |
| `onToggleSidebar` | `function`  | Sim         | Função chamada ao clicar no menu.      | `() => console.log('Toggle')` |
| `isSidebarOpen`   | `bool`      | Sim         | Indica se a sidebar está expandida.    | `true`                        |

---

### Sidebar

#### Propriedades

| Propriedade  | Tipo        | Obrigatório | Descrição                                  | Exemplo                                  |
|--------------|-------------|-------------|--------------------------------------------|------------------------------------------|
| `isExpanded` | `bool`      | Sim         | Define se a sidebar está expandida.        | `true`                                   |
| `toggleSidebar` | `function` | Sim         | Função para alternar o estado da sidebar. | `() => setIsSidebarExpanded(!isExpanded)` |
| `menuItems`  | `array`     | Sim         | Links e ícones exibidos no menu.           | `[{ label: "Home", link: "/", icon: <FaHome /> }]` |

---

### MainContent

- **Breadcrumbs**: Exibição dinâmica com base na rota ativa.
- **Renderização de Páginas**: As páginas são carregadas dinamicamente usando o React Router.

---

## Componentes 

### Componentes de Botão (Buttoms)

Todos os componentes de botão estão em `src\components\Buttons\`

1. **Botão de Salvar (__SaveButton__)** 
É o botão utilizado para salvar informações ou interações do usuário 

**Propriedades:**
| Propriedade  | Tipo       | Padrão   | Descrição                                    |
|--------------|------------|----------|--------------------------------------------|
| `label`      | `string`   | `Salvar`  | Texto exibido no botão.                    |
| `onClick`    | `function` | Obrigatório | Função executada ao clicar no botão.       |
| `isLoading`  | `boolean`  | `false`   | Exibe animação de carregamento.            |
| `disabled`   | `boolean`  | `false`   | Desativa o botão.                          |

**Exemplo de Uso**
```jsx
<SaveButton
  label="Salvar Dados"
  onClick={handleSave}
  isLoading={false}
  disabled={false}
/>
```
2. **Botão de Atualizar (__UpdateButton__)**
Botão utilizado para atualizar informações em formulários ou interfaces

**Propriedades:**
| Propriedade  | Tipo       | Padrão     | Descrição                                    |
|--------------|------------|------------|--------------------------------------------|
| `label`      | `string`   | `Atualizar` | Texto exibido no botão.                    |
| `onClick`    | `function` | Obrigatório | Função executada ao clicar no botão.       |
| `isLoading`  | `boolean`  | `false`     | Exibe animação de carregamento.            |
| `disabled`   | `boolean`  | `false`     | Desativa o botão.                          |

**Exemplo de Uso:**
```jsx
<UpdateButton
  label="Atualizar Dados"
  onClick={handleUpdate}
  isLoading={true}
  disabled={false}
/>
```

3. **Botões de Ação de Tabela**
Conjunto de botões exibidos na coluna de ação das tabelas para interações como visualizar, editar e deletar itens. 

**Propriedades:**
| Propriedade  | Tipo       | Padrão   | Descrição                                    |
|--------------|------------|----------|--------------------------------------------|
| `onView`     | `function` | Obrigatório | Função executada ao clicar no botão de visualizar. |
| `onEdit`     | `function` | Obrigatório | Função executada ao clicar no botão de editar.     |
| `onDelete`   | `function` | Obrigatório | Função executada ao clicar no botão de deletar.    |
| `isDisabled` | `boolean`  | `false`   | Desativa todos os botões do componente.    |

**Exemplo de Uso:**
```jsx
<TableActionButtons
  onView={() => console.log('Visualizar item')}
  onEdit={() => console.log('Editar item')}
  onDelete={() => console.log('Deletar item')}
  isDisabled={false}
/>
```

### Componentes de Tabela (__CustomTable__)
O componente **Custom Table** foi criado para renderizar tabelas dinâmicas e reutilizáveis. Ele permite a personalização de colunas, dados e ações específicas para cada linha

**Propriedades**
| Propriedade     | Tipo       | Padrão     | Descrição                                                                 |
|-----------------|------------|------------|---------------------------------------------------------------------------|
| `columns`       | `array`    | Obrigatório | Define as colunas da tabela (campos e cabeçalhos).                        |
| `data`          | `array`    | Obrigatório | Dados da tabela, onde cada item representa uma linha.                     |
| `renderActions` | `function` | `null`      | Função para renderizar botões de ação personalizados na última coluna.    |


**Estrutura da Propriedade `columns`**
A propriedade `columns` deve ser um array de objetos com os seguintes campos: 
| Campo       | Tipo     | Descrição                                    |
|-------------|----------|----------------------------------------------|
| `field`     | `string` | Nome da propriedade do objeto nos dados.     |
| `headerName`| `string` | Texto exibido como cabeçalho da coluna.      |

**Estrutura da Propriedade `data`**
A propriedade `data`deve ser um array de objetos. Cada objeto representa uma linha da tabela, onde as chaves correspondem aos valores definidos em `field`

**Exemplo de uso**
```jsx
import React from 'react';
import CustomTable from './components/Tables/CustomTable';
import TableActionButtons from './components/Buttons/TableActionButtons';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Nome' },
  { field: 'email', headerName: 'E-mail' },
];

const data = [
  { id: 1, name: 'João Silva', email: 'joao.silva@example.com' },
  { id: 2, name: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
];

const App = () => (
  <CustomTable
    columns={columns}
    data={data}
    renderActions={(row) => (
      <TableActionButtons
        onView={() => console.log('Visualizar:', row)}
        onEdit={() => console.log('Editar:', row)}
        onDelete={() => console.log('Deletar:', row)}
      />
    )}
  />
);

export default App;
```

## 🛠 Formulários Dinâmicos

O formulário é gerado automaticamente a partir de um arquivo JSON e integrado ao backend.

### Exemplo de JSON

```json
[
  { "name": "username", "label": "Nome de Usuário", "type": "text", "validation": { "required": true, "minLength": 3 } },
  { "name": "password", "label": "Senha", "type": "password", "validation": { "required": true, "minLength": 8 } },
  { "name": "email", "label": "E-mail", "type": "email", "validation": { "required": true } }
]
```

### Comando para Gerar um Componete de Formulário

Use o seguinte comando para criar um novo formulário:

```bash
npm run generate-form <NomeDoComponente> <ArquivoComCampos> <Endpoint>
```

Este comando gera um componente de formulário com validações frontend e integração com o backend.

---

## Criar Páginas de CRUD Completo 

O freakit também cria toda a estrutura de CRUD automaticamente a partir de um arquivo JSON que define os dados e integrados a endpoints do backend. 

O CRUD criado contém a seguinte estrutura:

- Nome do CRUD 
-- IndexPage.jsx -> contendo uma tabela com os campos definidos e botões de ação de editar, visualizar e deletar nas linhas das tabelas, deve conter, também, um botão de Criar <Nome do CRUD>
--- O botão de Visualizar abre um modal contendo os campos definidos bloqueados
--- O botão de deletar abre um pop-up com a mensagem de confirmação para deletar o registro 
-- CreatePage.jsx -> contendo um Formulário com os campos definidos no Json e um botão de salvar que irá enviar os dados para uma rota create
-- EditPage.jsx -> contendo um Formulário com os campos definidos e um botão de editar para enviar as alterações para uma rota update 

-- 


```plaintext
src/
  components/
    Navbar/
      Navbar.jsx
      Navbar.styles.js
      Navbar.module.css
    Sidebar/
      Sidebar.jsx
      Sidebar.styles.js
      Sidebar.module.css
    MainContent/
      MainContent.jsx
      MainContent.styles.js
    Forms/
      UserForm.jsx
  pages/
    HomePage.jsx
    ProfilePage.jsx
    SettingsPage.jsx
  assets/
    logo.png
  App.js
  README.md
```



### Exemplo de JSON 

```json 
[
  { "name": "username", "label": "Nome de Usuário", "type": "text", "validation": { "required": true, "minLength": 3 } },
  { "name": "password", "label": "Senha", "type": "password", "validation": { "required": true, "minLength": 8 } },
  { "name": "email", "label": "E-mail", "type": "email", "validation": { "required": true } }
]
```

### Comando para Gerar as páginas de CRUD 

Use o seguinte comando para criar as páginas de CRUD 

```bash
npm run generate-crud 
```


## 🎨 Estilização

### Navbar

- Cor de fundo branca com sombra.

### Sidebar

- Estilo alinhado com a navbar (tema claro).
- Ícones exibidos mesmo quando recolhida.
- Labels aparecem ao expandir.

### MainContent

- Fundo em `#f2edf3`.
- Containers de conteúdo com bordas arredondadas e sombra suave.

---

## 🖼 Exemplo Visual

### Desktop (Navbar + Sidebar)

![Exemplo Desktop](#)

### Mobile (Sidebar recolhida)

![Exemplo Mobile](#)

---

## 📄 Licença

Este projeto está licenciado sob a [GPL-3.0 license](LICENSE).

---

## 👨‍💻 Contribuições

Contribuições são bem-vindas! Para sugerir melhorias ou corrigir problemas:

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade:
   ```bash
   git checkout -b feature/minha-nova-funcionalidade
   ```
3. Envie um Pull Request.
