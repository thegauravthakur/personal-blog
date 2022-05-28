import Link from 'next/link';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import tw from 'twin.macro';

import { moon, sun } from '../../../styles/animation';

const listStyle = tw`min-w-[100px] flex justify-center items-center h-full cursor-pointer text-center border-solid border-0 border-t-[5px] border-b-[5px] border-transparent focus-within:(border-b-red-600 dark:border-b-blue-600) hocus:border-b-red-600 hocus:dark:border-b-blue-600 transition-colors ease-in duration-100`;
const menuItemStyle = tw`no-underline text-current outline-none h-full flex items-center w-full justify-center`;

interface ExpandedNavBarOptionsProps {
    theme: string;
    onThemeChange: () => void;
}

export function ExpandedNavBarOptions({
    theme,
    onThemeChange,
}: ExpandedNavBarOptionsProps) {
    const toggleThemeText = `activate ${
        theme === 'dark' ? 'light' : 'dark'
    } theme`;

    return (
        <ul
            css={tw`list-none h-full items-center text-slate-800 dark:text-text-dark hidden md:flex`}
        >
            <li css={listStyle}>
                <Link passHref href='/'>
                    <a css={menuItemStyle}>Home</a>
                </Link>
            </li>

            <li css={listStyle}>
                <Link passHref href='https://gauravthakur.in'>
                    <a css={menuItemStyle}>Portfolio</a>
                </Link>
            </li>

            <li
                aria-label={toggleThemeText}
                css={[listStyle, tw`gap-x-2.5 outline-none`]}
                tabIndex={0}
                title={toggleThemeText}
                onClick={onThemeChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onThemeChange();
                    }
                }}
            >
                Theme
                {theme === 'dark' ? (
                    <BsFillMoonFill
                        css={[{ animation: `ease-out 0.3s ${moon}` }]}
                    />
                ) : (
                    <BsSunFill
                        css={[{ animation: `ease-out 0.3s ${sun}` }]}
                        size={20}
                    />
                )}
            </li>
        </ul>
    );
}
