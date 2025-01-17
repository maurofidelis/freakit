const fs = require('fs');
const path = require('path');

const formatWithTrailingComma = (obj) => {
  return JSON.stringify(obj, null, 2)
    .split('\n')
    .map((line, index, arr) => {
      if (index < arr.length - 2 && line.trim().endsWith('"')) {
        return `${line},`;
      }
      return line;
    })
    .join('\n');
};


const generateCRUD = (jsonPath) => {
  const rawData = fs.readFileSync(jsonPath);
  const { entityName, fields, routes } = JSON.parse(rawData);

  const folderPath = path.join(__dirname, `../src/pages/${entityName}`);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

  const fieldHeaders = fields.map(({ field, headerName }) => ({ field, headerName }));
  const fieldNames = fields.map(({ field }) => field);

  // Generate IndexPage
  const indexPageContent = `
import React, { useState } from 'react';
import CustomTable from '../../components/Tables/CustomTable';
import TableActionButtons from '../../components/Buttons/TableActionButtons';
import CustomModal from '../../components/Modals/CustomModal';

const ${entityName}IndexPage = () => {
  const [data, setData] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [isViewModalOpen, setViewModalOpen] = useState(false);

  const handleView = (item) => {
    setViewItem(item);
    setViewModalOpen(true);
  };

  const handleDelete = (item) => {
    if (window.confirm('Deseja deletar este registro?')) {
      fetch('${routes.delete}', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id }),
      }).then(() => {
        setData(data.filter((row) => row.id !== item.id));
      });
    }
  };

  return (
    <div>
      <button onClick={() => (window.location.href = '/${entityName.toLowerCase()}/create')}>
        Criar ${entityName}
      </button>
      <CustomTable
        columns={${JSON.stringify(fieldHeaders)}}
        data={data}
        renderActions={(row) => (
          <TableActionButtons
            onView={() => handleView(row)}
            onEdit={() => (window.location.href = \`/${entityName.toLowerCase()}/edit/\${row.id}\`)}
            onDelete={() => handleDelete(row)}
          />
        )}
      />
      <CustomModal
        isOpen={isViewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title="Detalhes"
      >
        {viewItem && (
          <div>
            ${fieldNames.map((field) => `<p><strong>${field}:</strong> {viewItem.${field}}</p>`).join('\n            ')}
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default ${entityName}IndexPage;
`;
  fs.writeFileSync(path.join(folderPath, 'IndexPage.jsx'), indexPageContent);

  // Generate CreatePage
  const initialState = fields.reduce((acc, field) => ({ ...acc, [field.field]: '' }), {});
  const formattedInitialState = formatWithTrailingComma(initialState)
  const createPageContent = `
import React, { useState } from 'react';
import SaveButton from '../../components/Buttons/SaveButton';

const ${entityName}CreatePage = () => {
  const [formData, setFormData] = useState(${JSON.stringify(formattedInitialState, null, 2)});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    fetch('${routes.create}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => {
      alert('Registro criado com sucesso!');
      window.location.href = '/${entityName.toLowerCase()}';
    });
  };

  return (
    <div>
      <h1>Criar ${entityName}</h1>
      ${fields
        .map(
          (field) => `
      <label>
        ${field.headerName}
        <input name="${field.field}" onChange={handleChange} value={formData.${field.field}} />
      </label>`
        )
        .join('\n')}
      <SaveButton label="Salvar" onClick={handleSubmit} />
    </div>
  );
};

export default ${entityName}CreatePage;
`;
  fs.writeFileSync(path.join(folderPath, 'CreatePage.jsx'), createPageContent);

  // Generate EditPage
  const editPageContent = `
import React, { useState, useEffect } from 'react';
import UpdateButton from '../../components/Buttons/UpdateButton';

const ${entityName}EditPage = ({ match }) => {
  const [formData, setFormData] = useState(${JSON.stringify(formattedInitialState, null, 2)});

  useEffect(() => {
    fetch(\`${routes.update}/\${match.params.id}\`)
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, [match.params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    fetch('${routes.update}', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => {
      alert('Registro atualizado com sucesso!');
      window.location.href = '/${entityName.toLowerCase()}';
    });
  };

  return (
    <div>
      <h1>Editar ${entityName}</h1>
      ${fields
        .map(
          (field) => `
      <label>
        ${field.headerName}
        <input name="${field.field}" onChange={handleChange} value={formData.${field.field}} />
      </label>`
        )
        .join('\n')}
      <UpdateButton label="Editar" onClick={handleSubmit} />
    </div>
  );
};

export default ${entityName}EditPage;
`;
  fs.writeFileSync(path.join(folderPath, 'EditPage.jsx'), editPageContent);

  // Add routes to App.js
  const appFilePath = path.resolve(__dirname, '../src/App.js');
  let appContent = fs.readFileSync(appFilePath, 'utf-8');

  const importStatements = `
import ${entityName}IndexPage from "./pages/${entityName}/IndexPage";
import ${entityName}CreatePage from "./pages/${entityName}/CreatePage";
import ${entityName}EditPage from "./pages/${entityName}/EditPage";
`;

  const routeStatements = `
            <Route path="/${entityName.toLowerCase()}" element={<${entityName}IndexPage />} />
            <Route path="/${entityName.toLowerCase()}/create" element={<${entityName}CreatePage />} />
            <Route path="/${entityName.toLowerCase()}/edit/:id" element={<${entityName}EditPage />} />
`;

  if (!appContent.includes(importStatements)) {
    appContent = appContent.replace('// Páginas', `// Páginas${importStatements}`);
  }

  if (!appContent.includes(routeStatements)) {
    appContent = appContent.replace('<Routes>', `<Routes>${routeStatements}`);
  }

  fs.writeFileSync(appFilePath, appContent);
};

generateCRUD(process.argv[2]);
