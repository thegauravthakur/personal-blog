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

export const sun = keyframes`
   0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const moon = keyframes`
  0% {
    transform: rotate(50deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const cross = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const headerIcon = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const fadeAnimation = keyframes`
    0% {
      opacity: 0;
    }
       100% {
      opacity: 1;
    }
`;
