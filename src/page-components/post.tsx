import { css } from '@emotion/react';
import Image from 'next/image';
import { format } from 'date-fns';
import { VscCalendar } from 'react-icons/vsc';
import Link from 'next/link';
import { AiOutlineTags } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { GoCommentDiscussion } from 'react-icons/go';
import tw from 'twin.macro';
import { hoverStyles, textStyle } from '../pages';

const buttonStyles = css`
  position: absolute;
  text-decoration: none;
  font-size: 14px;
  bottom: 10px;
  left: 0;
  padding: 6px 16px;
  border-radius: 6px;
  color: var(--text-light);
  border: 0;
  cursor: pointer;
  background-color: var(--primary-main);
  transition: background-color 0.5s, box-shadow 0.5s, transform 0.5s;

  &:hover {
    background-color: var(--primary-dark);
    box-shadow: 0 10px 15px var(--shadow);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 10px 10px var(--shadow);
  }

  &:focus {
    outline: 1px solid var(--primary-main);
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    position: static;
    display: inline-block;
  }
`;

const metaItemStyles = tw`rounded-2xl flex items-center space-x-2 w-full justify-center hocus:(text-rose-600 dark:text-blue-600) transition-colors duration-500 ease-in-out`;
export function Post({ slug, data, imagePath, isLast }: any) {
  const { description, title, publishedDate, tags, author } = data;

  const [mainTag, ...rest] = tags.split(',');
  return (
    <div css={tw``}>
      <h2>{title}</h2>
      <div
        css={[
          tw`grid grid-cols-2 sm:(grid-cols-4 max-w-2xl) place-items-center my-2`,
          textStyle,
        ]}
      >
        <Link href='/'>
          <a css={[metaItemStyles, hoverStyles]}>
            <VscCalendar />
            <p>{format(new Date(publishedDate), 'MMM do, yyyy')}</p>
          </a>
        </Link>
        <Link href='/'>
          <a css={[metaItemStyles, hoverStyles]}>
            <AiOutlineTags />
            <p>{mainTag}</p>
          </a>
        </Link>
        <Link href='/'>
          <a css={[metaItemStyles, hoverStyles]}>
            <BsPencil />
            <p>{author}</p>
          </a>
        </Link>
        <Link href='/'>
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
            <a css={[buttonStyles]}>Read More!</a>
          </Link>
          {!isLast && (
            <hr css={[tw`mx-auto mb-5! mt-14! max-w-xs sm:hidden`]} />
          )}
        </div>
      </div>
    </div>
  );
}
