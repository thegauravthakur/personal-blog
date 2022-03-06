import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineTags } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { GoCommentDiscussion } from 'react-icons/go';
import { VscCalendar } from 'react-icons/vsc';
import tw from 'twin.macro';

import { hoverStyles, textStyle } from '../styles/GlobalStyles';

const metaItemStyles = tw`rounded-2xl flex items-center space-x-2 w-full justify-center hocus:(text-rose-600 dark:text-blue-600) transition-colors duration-500 ease-in-out`;
export function Post({ slug, data, imagePath, isLast }: any) {
    const { description, title, publishedDate, tags, author } = data;

    const [mainTag, ...rest] = tags.split(',');
    return (
        <div css={tw``}>
            <h2 css={tw``}>{title}</h2>
            <div
                css={[
                    tw`hidden sm:grid grid-cols-2 sm:(grid-cols-4 max-w-2xl) place-items-center my-2`,
                    textStyle,
                ]}
            >
                <Link passHref href='/'>
                    <a css={[metaItemStyles, hoverStyles]}>
                        <VscCalendar />
                        <p>{format(new Date(publishedDate), 'MMM do, yyyy')}</p>
                    </a>
                </Link>
                <Link passHref href='/'>
                    <a css={[metaItemStyles, hoverStyles]}>
                        <AiOutlineTags />
                        <p>{mainTag}</p>
                    </a>
                </Link>
                <Link passHref href='/'>
                    <a css={[metaItemStyles, hoverStyles]}>
                        <BsPencil />
                        <p>{author}</p>
                    </a>
                </Link>
                <Link passHref href='/'>
                    <a css={[metaItemStyles, hoverStyles]}>
                        <GoCommentDiscussion />
                        <p>0 Comments</p>
                    </a>
                </Link>
            </div>
            <div css={tw`flex my-7 gap-x-7 flex-col sm:flex-row`}>
                <div css={tw`max-w-full sm:max-w-xs md:max-w-sm`}>
                    <Image
                        role={'presentation'}
                        css={tw`rounded-xl`}
                        alt=''
                        src={`/images/${imagePath}`}
                        height={1800}
                        width={3200}
                    />
                </div>
                <div css={tw`relative space-y-5 my-3 sm:(space-y-0 my-0)`}>
                    <p css={tw`line-clamp-4`}>{description}</p>
                    <Link href={`/${slug}`} passHref>
                        <a
                            css={[
                                tw`static inline-block sm:absolute no-underline text-sm bottom-2.5 left-0 px-4 py-2 rounded-md border-0 cursor-pointer bg-rose-600 text-white  dark:(bg-blue-600 text-gray-200)`,
                                tw`hover:(-translate-y-0.5 dark:box-shadow[ 0 10px 15px rgba(37, 99, 235, 0.3)] box-shadow[ 0 10px 15px rgba(107, 114, 128, 0.6)]) active:(translate-y-0.5)`,
                                tw`active:(dark:box-shadow[ 0 10px 10px rgba(37, 99, 235, 0.3)] box-shadow[ 0 10px 10px rgba(107, 114, 128, 0.6)])`,
                                tw`focus:(outline-offset[2px]) transition-all duration-500 ease-in-out`,
                                tw`outline-width[1px] outline-style[solid] outline-color[#E11D48] dark:outline-color[#2563EB]`, //todo update this once tw 3 support is available
                            ]}
                        >
                            Read More!
                        </a>
                    </Link>
                    {!isLast && (
                        <hr
                            css={[
                                tw`mx-auto mt-12! max-w-xs sm:hidden border-gray-400`,
                            ]}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
