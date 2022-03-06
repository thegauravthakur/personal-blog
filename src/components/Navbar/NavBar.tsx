import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';
import tw from 'twin.macro';

import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';
import Logo from '../../page-components/shared/components/Logo';
import { Constant } from '../../page-components/shared/utils';
import { moon, sun } from '../../styles/animation';
import { focusStyles } from '../../styles/GlobalStyles';
import { ThemeContext } from '../../styles/theme';
import MobileMenu from './component/MobileMenu';
import ThemeTransition from './component/ThemeTransition';

const listStyle = tw`min-w-[100px] flex justify-center items-center h-full cursor-pointer text-center border-solid border-0 border-t-[5px] border-b-[5px] border-transparent focus-within:(border-b-red-600 dark:border-b-blue-600) hocus:border-b-red-600 hocus:dark:border-b-blue-600 transition-colors ease-in duration-100`;
const menuItemStyle = tw`no-underline text-current outline-none h-full flex items-center w-full justify-center`;
const mobileIconStyles = tw`md:hidden dark:text-text-dark inline-block text-current self-center p-2.5 rounded-full cursor-pointer transition-colors ease-in duration-300 dark:(hocus:bg-gray-800 outline-none) hocus:(bg-rose-100 outline-none)`;

export function NavBar() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [animate, setAnimate] = useState(false);

    const onThemeChange = () => {
        const updatedTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(updatedTheme);
        if (updatedTheme === 'light')
            document.documentElement.classList.remove('dark');
        else document.documentElement.classList.add('dark');
        localStorage.setItem('theme', updatedTheme);
    };

    useLayoutEffect(() => {
        const { theme: activeTheme } = document.body.dataset;
        if (activeTheme) setTheme(activeTheme as 'light' | 'dark');
    }, [setTheme]);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <header>
            {animate && <ThemeTransition />}

            <nav
                css={tw`bg-gray-50 dark:bg-background-800 flex justify-between items-center py-0 px-3 sm:px-6 md:px-10`}
            >
                <h1>
                    <Link href='/' passHref>
                        <a
                            css={[
                                tw`flex items-center gap-x-2 no-underline text-xl text-rose-700 dark:text-text-dark transition-colors ease-in duration-100`,
                                focusStyles(theme),
                            ]}
                        >
                            <Logo theme={theme} height={22} width={22} />
                            Gaurav's Blog
                        </a>
                    </Link>
                </h1>

                <div css={tw`h-[60px] flex justify-center self-center`}>
                    <ul
                        css={tw`list-none h-full items-center text-slate-800 dark:text-text-dark hidden md:flex`}
                    >
                        <li css={listStyle}>
                            <Link href={'/'} passHref>
                                <a css={menuItemStyle}>Home</a>
                            </Link>
                        </li>

                        <li css={listStyle}>
                            <Link href={Constant.portfolio} passHref>
                                <a css={menuItemStyle}>Portfolio</a>
                            </Link>
                        </li>

                        <li
                            css={[listStyle, tw`gap-x-2.5 outline-none`]}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onThemeChange();
                                }
                            }}
                            tabIndex={0}
                            onClick={onThemeChange}
                        >
                            Theme
                            {theme === 'dark' ? (
                                <BsFillMoonFill
                                    css={[
                                        { animation: `ease-out 0.3s ${moon}` },
                                    ]}
                                />
                            ) : (
                                <BsSunFill
                                    css={[
                                        { animation: `ease-out 0.3s ${sun}` },
                                    ]}
                                    size={20}
                                />
                            )}
                        </li>
                    </ul>

                    {!showMobileNav && (
                        <AiOutlineMenu
                            tabIndex={0}
                            onClick={() => {
                                setShowMobileNav(!showMobileNav);

                                document.body.style.overflow = 'hidden';
                            }}
                            size={38}
                            css={mobileIconStyles}
                        />
                    )}

                    {theme === 'dark' ? (
                        <RiMoonFill
                            tabIndex={0}
                            onClick={onThemeChange}
                            size={40}
                            css={[
                                mobileIconStyles,
                                { animation: `ease-out 0.3s ${moon}` },
                            ]}
                        />
                    ) : (
                        <BsSunFill
                            tabIndex={0}
                            size={40}
                            onClick={onThemeChange}
                            css={[
                                mobileIconStyles,
                                { animation: `ease-out 0.3s ${sun}` },
                            ]}
                        />
                    )}
                </div>
            </nav>

            {showMobileNav && (
                <MobileMenu setShowMobileNav={setShowMobileNav} />
            )}
        </header>
    );
}
