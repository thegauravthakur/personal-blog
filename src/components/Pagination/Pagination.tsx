import tw from 'twin.macro';
import { ReactNode } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';

interface PaginationItemProps {
    children: ReactNode;
    href: string;
}
export function PaginationItem({ children, href }: PaginationItemProps) {
    return (
        <li
            css={[
                tw`border w-10 h-10 flex justify-center items-center rounded-lg border-rose-600 font-bold cursor-pointer dark:border-blue-600`,
                tw`transition-colors duration-150`,
                tw`hover:(bg-rose-600 text-white) dark:(hover:(bg-blue-600))`,
            ]}
        >
            <Link passHref href={href}>
                <a>{children}</a>
            </Link>
        </li>
    );
}

interface PaginationProps {
    currentPage: string;
    totalPages: string;
}
export function Pagination({ totalPages, currentPage }: PaginationProps) {
    return (
        <ul css={tw`space-x-2 flex justify-center my-4`}>
            <PaginationItem href='/'>
                <FiChevronLeft fontSize={25} />
            </PaginationItem>
            <PaginationItem href='/'>1</PaginationItem>
            <PaginationItem href='/'>2</PaginationItem>
            <PaginationItem href='/'>
                <FiChevronRight fontSize={25} />
            </PaginationItem>
        </ul>
    );
}
