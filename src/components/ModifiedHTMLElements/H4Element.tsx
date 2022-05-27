import tw from 'twin.macro';

import { HTMLElementProps } from './ModifiedHTMLElements.types';
import { getAnchor } from './ModifiedHTMLElements.utils';

export const H4Element = ({
    children,
}: HTMLElementProps<HTMLHeadingElement>) => {
    const readableText = 'link to this heading';
    const anchor = getAnchor(children as string);
    const link = `#${anchor}`;

    return (
        <h4 css={tw`scroll-margin-top[1.2rem]`} id={anchor}>
            {children}
            <a aria-label={readableText} css={tw`text-sm mx-2.5`} href={link}>
                #
            </a>
        </h4>
    );
};
