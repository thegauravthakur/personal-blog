import tw from 'twin.macro';
import { ReactNode } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';
import { PaginationItem } from './components/PaginationItem';

function createRange(length: number) {
    return Array.from({ length }, (x, i) => i);
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}
export function Pagination({ totalPages, currentPage }: PaginationProps) {
    const range = createRange(totalPages);
    console.log({ currentPage, totalPages });

    return (
        <ul css={tw`space-x-2 flex justify-center my-4`}>
            <PaginationItem
                href={`/page/${currentPage - 1}`}
                isDisabled={currentPage === 1}
                title='Go Back'
            >
                <FiChevronLeft fontSize={25} />
            </PaginationItem>
            {range.map((pageIndex) => (
                <PaginationItem
                    key={pageIndex}
                    href={`/page/${pageIndex + 1}`}
                    isActivePage={pageIndex + 1 === currentPage}
                    isDisabled={pageIndex + 1 === currentPage}
                    title={`Go to ${pageIndex + 1} page`}
                >
                    {pageIndex + 1}
                </PaginationItem>
            ))}
            <PaginationItem
                href={`/page/${currentPage + 1}`}
                isDisabled={currentPage === totalPages}
                title='Go forward'
            >
                <FiChevronRight fontSize={25} />
            </PaginationItem>
        </ul>
    );
}
