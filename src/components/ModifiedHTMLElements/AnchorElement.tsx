import Link from 'next/link';
import React from 'react';

import { HTMLElementProps } from './ModifiedHTMLElements.types';

type AnchorElementProps = HTMLElementProps<HTMLAnchorElement>;
export const AnchorElement = (props: AnchorElementProps) => {
    const { href, children } = props as AnchorElementProps & { href: string };
    return (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    );
};
