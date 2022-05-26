import { Dispatch, SetStateAction } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';
import tw from 'twin.macro';

import { moon, sun } from '../../../styles/animation';

interface CollapsedNavBarOptionsProps {
    theme: string;
    onThemeChange: () => void;
    showMobileNav: boolean;
    setShowMobileNav: Dispatch<SetStateAction<boolean>>;
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
                    title='expand menu'
                    aria-label='expand menu'
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
                    aria-label={toggleThemeText}
                    title={toggleThemeText}
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
                    aria-label={toggleThemeText}
                    title={toggleThemeText}
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
    );
}
