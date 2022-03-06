import { css } from '@emotion/react';
import { getYear } from 'date-fns';
import React from 'react';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import tw from 'twin.macro';

import { Constant } from '../../page-components/shared/utils';
import { backgroundStyle, hoverStyles } from '../../styles/GlobalStyles';

const contactIconStyles = css([
    hoverStyles,
    tw`p-2.5 rounded-full my-2.5 outline-none`,
]);

export const Footer = () => (
    <div
        css={[
            backgroundStyle,
            tw`dark:text-text-dark text-gray-600 px-2.5 transition-colors duration-500 ease-out`,
        ]}
    >
        <div css={tw`flex items-center justify-center`}>
            <AiOutlineTwitter
                role='button'
                aria-label='Twitter Icon'
                css={contactIconStyles}
                tabIndex={0}
                onClick={() =>
                    window.open('https://gauravthakur.in/social/twitter')
                }
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        window.open('https://gauravthakur.in/social/twitter');
                    }
                }}
                size={50}
            />
            <AiFillLinkedin
                role='button'
                aria-label='Linkedin Icon'
                css={contactIconStyles}
                tabIndex={0}
                onClick={() =>
                    window.open('https://gauravthakur.in/social/linkedin')
                }
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        window.open('https://gauravthakur.in/social/linkedin');
                    }
                }}
                size={50}
            />
            <MdEmail
                role='button'
                aria-label='Email Icon'
                css={contactIconStyles}
                tabIndex={0}
                onClick={() =>
                    window.open('https://gauravthakur.in/social/email')
                }
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        window.open('https://gauravthakur.in/social/email');
                    }
                }}
                size={50}
            />
        </div>
        <p css={tw`text-center pb-2.5 text-[15px]`}>
            © {getYear(new Date())} Copyright:{' '}
            <a
                css={tw`dark:focus:outline-white focus:outline-black`}
                href={Constant.portfolio}
            >
                <strong>Gaurav Thakur</strong>
            </a>{' '}
            | Made with <span>❤</span> in India
        </p>
    </div>
);
