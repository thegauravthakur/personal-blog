import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { Dispatch } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import tw from 'twin.macro';

import { Constant } from '../../../page-components/shared/utils';
import { cross, menuAnimation } from '../../../styles/animation';
import { MobileMenuItem } from './MobileMenuItem';

interface MobileMenu {
    setShowMobileNav: Dispatch<React.SetStateAction<boolean>>;
}

const StyledNav = styled.nav`
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    width: 98%;
    margin: 0 auto;
    color: var(--text-main);
    background-color: var(--background-main);
    border: 2px solid var(--text-main);
    padding: 20px;
    border-radius: 18px;
    z-index: 2;
    animation: 0.5s ${menuAnimation};
`;

const StyledHeader = styled.h1`
    font-size: 18px;
    color: var(--title-main);
`;

const headerWrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledMobileMenu = styled.ul`
    list-style: none;
`;

const colorBackground = tw`dark:(bg-background-800 text-text-dark) bg-gray-50 text-current`;

const MobileMenu = ({ setShowMobileNav }: MobileMenu) => {
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
                    Gaurav's Blog
                </h1>
                <AiOutlineClose
                    css={[
                        tw`p-2.5 rounded-full cursor-pointer transition-colors ease-in duration-300 dark:hocus:(bg-gray-800 outline-none) hocus:(bg-rose-100 outline-none)`,
                        { animation: `ease-out 0.7s ${cross}` },
                    ]}
                    onClick={hideMobileNav}
                    size={40}
                />
            </div>
            <ul css={tw`list-none`}>
                <MobileMenuItem
                    path={'/'}
                    name={'Home'}
                    onClick={hideMobileNav}
                />
                <MobileMenuItem
                    path={'/contact'}
                    name={'Contact'}
                    onClick={hideMobileNav}
                />
                <MobileMenuItem
                    path={Constant.portfolio}
                    name={'Portfolio'}
                    onClick={hideMobileNav}
                />
            </ul>
        </nav>
    );
};

export default MobileMenu;
