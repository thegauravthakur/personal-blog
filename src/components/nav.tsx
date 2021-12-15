import { css } from '@emotion/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useContext, useState } from 'react';
import useLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThemeContext } from '../styles/theme';
import { HiMoon } from 'react-icons/hi';
import { BsFillMoonFill, BsFillSunFill, BsSunFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { menuAnimation } from '../styles/animation';
import useDarkMode from 'use-dark-mode';
export function Nav() {
  const { toggle, value } = useDarkMode();
  const [darkMode, setDarkMode] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const onThemeChange = () => {
    toggle();
  };
  useLayoutEffect(() => {
    setDarkMode(value);
  }, [value]);

  return (
    <header>
      <nav
        css={(theme) => css`
          color: white;
          background-color: var(--background-main);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 60px;
          @media (max-width: 930px) {
            padding: 0 50px;
          }
          @media (max-width: 830px) {
            padding: 0 40px;
          }
          @media (max-width: 780px) {
            padding: 0 20px;
          }
        `}
      >
        <h1
          css={(theme) => css`
            font-size: 20px;
          `}
        >
          <Link href='/'>
            <a
              tabIndex={0}
              css={(theme) => css`
                transition: color 0.2s ease-out;
                color: var(--title-main);
                cursor: pointer;
              `}
            >
              Gaurav's Blog
            </a>
          </Link>
        </h1>
        <div
          css={css`
            height: 60px;
            @media (max-width: 740px) {
              display: flex;
              justify-content: center;
              align-self: center;
              column-gap: 20px;
            }
          `}
        >
          <ul
            css={(theme) => css`
              list-style: none;
              height: 100%;
              color: var(--text-main);
              display: flex;
              align-items: center;
              @media (max-width: 740px) {
                display: none;
              }
              & > li {
                min-width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                cursor: pointer;
                text-align: center;
                border-bottom: 5px solid transparent;
                border-top: 5px solid transparent;
                transition: border-bottom-color 0.2s ease-in;
                &:hover {
                  border-bottom: 5px solid var(--link-main);
                }
              }
            `}
          >
            <li>Home</li>
            <li>Portfolio</li>
            <li
              css={css`
                column-gap: 10px;
              `}
              onClick={onThemeChange}
            >
              Theme
              {darkMode ? (
                <BsFillMoonFill css={css``} />
              ) : (
                <BsSunFill size={20} />
              )}
            </li>
          </ul>
          {!showMobileNav ? (
            <AiOutlineMenu
              onClick={() => setShowMobileNav(!showMobileNav)}
              css={(theme) => css`
                display: none;
                @media (max-width: 740px) {
                  display: inline-block;
                  color: var(--text-main);
                  align-self: center;
                }
              `}
            />
          ) : (
            <AiOutlineClose
              onClick={() => setShowMobileNav(!showMobileNav)}
              css={(theme) => css`
                display: none;
                @media (max-width: 740px) {
                  display: inline-block;
                  color: var(--text-main);
                  align-self: center;
                  //margin: 20px 0;
                }
              `}
            />
          )}
          {darkMode ? (
            <BsFillMoonFill
              onClick={onThemeChange}
              css={(theme) =>
                css`
                  @media (min-width: 740px) {
                    display: none;
                  }
                  color: var(--text-main);
                  align-self: center;
                `
              }
            />
          ) : (
            <BsSunFill
              size={20}
              onClick={onThemeChange}
              css={(theme) =>
                css`
                  @media (min-width: 740px) {
                    display: none;
                  }
                  color: var(--text-main);
                  align-self: center;
                `
              }
            />
          )}
        </div>
      </nav>
      {showMobileNav && (
        <nav
          css={(theme) => css`
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
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <h1
              css={css`
                font-size: 18px;
              `}
            >
              Gaurav's Blog
            </h1>
            <AiOutlineClose onClick={() => setShowMobileNav(false)} size={22} />
          </div>
          <ul
            css={css`
              list-style: none;
              & > li {
                display: flex;
                align-items: center;
                padding: 6px 0;
              }
            `}
          >
            <li>
              <MdOutlineKeyboardArrowRight size={22} />
              Home
            </li>
            <li>
              <MdOutlineKeyboardArrowRight size={22} />
              Portfolio
            </li>
            <li>
              <MdOutlineKeyboardArrowRight size={22} />
              Portfolio
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
