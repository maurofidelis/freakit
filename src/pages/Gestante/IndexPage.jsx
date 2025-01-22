
import React, { useEffect, useState } from 'react';
import CustomTable from '../../components/Tables/CustomTable';
import TableActionButtons from '../../components/Buttons/TableActionButtons';
import CustomModal from '../../components/Modals/CustomModal';
import SaveButton from '../../components/Buttons/SaveButton';
import Timeline from '../../components/Timeline/Timeline';
import axios from 'axios'

const GestanteIndexPage = () => {
  const mockData = [
    {
      id: 1,
      cpf: '123.456.789-00',
      nome: 'Maria da Silva',
      cns: '123456789012345',
      municipio_cod_ibge: '3106200',
      historico: [
        {
          id: 1,
          data: '2024-01-15',
          status_gravidez: 'Finalizada',
          status_kit: 'Entregue',
          consultas: [
            { data: '2024-01-20', profissional: 'Alan Turing' },
            { data: '2024-02-10', profissional: 'Ada Lovelace' },
          ],
        },
        {
          id: 2,
          data: '2024-03-05',
          status_gravidez: 'Em Andamento',
          status_kit: 'Não Entregue',
          consultas: [],
        },
      ],
    },
  ];

  const [data, setData] = useState(mockData);
  const [viewItem, setViewItem] = useState(null);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Função para buscar os dados 
  // const fetchData = async (page=1, size=10) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await axios.get('/gestantes/list', {
  //       params: {page, size},
  //     });
  //     setData(response.data); // Atualiza os dados no estado
  //   } catch {
  //     setError('Erro ao carregar os dados')
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(); // Busca os dados para montar o componente
  // }, [])

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
      <SaveButton 
        label={'Adicionar Gestante'}
        onClick={() => (window.location.href = '/gestante/create')}
      />

      <CustomTable
        columns={[{"field":"cpf","headerName":"CPF"},{"field":"nome","headerName":"Nome da Gestante"},{"field":"cns","headerName":"CNS da Gestante"},{"field":"municipio_cod_ibge","headerName":"Município"}]}
        data={data}
        renderActions={(row) => (
          <TableActionButtons
            onView={() => handleView(row)}
            onEdit={() => (window.location.href = `/gestante/edit/${row.id}`)}
            onDelete={() => handleDelete(row)}
          />
        )}
      />
      <CustomModal
        isOpen={isViewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title="Detalhes da Gestante"
      >
        {viewItem && (
          <div>
            <p><strong>CPF:</strong> {viewItem.cpf}</p>
            <p><strong>Nome:</strong> {viewItem.nome}</p>
            <p><strong>CNS:</strong> {viewItem.cns}</p>
            <p><strong>Município (IBGE):</strong> {viewItem.municipio_cod_ibge}</p>

            <Timeline events={viewItem.historico} />
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default GestanteIndexPage;
