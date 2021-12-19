import { css } from '@emotion/react';
import { cross, moon, sun } from '../../../../styles/animation';

export const ToolboxWrapper = css`
  height: 60px;
  @media (max-width: 740px) {
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;

export const closeIconStyles = css`
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
  animation: ease-out 0.7s ${cross};

  &:hover {
    background-color: var(--information);
  }
`;

export const burgerMenuStyles = css`
  display: none;
  @media (max-width: 740px) {
    display: inline-block;
    color: var(--text-main);
    align-self: center;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease-in;
    &:hover {
      background-color: var(--information);
    }
  }
`;

export const mobileSunStyles = css`
  @media (min-width: 740px) {
    display: none;
  }
  color: var(--text-main);
  align-self: center;
  animation: ease-out 0.3s ${sun};
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: var(--information);
  }
`;

export const mobileMoonStyles = css`
  @media (min-width: 740px) {
    display: none;
  }
  color: var(--text-main);
  align-self: center;
  padding: 10px;
  border-radius: 50%;
  animation: ease-out 0.3s ${moon};
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: var(--information);
  }
`;
