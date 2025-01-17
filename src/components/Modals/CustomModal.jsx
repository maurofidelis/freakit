import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer, ModalHeader, ModalBody, ModalFooter, CloseButton } from './CustomModal.styles';

const CustomModal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </Overlay>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
};

CustomModal.defaultProps = {
  title: '',
  children: null,
  footer: null,
};

export default CustomModal;