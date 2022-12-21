/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

const useModal = () => {
  const [open, setOpen] = useState(false);

  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const toggle = () => setOpen(prev => !prev);

  return [open, show, close, toggle];
};

export default useModal;