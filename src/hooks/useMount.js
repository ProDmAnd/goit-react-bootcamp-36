import { useEffect, useRef } from 'react';

const useMount = () => {
  const mount = useRef(false);

  useEffect(() => {
    mount.current = true;
    return () => {
      mount.current = false;
    };
  }, []);

  return mount.current;
};

export default useMount;
