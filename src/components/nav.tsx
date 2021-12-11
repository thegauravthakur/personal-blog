import { css } from '@emotion/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThemeContext } from '../styles/theme';
import { HiMoon } from 'react-icons/hi';
import { BsFillMoonFill, BsFillSunFill, BsSunFill } from 'react-icons/bs';
export function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const router = useRouter();
  const onThemeChange = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };
  return (
    <header>
      <nav
        css={(theme) => css`
          color: white;
          background-color: ${theme.color.background.main};
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
            color: ${theme.color.text.main};
          `}
        >
          <Link href='/'>
            <a
              tabIndex={0}
              css={(theme) => css`
                color: ${theme.color.text.main};
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
              color: ${theme.color.text.main};
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
                &:hover {
                  border-bottom: 5px solid ${theme.color.link.main};
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
              {theme === 'dark' ? (
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
                  color: ${theme.color.text.main};
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
                  color: ${theme.color.text.main};
                  align-self: center;
                  //margin: 20px 0;
                }
              `}
            />
          )}
          {theme === 'dark' ? (
            <BsFillMoonFill
              onClick={onThemeChange}
              css={(theme) =>
                css`
                  @media (min-width: 740px) {
                    display: none;
                  }
                  color: ${theme.color.text.main};
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
                  color: ${theme.color.text.main};
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
            background-color: ${theme.color.background.main};
            border-top: 1px solid ${theme.color.text.main};
            border-bottom: 1px solid ${theme.color.text.main};
            color: ${theme.color.text.main};
            position: absolute;
            //margin: 0 10px;
            right: 0;
            left: 0;
            padding: 10px 60px;
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
          <ul
            css={css`
              list-style: none;
              & > li {
                padding: 10px 0;
              }
            `}
          >
            <li>Home</li>
            <li>Portfolio</li>
            <li>Resume</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
