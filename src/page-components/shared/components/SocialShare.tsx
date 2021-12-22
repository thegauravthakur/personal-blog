import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import {
  FaCopy,
  FaFacebookF,
  FaHeart,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import { BiCheck } from 'react-icons/bi';
import { fadeAnimation } from '../../../styles/animation';

const SocialShare = ({ title }: { title: string }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <div>
      <h3
        css={css`
          display: flex;
          align-items: center;
          gap: 10px;
        `}
      >
        Sharing is Caring <FaHeart />
      </h3>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 133px);
          gap: 20px;
          @media (max-width: 630px) {
            gap: 5px;
          }
          @media (max-width: 600px) {
            grid-template-columns: repeat(4, 1fr);
          }
        `}
      >
        <button
          onClick={() => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
              '_blank',
              'location=yes,  scrollbars=yes, status=yes, width=900, height=500 '
            );
          }}
          css={css`
            padding: 8px 0;
            cursor: pointer;
            border-radius: 5px;
            background-color: #4267b2;
            color: white;
            border: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: 0;
            &:focus {
              outline: 2px solid var(--primary-main);
              outline-offset: 3px;
            }
          `}
        >
          <FaFacebookF />
        </button>
        <button
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?text=${title} via @gauravcodes&url=${window.location.href}`,
              '_blank',
              'location=yes,  scrollbars=yes, status=yes, width=900, height=500 '
            );
          }}
          css={css`
            padding: 8px 0;
            color: white;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
            background-color: #1da1f2;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: 0;
            &:focus {
              outline: 2px solid var(--primary-main);
              outline-offset: 3px;
            }
          `}
        >
          <FaTwitter />
        </button>
        <button
          onClick={() => {
            window.open(
              `https://api.whatsapp.com/send?text=${window.location.href}`,
              '_blank',
              'location=yes,  scrollbars=yes, status=yes, width=900, height=500 '
            );
          }}
          css={css`
            padding: 8px 0;
            border-radius: 5px;
            background-color: #128c7e;
            color: white;
            border: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            outline: 0;
            &:focus {
              outline: 2px solid var(--primary-main);
              outline-offset: 3px;
            }
          `}
        >
          <FaWhatsapp />
        </button>
        <CopyToClipboard
          onCopy={() => {
            setCopySuccess(true);
            setTimeout(() => {
              setCopySuccess(false);
            }, 2000);
          }}
          text={url}
        >
          <button
            title='Copy!'
            css={css`
              padding: 8px 0;
              border-radius: 5px;
              background-color: rgb(50, 59, 67);
              color: white;
              border: 0;
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              outline: 0;
              &:focus {
                outline: 2px solid var(--primary-main);
                outline-offset: 3px;
              }
            `}
          >
            {copySuccess ? (
              <BiCheck
                css={css`
                  animation: ease-in ${fadeAnimation} 0.3s;
                `}
              />
            ) : (
              <FaCopy
                css={css`
                  animation: ease-in ${fadeAnimation} 0.3s;
                `}
              />
            )}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default SocialShare;
