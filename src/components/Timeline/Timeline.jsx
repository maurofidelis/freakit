import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TimelineContainer, TimelineItem, TimelinePoint, DetailButton, ConsultationList, EntregaButton } from './Timeline.styles';

const Timeline = ({ events }) => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedEvent((prev) => (prev === id ? null : id));
  };

  return (
    <TimelineContainer>
      <h4>Histórico de Gestações</h4>
      {events && events.length > 0 ? (
        <ul>
          {events.map((evento, index) => (
            <TimelineItem key={index}>
              <TimelinePoint />
              <div>
                <p><strong>Data:</strong> {evento.data}</p>
                <p><strong>Status Gravidez:</strong> {evento.status_gravidez}</p>
                <p><strong>Status Entrega de Kit:</strong> {evento.status_kit}</p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <DetailButton onClick={() => toggleAccordion(evento.id)}>
                      {expandedEvent === evento.id ? 'Ocultar Detalhes' : 'Ver Detalhes'}
                  </DetailButton>
                  <EntregaButton onClick={() => onRegisterKit(evento.id)}>
                    Registrar Entrega de Kit
                  </EntregaButton>
                </div>
                {/* Histórico de consultas (acordeão) */}
                {expandedEvent === evento.id && (
                  <ConsultationList>
                    <h5>Histórico de Consultas:</h5>
                    {evento.consultas && evento.consultas.length > 0 ? (
                      evento.consultas.map((consulta, idx) => (
                        <div key={idx}>
                          <p><strong>Data:</strong> {consulta.data}</p>
                          <p><strong>Profissional:</strong> {consulta.descricao}</p>
                        </div>
                      ))
                    ) : (
                      <p>Sem consultas registradas.</p>
                    )}
                  </ConsultationList>
                )}
              </div>
            </TimelineItem>
          ))}
        </ul>
      ) : (
        <p>Não há histórico de gestações registrado.</p>
      )}
    </TimelineContainer>
  );
};

// Definir os tipos de props
Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.string.isRequired,
      status_gravidez: PropTypes.string.isRequired,
      status_kit: PropTypes.string.isRequired,
      consultas: PropTypes.arrayOf(
        PropTypes.shape({
          data: PropTypes.string.isRequired,
          profissional: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  onRegisterKit: PropTypes.func.isRequired,
};

export default Timeline;
