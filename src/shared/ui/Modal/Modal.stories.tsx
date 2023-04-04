import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';
import { Button } from '../Button';

export default {
  title: 'ui/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

export function Default() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>
        Show Modal
      </Button>
      <Modal
        show={show}
        onClose={() => setShow(false)}
      >
        <h2>
          Modal Content
        </h2>
      </Modal>
    </>
  );
}
