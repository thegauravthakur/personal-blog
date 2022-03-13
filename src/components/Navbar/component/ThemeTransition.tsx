import { Global } from '@emotion/react';
import React from 'react';
import tw from 'twin.macro';

const ThemeTransition = () => (
    <Global
        styles={[
            { '*': tw`transition-[background-color] duration-500 ease-in-out` },
        ]}
    />
);

export default ThemeTransition;
