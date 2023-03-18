import { ReactNode, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Portal } from 'ui/Portal';

import { useMount } from './useMount';

import styles from './Modal.module.scss';

export const ANIMATION_TIME = 1000;

export interface ModalProps {
  onClose: () => void;
  show?: boolean;
  children: ReactNode;
}

export const Modal = ({ show, onClose, children }: ModalProps) => {
  const { mounted } = useMount({ show });

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <Layout onClose={onClose} show={show}>
        {children}
      </Layout>
    </Portal>
  );
};


const overlayAnimation = {
  enter: styles.overlayEnter,
  enterActive: styles.overlayEnterActive,
  exit: styles.overlayExit,
  exitActive: styles.overlayExitActive
};

const contentAnimation = {
  enter: styles.contentEnter,
  enterActive: styles.contentEnterActive,
  exit: styles.contentExit,
  exitActive: styles.contentExitActive
};

const Layout = ({
  onClose,
  children,
  show
}: ModalProps) => {
  const overlayRef = useRef();
  const contentRef = useRef();

  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(show);
  }, [show]);

  return (
    <div className={styles.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div ref={overlayRef} className={styles.overlay} onClick={onClose}/>
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
