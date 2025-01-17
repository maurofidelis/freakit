
import React, { useState } from 'react';
import CustomTable from '../../components/Tables/CustomTable';
import TableActionButtons from '../../components/Buttons/TableActionButtons';
import CustomModal from '../../components/Modals/CustomModal';

const UserIndexPage = () => {
  const [data, setData] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [isViewModalOpen, setViewModalOpen] = useState(false);

  const handleView = (item) => {
    setViewItem(item);
    setViewModalOpen(true);
  };

  const handleDelete = (item) => {
    if (window.confirm('Deseja deletar este registro?')) {
      fetch('/api/user/delete', {
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
      <button onClick={() => (window.location.href = '/user/create')}>
        Criar User
      </button>
      <CustomTable
        columns={[{"field":"id","headerName":"ID"},{"field":"name","headerName":"Nome"},{"field":"email","headerName":"E-mail"}]}
        data={data}
        renderActions={(row) => (
          <TableActionButtons
            onView={() => handleView(row)}
            onEdit={() => (window.location.href = `/user/edit/${row.id}`)}
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
            <p><strong>id:</strong> {viewItem.id}</p>
            <p><strong>name:</strong> {viewItem.name}</p>
            <p><strong>email:</strong> {viewItem.email}</p>
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default UserIndexPage;
