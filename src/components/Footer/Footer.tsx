import { css } from '@emotion/react';
import { getYear } from 'date-fns';
import React from 'react';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import tw from 'twin.macro';

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
                aria-label='Twitter Icon'
                css={contactIconStyles}
                role='button'
                size={50}
                tabIndex={0}
                onClick={() => window.open('https://gauravthakur.in/social/twitter')
                }
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        window.open('https://gauravthakur.in/social/twitter');
                    }
                }}
            />
            <AiFillLinkedin
                aria-label='Linkedin Icon'
                css={contactIconStyles}
                role='button'
                size={50}
                tabIndex={0}
                onClick={() => window.open('https://gauravthakur.in/social/linkedin')
                }
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        window.open('https://gauravthakur.in/social/linkedin');
                    }
                }}
            />
            <MdEmail
                aria-label='Email Icon'
                css={contactIconStyles}
                role='button'
                size={50}
                tabIndex={0}
                onClick={() => window.open('https://gauravthakur.in/social/email')
                }
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        window.open('https://gauravthakur.in/social/email');
                    }
                }}
            />
        </div>
        <p css={tw`text-center pb-2.5 text-[15px]`}>
            © {getYear(new Date())} Copyright:{' '}
            <a
                css={tw`dark:focus:outline-white focus:outline-black`}
                href='https://gauravthakur.in'
            >
                <strong>Gaurav Thakur</strong>
            </a>{' '}
            | Made with <span>❤</span> in India
        </p>
    </div>
);
