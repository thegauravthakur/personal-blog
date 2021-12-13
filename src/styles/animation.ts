import { keyframes } from '@emotion/react';

export const menuAnimation = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0.7;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
