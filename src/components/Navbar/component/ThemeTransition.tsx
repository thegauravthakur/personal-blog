import React from 'react';
import { Global } from '@emotion/react';
import tw from 'twin.macro';

const ThemeTransition = () => {
  return (
    <Global
      styles={[
        { '*': tw`transition-[background-color] duration-500 ease-in-out` },
      ]}
    />
  );
};

export default ThemeTransition;
