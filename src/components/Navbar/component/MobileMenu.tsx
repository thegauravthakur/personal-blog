import { css } from '@emotion/react';
import React, { Dispatch } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import tw from 'twin.macro';

import { cross, menuAnimation } from '../../../styles/animation';
import { MobileMenuItem } from './MobileMenuItem';

interface MobileMenuProps {
    setShowMobileNav: Dispatch<React.SetStateAction<boolean>>;
}

const headerWrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const colorBackground = tw`dark:(bg-background-800 text-text-dark) bg-gray-50 text-current`;

const MobileMenu = ({ setShowMobileNav }: MobileMenuProps) => {
    const hideMobileNav = () => {
        setShowMobileNav(false);
        document.body.style.overflow = 'auto';
    };
    return (
        <nav
            css={[
                colorBackground,
                tw`fixed top-2.5 left-0 right-0 width[98%] mx-auto border-2 border-solid border-gray-400 p-5 rounded-2xl z-10`,
                { animation: `0.5s ${menuAnimation}` },
            ]}
        >
            <div css={headerWrapper}>
                <h1 css={tw`text-lg text-current dark:text-text-dark`}>
                    Gaurav&apos;s Blog
                </h1>
                <AiOutlineClose
                    css={[
                        tw`p-2.5 rounded-full cursor-pointer transition-colors ease-in duration-300 dark:hocus:(bg-gray-800 outline-none) hocus:(bg-rose-100 outline-none)`,
                        { animation: `ease-out 0.7s ${cross}` },
                    ]}
                    size={40}
                    onClick={hideMobileNav}
                />
            </div>
            <ul css={tw`list-none`}>
                <MobileMenuItem name='Home' path='/' onClick={hideMobileNav} />
                <MobileMenuItem
                    name='Contact'
                    path='/contact'
                    onClick={hideMobileNav}
                />
                <MobileMenuItem
                    name='Portfolio'
                    path='https://gauravthakur.in'
                    onClick={hideMobileNav}
                />
            </ul>
        </nav>
    );
};

export default MobileMenu;
