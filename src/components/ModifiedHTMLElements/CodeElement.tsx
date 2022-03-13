import tw from 'twin.macro';

import { HTMLElementProps } from './ModifiedHTMLElements.types';

export const CodeElement = ({
    className,
    ...rest
}: HTMLElementProps<HTMLElement>) => {
    const language = className?.split('-');
    if (language) return <code className={className} {...rest} />;
    return (
        <code
            css={tw`dark:bg-gray-800 bg-rose-100 py-0.5 px-1 font-size[calc(1em - 10%) !important] rounded-md`}
            {...rest}
        />
    );
};
