import { Dispatch, SetStateAction } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';
import tw from 'twin.macro';

import { moon, sun } from '../../../styles/animation';

interface CollapsedNavBarOptionsProps {
    theme: string;
    setShowMobileNav: Dispatch<SetStateAction<boolean>>;
    onThemeChange: () => void;
    showMobileNav: boolean;
}
const mobileIconStyles = tw`md:hidden dark:text-text-dark inline-block text-current self-center p-2.5 rounded-full cursor-pointer transition-colors ease-in duration-300 dark:(hocus:bg-gray-800 outline-none) hocus:(bg-rose-100 outline-none)`;

export function CollapsedNavBarOptions({
    theme,
    onThemeChange,
    setShowMobileNav,
    showMobileNav,
}: CollapsedNavBarOptionsProps) {
    const toggleThemeText = `activate ${
        theme === 'dark' ? 'light' : 'dark'
    } theme`;
    return (
        <div css={tw`md:hidden flex justify-center self-center`}>
            {!showMobileNav && (
                <AiOutlineMenu
                    aria-label='expand menu'
                    css={mobileIconStyles}
                    size={38}
                    tabIndex={0}
                    title='expand menu'
                    onClick={() => {
                        setShowMobileNav(!showMobileNav);
                        document.body.style.overflow = 'hidden';
                    }}
                />
            )}

            {theme === 'dark' ? (
                <RiMoonFill
                    aria-label={toggleThemeText}
                    css={[
                        mobileIconStyles,
                        { animation: `ease-out 0.3s ${moon}` },
                    ]}
                    size={40}
                    tabIndex={0}
                    title={toggleThemeText}
                    onClick={onThemeChange}
                />
            ) : (
                <BsSunFill
                    aria-label={toggleThemeText}
                    css={[
                        mobileIconStyles,
                        { animation: `ease-out 0.3s ${sun}` },
                    ]}
                    size={40}
                    tabIndex={0}
                    title={toggleThemeText}
                    onClick={onThemeChange}
                />
            )}
        </div>
    );
}
