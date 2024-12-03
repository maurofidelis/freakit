Inspiração: https://themewagon.github.io/purple-react/dashboard

## TO DO:
- [ ] Hamburguer que acompanha a sidebar -> parcialmente implementado
- [ ] Logo no topo da sidebar, com o nome da aplicação estilizada ao lado 
- [ ] Quando a sidebar for retraída, so aparece a logo e o nome sume 
- [ ] Quando a sidebar for retraída, fica aparecendo os ícones 
- [ ] Adicionar footer

- [ ] Verificar responsividade

# Navbar Component

A **Navbar** é um componente React responsivo e reutilizável, projetado para servir como layout padrão em projetos que utilizam uma interface com sidebar. O componente inclui funcionalidades como um menu hambúrguer, exibição do nome e perfil do usuário, além de suporte para uma logo.

---

## 🚀 **Recursos**
- Menu hambúrguer para expandir/recolher uma sidebar.
- Exibição do nome e função do usuário.
- Foto de perfil do usuário (com imagem padrão).
- Suporte para logotipo da aplicação.
- Totalmente responsiva.

---

## 📂 **Estrutura do Projeto**
```plaintext
src/
  components/
    Navbar/
      Navbar.jsx
      Navbar.styles.js
      Navbar.module.css
  assets/
    logo.png
App.js
README.md
```

---

## 🔧 **Instalação**
### Pré-requisitos
- **Node.js** (versão 16 ou superior recomendada).
- Gerenciador de pacotes (npm ou yarn).

### Passos para Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/navbar-component.git
   cd navbar-component
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

## 🧩 **Uso**

### **Importação e Renderização**
No arquivo onde deseja usar a Navbar (ex.: `App.js`):

```jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import logo from "./assets/logo.png";

function App() {
  const handleSidebarToggle = () => {
    console.log("Sidebar toggle acionado!");
  };

  return (
    <div>
      <Navbar
        logo={logo}
        username="John Doe"
        userRole="Administrator"
        profilePicture="https://via.placeholder.com/40"
        onToggleSidebar={handleSidebarToggle}
      />
    </div>
  );
}

export default App;
```

### **Propriedades (Props)**
| Propriedade       | Tipo        | Obrigatório | Descrição                                                        | Exemplo                        |
|--------------------|-------------|-------------|------------------------------------------------------------------|--------------------------------|
| `logo`            | `string`    | Sim         | Caminho para a imagem da logo.                                   | `"./assets/logo.png"`         |
| `username`        | `string`    | Sim         | Nome do usuário.                                                 | `"John Doe"`                  |
| `userRole`        | `string`    | Sim         | Função ou papel do usuário.                                      | `"Administrator"`             |
| `profilePicture`  | `string`    | Não         | URL ou caminho para a imagem de perfil do usuário.               | `"https://via.placeholder.com/40"` |
| `onToggleSidebar` | `function`  | Sim         | Função chamada ao clicar no botão de menu hambúrguer.            | `() => console.log('Toggle')` |

---

## 🎨 **Estilos**

### **CSS Modules**
O componente utiliza **CSS Modules** para garantir o isolamento dos estilos:
- Arquivo: `Navbar.module.css`

### **Styled Components**
Alguns estilos são definidos com **Styled Components** para facilitar a personalização dinâmica:
- Arquivo: `Navbar.styles.js`

### **Responsividade**
Os elementos são responsivos para diferentes tamanhos de tela:
- A função e o nome do usuário são ocultados em telas menores que 768px.

---

## 🛠 **Manutenção e Extensibilidade**

1. **Adicionar notificações:**
   Insira um ícone de notificação no lado direito, próximo à foto de perfil.
2. **Integrar a Sidebar:**
   Combine o estado `onToggleSidebar` com um componente de Sidebar.
3. **Tema Escuro/Claro:**
   Adicione um botão para alternar entre temas.

---

## 🧪 **Testes**
- Execute a aplicação no navegador.
- Verifique:
  - Responsividade em diferentes tamanhos de tela.
  - Funcionamento do botão de menu.
  - Renderização correta dos dados passados via props.

---

## 🖼 **Exemplo Visual**

