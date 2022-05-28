import styled from '@emotion/styled';
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
const mobileIconStyles = tw`dark:text-text-dark`;

const MenuButton = styled.button([
    tw`md:hidden p-2.5 rounded-full text-current dark:(hocus:bg-gray-800 outline-none) hocus:(bg-rose-100 outline-none) transition-colors ease-in duration-300`,
]);

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
                <MenuButton
                    aria-label='expand menu'
                    title='expand menu'
                    onClick={() => {
                        setShowMobileNav(!showMobileNav);
                        document.body.style.overflow = 'hidden';
                    }}
                >
                    <AiOutlineMenu css={mobileIconStyles} size={20} />
                </MenuButton>
            )}
            <MenuButton
                aria-label={toggleThemeText}
                css={tw`md:hidden p-2.5 rounded-full inline-block text-current self-center dark:(hocus:bg-gray-800 outline-none) hocus:(bg-rose-100 outline-none) transition-colors ease-in duration-300 `}
                title={toggleThemeText}
                onClick={onThemeChange}
            >
                {theme === 'dark' ? (
                    <RiMoonFill
                        css={[
                            mobileIconStyles,
                            { animation: `ease-out 0.3s ${moon}` },
                        ]}
                        size={20}
                    />
                ) : (
                    <BsSunFill
                        css={[
                            mobileIconStyles,
                            { animation: `ease-out 0.3s ${sun}` },
                        ]}
                        size={20}
                    />
                )}
            </MenuButton>
        </div>
    );
}
