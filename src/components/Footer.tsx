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
        <AiOutlineTwitter size={50} />
        <AiFillLinkedin size={50} />
        <MdEmail size={50} />
      </div>
      <p
        css={css`
          text-align: center;
          padding-bottom: 10px;
          font-size: 15px;
        `}
      >
        © {getYear(new Date())} Copyright: Gaurav Thakur | Made with{' '}
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
