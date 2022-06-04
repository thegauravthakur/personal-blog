import { ReactNode } from 'react';
import tw from 'twin.macro';
import Link from 'next/link';

interface PaginationItemProps {
    children: ReactNode;
    href: string;
    isActivePage?: boolean;
    isDisabled?: boolean;
    title: string;
}
export function PaginationItem({
    children,
    href,
    isActivePage = false,
    isDisabled = false,
    title,
}: PaginationItemProps) {
    return (
        <li
            css={[
                tw`border w-10 h-10 flex justify-center items-center rounded-lg border-rose-600 font-bold cursor-pointer dark:border-blue-600`,
                tw`transition-colors duration-150`,
                tw`hover:(bg-rose-600 text-text-dark) dark:(hover:(bg-blue-600))`,
                isActivePage && tw`dark:bg-blue-600 bg-rose-600 text-text-dark`,
                isDisabled && tw`cursor-default`,
            ]}
        >
            {isDisabled ? (
                children
            ) : (
                <Link href={href}>
                    <a
                        css={tw`w-full h-full flex justify-center items-center`}
                        tabIndex={0}
                        title={title}
                    >
                        {children}
                    </a>
                </Link>
            )}
        </li>
    );
}
