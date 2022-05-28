import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import tw from 'twin.macro';

import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';
import { focusStyles } from '../../styles/GlobalStyles';
import { ThemeContext } from '../../styles/theme';
import { Logo } from '../Logo';
import { CollapsedNavBarOptions } from './component/CollapsedNavBarOptions';
import { ExpandedNavBarOptions } from './component/ExpandedNavBarOptions';
import MobileMenu from './component/MobileMenu';
import ThemeTransition from './component/ThemeTransition';

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
                css={tw`h-[60px] bg-gray-50 dark:bg-background-800 flex justify-between items-center py-0 px-3 sm:px-6 md:px-10`}
            >
                <h1>
                    <Link passHref href='/'>
                        <a
                            css={[
                                tw`flex items-center gap-x-2 no-underline text-xl text-rose-700 dark:text-text-dark transition-colors ease-in duration-100`,
                                focusStyles(theme),
                            ]}
                        >
                            <Logo height={22} theme={theme} width={22} />
                            Gaurav&apos;s Blog
                        </a>
                    </Link>
                </h1>
                <ExpandedNavBarOptions
                    theme={theme}
                    onThemeChange={onThemeChange}
                />
                <CollapsedNavBarOptions
                    setShowMobileNav={setShowMobileNav}
                    showMobileNav={showMobileNav}
                    theme={theme}
                    onThemeChange={onThemeChange}
                />
            </nav>
            {showMobileNav && (
                <MobileMenu setShowMobileNav={setShowMobileNav} />
            )}
        </header>
    );
}
