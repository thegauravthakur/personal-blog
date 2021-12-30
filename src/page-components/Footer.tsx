import React from 'react';
import { css } from '@emotion/react';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { getYear } from 'date-fns';
import tw from 'twin.macro';
import { backgroundStyle, hoverStyles } from '../styles/GlobalStyles';
import { Constant } from './shared/utils';

const contactIconStyles = css([
  hoverStyles,
  tw`p-2.5 rounded-full my-2.5 outline-none`,
]);

const Footer = () => {
  return (
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
          onClick={() => window.open('https://gauravthakur.in/social/twitter')}
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
          onClick={() => window.open('https://gauravthakur.in/social/linkedin')}
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
          onClick={() => window.open('https://gauravthakur.in/social/email')}
          onKeyDown={({ key }) => {
            if (key === 'Enter') {
              window.open('https://gauravthakur.in/social/email');
            }
          }}
          size={50}
        />
      </div>
      <p
        css={css`
          text-align: center;
          padding-bottom: 10px;
          font-size: 15px;
        `}
      >
        © {getYear(new Date())} Copyright:{' '}
        <a href={Constant.portfolio}>
          <strong>Gaurav Thakur</strong>
        </a>{' '}
        | Made with <span>❤</span> in India
      </p>
    </div>
  );
};

export default Footer;
