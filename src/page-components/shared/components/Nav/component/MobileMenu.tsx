import React, { Dispatch } from 'react';
import { css } from '@emotion/react';
import { menuAnimation } from '../../../../../styles/animation';
import { AiOutlineClose } from 'react-icons/ai';
import { closeIconStyles } from '../Nav.styles';
import styled from '@emotion/styled';
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

const MobileMenu = ({ setShowMobileNav }: MobileMenu) => {
  const hideMobileNav = () => {
    setShowMobileNav(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <StyledNav>
      <div css={headerWrapper}>
        <StyledHeader>Gaurav's Blog</StyledHeader>
        <AiOutlineClose
          css={closeIconStyles}
          onClick={hideMobileNav}
          size={40}
        />
      </div>
      <StyledMobileMenu>
        <MobileMenuItem path={'/'} name={'Home'} onClick={hideMobileNav} />
        <MobileMenuItem
          path={'/contact'}
          name={'Contact'}
          onClick={hideMobileNav}
        />
        <MobileMenuItem
          path={'https://gauravthakur.in'}
          name={'Portfolio'}
          onClick={hideMobileNav}
        />
      </StyledMobileMenu>
    </StyledNav>
  );
};

export default MobileMenu;
