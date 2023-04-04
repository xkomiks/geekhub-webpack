import { LoginForm } from 'modules/AuthByEmail/ui/LoginForm/LoginForm';
import { Modal, ModalProps } from 'shared/ui/Modal';

interface LoginModalProps extends Pick<ModalProps, 'show' | 'onClose'> {
}

export const LoginModal = ({
  show,
  onClose
}: LoginModalProps) => {
  return (
    <Modal show={show} onClose={onClose}>
      <LoginForm onSuccessfulLogin={onClose}/>
    </Modal>
  );
};
