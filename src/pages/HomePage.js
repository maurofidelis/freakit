import React, { useState } from "react";
import SaveButton from "../components/Buttons/SaveButton";
import UpdateButton from "../components/Buttons/UpdateButton";
import TableActionButtons from "../components/Buttons/TableActionButtons";
import CustomTable from "../components/Tables/CustomTable";
import CustomModal from "../components/Modals/CustomModal";

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
  { field: 'email', headerName: 'Email' },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo à página inicial do sistema!</p>
      <SaveButton />
      <UpdateButton />
      <CustomTable 
        columns={columns}
        data={data}
        renderActions={(row) =>(
          <TableActionButtons 
            onView={() => console.log('View', row)}
            onEdit={() => console.log('Edit', row)}
            onDelete={() => console.log('Delete', row)}
          />
        )}     
      />
      <button onClick={() => setModalOpen(true)}>Abrir Modal</button>
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Título do Modal"
        footer={<button onClick={() => setModalOpen(false)}>Fechar</button>}
      >
        <p>Este é o conteúdo do modal.</p>
      </CustomModal>
    </div>
  );
};

export default HomePage;
