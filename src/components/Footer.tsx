import React from 'react';
import { css } from '@emotion/react';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { getYear } from 'date-fns';

const Footer = () => {
  return (
    <div
      css={(theme) =>
        css`
          background-color: var(--background-main);
          color: var(--text-main);
          padding: 0 10px;
        `
      }
    >
      <div
        css={({ color }) => css`
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
          & > * {
            padding: 10px;
            border-radius: 50px;
            cursor: pointer;
            transition: background-color 0.5s ease-out;
            margin: 10px 0;
          }
          & > *:hover {
            background-color: var(--information);
          }
        `}
      >
        <AiOutlineTwitter
          onClick={() => window.open('https://gauravthakur.in/social/twitter')}
          size={50}
        />
        <AiFillLinkedin
          onClick={() => window.open('https://gauravthakur.in/social/linkedin')}
          size={50}
        />
        <MdEmail
          onClick={() => window.open('https://gauravthakur.in/social/email')}
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
        © {getYear(new Date())} Copyright: <strong>Gaurav Thakur</strong> | Made
        with{' '}
        <span
          css={(theme) => css`
            color: var(--primary-main);
          `}
        >
          ❤
        </span>{' '}
        in India
      </p>
    </div>
  );
};

export default Footer;
