import Image from 'next/image';
import tw from 'twin.macro';

import { HTMLElementProps } from './ModifiedHTMLElements.types';

interface ImageElementProps extends HTMLElementProps<HTMLImageElement> {
    alt: string;
    src: string;
}
export const ImageElement = ({ alt, src }: ImageElementProps) => {
    const [altText, dimension] = alt.split('+');
    const { width, height } = JSON.parse(dimension ?? '{}');

    return (
        <Image
            css={tw`rounded-xl`}
            width={width ?? 3200}
            height={height ?? 1800}
            src={src}
            alt={altText}
        />
    );
};
