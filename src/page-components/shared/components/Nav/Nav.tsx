import { css } from '@emotion/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import useLayoutEffect from '../../../../hooks/useIsomorphicLayoutEffect';
import Link from 'next/link';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { sun, moon } from '../../../../styles/animation';
import { RiMoonFill } from 'react-icons/ri';
import { ThemeContext } from '../../../../styles/theme';
import Logo from '../Logo';
import ThemeTransition from './component/ThemeTransition';
import {
  StyledHeader,
  StyledNav,
  StyledToolbox,
  ToolboxItem,
  ToolBoxItemLink,
} from './component/StyledComponents';
import {
  burgerMenuStyles,
  mobileMoonStyles,
  mobileSunStyles,
  ToolboxWrapper,
} from './Nav.styles';
import MobileMenu from './component/MobileMenu';
import { Constant } from '../../utils';
import tw from 'twin.macro';

export function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [animate, setAnimate] = useState(false);

  const onThemeChange = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = updatedTheme;
    if (updatedTheme === 'light')
      document.documentElement.classList.remove('dark');
    else document.documentElement.classList.add('dark');
    localStorage.setItem('theme', updatedTheme);
    setTheme(updatedTheme);
  };
  useLayoutEffect(() => {
    const { theme } = document.body.dataset;
    if (theme) setTheme(theme as 'light' | 'dark');
  }, [setTheme]);

  useEffect(() => {
    setAnimate(true);
  }, []);
  const focusStyles = css({
    '&:focus-within': tw`outline-width[3px] outline-style[dotted] outline-offset[3px] outline-color[var(--primary-main)]`,
  });

  return (
    <header>
      {animate && <ThemeTransition />}
      <StyledNav>
        <h1>
          <Link href='/' passHref>
            <a
              css={[
                tw`flex items-center gap-x-2 no-underline text-xl text-rose-700 dark:text-gray-300 transition-colors ease-in duration-100`,
                focusStyles,
              ]}
            >
              <Logo height={22} width={22} />
              Gaurav's Blog
            </a>
          </Link>
        </h1>
        <div css={ToolboxWrapper}>
          <StyledToolbox>
            <ToolboxItem>
              <Link href={'/'} passHref>
                <ToolBoxItemLink>Home</ToolBoxItemLink>
              </Link>
            </ToolboxItem>
            <ToolboxItem>
              <Link href={Constant.portfolio} passHref>
                <ToolBoxItemLink>Portfolio</ToolBoxItemLink>
              </Link>
            </ToolboxItem>
            <ToolboxItem
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onThemeChange();
                }
              }}
              tabIndex={0}
              css={css`
                column-gap: 10px;
              `}
              onClick={onThemeChange}
            >
              Theme
              {theme === 'dark' ? (
                <BsFillMoonFill
                  css={css`
                    animation: ease-out 0.3s ${moon};
                  `}
                />
              ) : (
                <BsSunFill
                  css={css`
                    animation: ease-out 0.3s ${sun};
                  `}
                  size={20}
                />
              )}
            </ToolboxItem>
          </StyledToolbox>
          {!showMobileNav && (
            <AiOutlineMenu
              onClick={() => {
                setShowMobileNav(!showMobileNav);
                document.body.style.overflow = 'hidden';
              }}
              size={38}
              css={burgerMenuStyles}
            />
          )}
          {theme === 'dark' ? (
            <RiMoonFill
              onClick={onThemeChange}
              size={40}
              css={mobileMoonStyles}
            />
          ) : (
            <BsSunFill
              size={40}
              onClick={onThemeChange}
              css={mobileSunStyles}
            />
          )}
        </div>
      </StyledNav>
      {showMobileNav && <MobileMenu setShowMobileNav={setShowMobileNav} />}
    </header>
  );
}