### Desktop
![Exemplo Desktop](https://via.placeholder.com/800x400)

### Mobile
![Exemplo Mobile](https://via.placeholder.com/400x800)

---

## 📄 **Licença**
Este componente é licenciado sob a [MIT License](LICENSE).

---

## 👨‍💻 **Contribuições**
Contribuições são bem-vindas! Para sugerir melhorias:
1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Envie um Pull Request.


Segue a documentação para a **Sidebar** no formato de um arquivo `README.md`. O conteúdo cobre todos os aspectos essenciais, incluindo uso, configuração e personalização.

---

# Sidebar Component

A **Sidebar** é um componente React responsivo e reutilizável, projetado para ser usado junto com a **Navbar** ou de forma independente. O componente suporta links com ícones, exibição responsiva e fechamento automático.

---

## 🚀 **Recursos**
- **Menu Dinâmico:** Links com suporte a ícones configuráveis.
- **Responsividade:** Desliza de forma suave na tela.
- **Fechamento Automático:** 
  - Pelo botão "✖".
  - Clicando fora da sidebar (overlay).
- **Personalização:** Estilização modular e suporte a diferentes temas.

---

## 📂 **Estrutura do Projeto**

```plaintext
src/
  components/
    Sidebar/
      Sidebar.jsx
      Sidebar.module.css
  App.js
```

---

## 🔧 **Instalação**

### Pré-requisitos
- Projeto React configurado.
- Dependências necessárias:
  ```bash
  npm install react-icons prop-types
  ```

### Passos de Configuração
1. Adicione o componente **Sidebar** no seu projeto.
2. Certifique-se de que o arquivo `Sidebar.module.css` está configurado.

---

## 🧩 **Uso**

### Exemplo Básico

#### Código no `App.js`:
```jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "/", icon: <FaHome /> },
    { label: "Perfil", link: "/profile", icon: <FaUser /> },
    { label: "Configurações", link: "/settings", icon: <FaCog /> },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div>
      <button onClick={toggleSidebar}>Abrir Sidebar</button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} menuItems={menuItems} />
    </div>
  );
};

export default App;
```

### Propriedades (Props)

| Propriedade  | Tipo        | Obrigatório | Descrição                                                        | Exemplo                        |
|--------------|-------------|-------------|------------------------------------------------------------------|--------------------------------|
| `isOpen`     | `bool`      | Sim         | Define se a sidebar está aberta (`true`) ou fechada (`false`).   | `true`                        |
| `onClose`    | `function`  | Sim         | Função chamada ao fechar a sidebar (botão ou overlay).           | `() => setIsSidebarOpen(false)` |
| `menuItems`  | `array`     | Sim         | Array de objetos contendo os links, ícones e rótulos.            | `[{ label: "Home", link: "/", icon: <FaHome /> }]` |

---

## 🎨 **Estilização**

### CSS Modules
Os estilos são isolados usando CSS Modules. Modifique o arquivo `Sidebar.module.css` para personalizar a aparência:

```css
.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #2c3e50;
  color: white;
  transition: left 0.3s ease;
  z-index: 1001;
}

.sidebar.open {
  left: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.closeButton {
  align-self: flex-end;
  margin: 10px;
  background: none;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
}

.menu {
  list-style: none;
  padding: 20px;
  margin: 0;
}

.menuItem {
  margin-bottom: 15px;
}

.menuLink {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.menuLink:hover {
  color: #1abc9c;
}

.icon {
  margin-right: 10px;
  font-size: 20px;
}
```

---

## 🛠 **Customização**

### 1. **Adicionar Notificações**
Adicione notificações ao menu ajustando o `menuItems`:
```jsx
const menuItems = [
  { label: "Home", link: "/", icon: <FaHome />, notifications: 3 },
];
```

### 2. **Alterar o Tema**
Adicione suporte a temas escuros ou claros modificando a classe `sidebar`:
```css
.sidebar.dark {
  background-color: #1c2833;
}
.sidebar.light {
  background-color: #f4f6f7;
}
```

### 3. **Menu Dropdown**
Expanda o menu adicionando submenus:
```jsx
const menuItems = [
  {
    label: "Configurações",
    link: "/settings",
    icon: <FaCog />,
    submenu: [
      { label: "Opção 1", link: "/settings/option1" },
      { label: "Opção 2", link: "/settings/option2" },
    ],
  },
];
```

---

## 📄 **Licença**
Este componente está licenciado sob a [MIT License](LICENSE).

---

## 👨‍💻 **Contribuições**

Contribuições são bem-vindas! Para sugerir melhorias ou correções:
1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade:
   ```bash
   git checkout -b feature/minha-nova-funcionalidade
   ```
3. Envie um Pull Request.
