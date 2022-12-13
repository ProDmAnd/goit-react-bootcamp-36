import { css } from '@emotion/react';

const EmotionButton = ({ children }) => {
  return (
    <button
      css={css`
        background-color: red;
        border: 2px solid green;
      `}
    >
      {children}
    </button>
  );
};

export default EmotionButton;
