import Link from 'next/link';
import React from 'react';

import { HTMLElementProps } from './ModifiedHTMLElements.types';

interface AnchorElementProps extends HTMLElementProps<HTMLAnchorElement> {
    href: string;
}

export const AnchorElement = (props: AnchorElementProps) => {
    const { href, children } = props;
    return (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    );
};
