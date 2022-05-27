import tw from 'twin.macro';

import { HTMLElementProps } from './ModifiedHTMLElements.types';
import { getAnchor } from './ModifiedHTMLElements.utils';

export const H3Element = ({
    children,
}: HTMLElementProps<HTMLHeadingElement>) => {
    const readableText = `link to this heading`;
    const anchor = getAnchor(children as string);
    const link = `#${anchor}`;

    return (
        <h3 css={tw`scroll-margin-top[1.2rem]`} id={anchor}>
            {children}
            <a
                aria-label={readableText}
                css={tw`text-[16px] mx-2.5`}
                href={link}
            >
                #
            </a>
        </h3>
    );
};
