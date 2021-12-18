import { css, Global } from '@emotion/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import useLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import Link from 'next/link';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { menuAnimation, sun, moon, cross } from '../styles/animation';
import { RiMoonFill } from 'react-icons/ri';
import { useRouter } from 'next/router';

export function Nav() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [animate, setAnimate] = useState(false);

  const onThemeChange = () => {
    const updatedTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    document.body.dataset.theme = updatedTheme;
    localStorage.setItem('theme', updatedTheme);
  };
  useLayoutEffect(() => {
    const { theme } = document.body.dataset;
    setDarkMode(theme === 'dark');
  }, []);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header>
      {animate && (
        <Global
          styles={css`
            * {
              transition: background-color 0.3s ease-in-out;
            }
          `}
        />
      )}
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
            transition: color 0.2s ease-out;
            cursor: pointer;

            & a {
              color: var(--title-main);
              text-decoration: none;
            }
          `}
        >
          <Link href='/'>Gaurav's Blog</Link>
        </h1>
        <div
          css={css`
            height: 60px;
            @media (max-width: 740px) {
              display: flex;
              justify-content: center;
              align-self: center;
              //column-gap: 20px;
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
            </li>
          </ul>
          {!showMobileNav && (
            <AiOutlineMenu
              onClick={() => setShowMobileNav(!showMobileNav)}
              size={38}
              css={(theme) => css`
                display: none;
                @media (max-width: 740px) {
                  display: inline-block;
                  color: var(--text-main);
                  align-self: center;
                  padding: 10px;
                  border-radius: 50%;
                  cursor: pointer;
                  transition: background-color 0.3s ease-in;
                  &:hover {
                    background-color: var(--information);
                  }
                }
              `}
            />
          )}
          {darkMode ? (
            <RiMoonFill
              onClick={onThemeChange}
              size={40}
              css={(theme) =>
                css`
                  @media (min-width: 740px) {
                    display: none;
                  }
                  color: var(--text-main);
                  align-self: center;
                  padding: 10px;
                  border-radius: 50%;
                  animation: ease-out 0.3s ${moon};
                  cursor: pointer;
                  transition: background-color 0.3s ease-in;

                  &:hover {
                    background-color: var(--information);
                  }
                `
              }
            />
          ) : (
            <BsSunFill
              size={40}
              onClick={onThemeChange}
              css={(theme) =>
                css`
                  @media (min-width: 740px) {
                    display: none;
                  }
                  color: var(--text-main);
                  align-self: center;
                  animation: ease-out 0.3s ${sun};
                  padding: 10px;
                  border-radius: 50%;
                  cursor: pointer;
                  transition: background-color 0.3s ease-in;

                  &:hover {
                    background-color: var(--information);
                  }
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
                color: var(--title-main);
              `}
            >
              Gaurav's Blog
            </h1>
            <AiOutlineClose
              css={css`
                padding: 10px;
                border-radius: 50%;
                cursor: pointer;
                transition: background-color 0.3s ease-in;
                animation: ease-out 0.7s ${cross};

                &:hover {
                  background-color: var(--information);
                }
              `}
              onClick={() => setShowMobileNav(false)}
              size={40}
            />
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
            <Link href={'/'}>
              <li
                css={[
                  router.pathname === '/' &&
                    css`
                      color: var(--primary-main);
                      font-weight: bold;
                    `,
                ]}
              >
                <MdOutlineKeyboardArrowRight size={22} />
                Home
              </li>
            </Link>
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
