import { css } from '@emotion/react';
import React, { useContext, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { BiCheck } from 'react-icons/bi';
import {
    FaCopy,
    FaFacebookF,
    FaHeart,
    FaTwitter,
    FaWhatsapp,
} from 'react-icons/fa';
import tw, { theme as baseTheme } from 'twin.macro';

import { fadeAnimation } from '../../styles/animation';
import { ThemeContext } from '../../styles/theme';

const platformBackgroundColor = {
    facebook: tw`bg-facebook`,
    twitter: tw`bg-twitter`,
    whatsapp: tw`bg-whatsapp`,
};

const copyIconStyles = css({ animation: `ease-in ${fadeAnimation} 0.3s` });

export const SocialShare = ({ title }: { title: string }) => {
    const [copySuccess, setCopySuccess] = useState(false);
    const [url, setUrl] = useState('');
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        setUrl(window.location.href);
    }, []);
    const shareItemStyles = css([
        tw`py-2 cursor-pointer rounded-md border-0 flex justify-center items-center text-white outline-none`,
        {
            '&:focus': {
                outlineOffset: '3px',
                outlineColor:
                    theme === 'light'
                        ? baseTheme`colors.rose.600`
                        : baseTheme`colors.blue.600`,
            },
        },
    ]);
    return (
        <div>
            <h3 css={tw`flex items-center gap-2.5`}>
                Sharing is Caring{' '}
                <FaHeart
                    color={
                        theme === 'dark'
                            ? baseTheme`colors.blue.600`
                            : baseTheme`colors.rose.600`
                    }
                />
            </h3>
            <div css={tw`grid grid-cols-4 gap-1 sm:gap-2.5 max-w-xl`}>
                <button
                    css={[shareItemStyles, platformBackgroundColor.facebook]}
                    onClick={() => {
                        window.open(
                            `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                            '_blank',
                            'location=yes,  scrollbars=yes, status=yes, width=900, height=500 '
                        );
                    }}
                >
                    <FaFacebookF />
                </button>
                <button
                    css={[shareItemStyles, platformBackgroundColor.twitter]}
                    onClick={() => {
                        window.open(
                            `https://twitter.com/intent/tweet?text=${title} via @gauravcodes&url=${window.location.href}`,
                            '_blank',
                            'location=yes,  scrollbars=yes, status=yes, width=900, height=500 '
                        );
                    }}
                >
                    <FaTwitter />
                </button>
                <button
                    css={[shareItemStyles, platformBackgroundColor.whatsapp]}
                    onClick={() => {
                        window.open(
                            `https://api.whatsapp.com/send?text=${window.location.href}`,
                            '_blank',
                            'location=yes,  scrollbars=yes, status=yes, width=900, height=500 '
                        );
                    }}
                >
                    <FaWhatsapp />
                </button>
                <CopyToClipboard
                    text={url}
                    onCopy={() => {
                        setCopySuccess(true);
                        setTimeout(() => {
                            setCopySuccess(false);
                        }, 2000);
                    }}
                >
                    <button
                        css={[shareItemStyles, tw`bg-gray-700`]}
                        title='Copy!'
                    >
                        {copySuccess ? (
                            <BiCheck css={copyIconStyles} />
                        ) : (
                            <FaCopy css={copyIconStyles} />
                        )}
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
};
