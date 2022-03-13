import tw from 'twin.macro';

import { HTMLElementProps } from './ModifiedHTMLElements.types';
import { getAnchor } from './ModifiedHTMLElements.utils';

export const H2Element = ({
    children,
}: HTMLElementProps<HTMLHeadingElement>) => {
    const anchor = getAnchor(children as string);
    const link = `#${anchor}`;

    return (
        <h2 css={tw`scroll-margin-top[1.2rem]`} id={anchor}>
            {children}
            <a css={tw`text-lg mx-2.5`} href={link}>
                #
            </a>
        </h2>
    );
};
