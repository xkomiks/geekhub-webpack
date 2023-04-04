import { useEffect, useState } from 'react';
import { ANIMATION_TIME } from './Modal';

export const useMount = ({ show }: { show: boolean }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (show && !mounted) {
      setMounted(true);
    } else if (!show && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [show]);

  return {
    mounted
  };
};
