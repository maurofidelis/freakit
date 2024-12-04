# Freakit - Front-End React Kit

Este projeto é uma **interface de usuário modular e responsiva**, construída com React.js, para aplicações administrativas. Ele inclui componentes reutilizáveis como **Navbar**, **Sidebar**, e um sistema de **MainContent** que suporta formulários e navegação dinâmica com integração ao **React Router**.

---

## 📂 Estrutura do Projeto

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

### Comando para Gerar Formulário

Use o seguinte comando para criar um novo formulário:

```bash
npm run generate-form -- --fields ./path-to-json.json --endpoint /api/submit
```

Este comando gera um componente de formulário com validações frontend e integração com o backend.

---

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
