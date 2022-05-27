import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import tw from 'twin.macro';

interface MobileMenuItemProps {
    path: string;
    name: string;
    onClick: () => void;
}

export const MobileMenuItem = ({
    name,
    path,
    onClick,
}: MobileMenuItemProps) => {
    const { pathname } = useRouter();

    return (
        <li
            css={[
                tw`flex items-center py-1.5 dark:text-text-dark text-current`,
                path === pathname &&
                    tw`dark:text-blue-600 text-rose-600 font-bold`,
            ]}
        >
            <Link passHref href={path}>
                <a
                    css={tw`flex items-center dark:text-text-dark text-current no-underline`}
                    onClick={onClick}
                >
                    <MdOutlineKeyboardArrowRight size={22} />
                    {name}
                </a>
            </Link>
        </li>
    );
};
