import { css } from '@emotion/react';
import Image from 'next/image';
import Truncate from 'react-text-truncate';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { VscCalendar } from 'react-icons/vsc';
import Link from 'next/link';
import { AiOutlineTags } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { GoCommentDiscussion } from 'react-icons/go';
import tw from 'twin.macro';
import { hoverStyles, textStyle } from '../pages';

const metaItemStyles = tw`rounded-2xl flex items-center space-x-2 w-full justify-center hocus:(text-rose-600 dark:text-blue-600) transition-colors duration-500 ease-in-out`;
export function Post({ slug, data, imagePath, isLast }: any) {
  const { description, title, publishedDate, tags, author } = data;

  const [mainTag, ...rest] = tags.split(',');
  const router = useRouter();
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
      <div
        // css={css`
        //   display: flex;
        //   margin: 30px 0;
        //   column-gap: 40px;
        //   @media (max-width: 900px) {
        //     column-gap: 30px;
        //   }
        //   @media (max-width: 600px) {
        //     flex-direction: column;
        //   }
        // `}
        css={tw`flex my-7 space-x-7 flex-col sm:flex-row`}
      >
        <div
          // css={css`
          //   max-width: 400px;
          //   @media (max-width: 1370px) {
          //     max-width: 300px;
          //   }
          //   @media (max-width: 600px) {
          //     max-width: 100%;
          //   }
          // `}
          css={tw`max-w-full sm:max-w-sm xl:max-w-md`}
        >
          <Image
            role={'presentation'}
            onClick={undefined}
            css={css`
              border-radius: 10px;
            `}
            alt=''
            src={`/images/${imagePath}`}
            height={1800}
            width={3200}
          />
        </div>
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              @media (max-width: 600px) {
                margin: 20px 0;
              }
            `}
          >
            <Truncate
              line={4}
              element='span'
              truncateText='…'
              text={description}
            />
          </div>
          <Link href={`/${slug}`} passHref>
            <a
              // css={(theme) => css`
              //   position: absolute;
              //   text-decoration: none;
              //   font-size: 14px;
              //   bottom: 10px;
              //   left: 0;
              //   padding: 6px 16px;
              //   border-radius: 6px;
              //   color: var(--text-light);
              //   border: 0;
              //   cursor: pointer;
              //   background-color: var(--primary-main);
              //   transition: background-color 0.5s, box-shadow 0.5s,
              //     transform 0.5s;

              //   &:hover {
              //     background-color: var(--primary-dark);
              //     box-shadow: 0 10px 15px var(--shadow);
              //     transform: translateY(-1px);
              //   }

              //   &:active {
              //     transform: translateY(1px);
              //     box-shadow: 0 10px 10px var(--shadow);
              //   }

              //   &:focus {
              //     outline: 1px solid var(--primary-main);
              //     outline-offset: 2px;
              //   }

              //   @media (max-width: 600px) {
              //     position: static;
              //     display: inline-block;
              //   }
              // `}
              css={tw`sm:(absolute) no-underline bottom-2.5 left-0 py-1.5 px-4 rounded-lg border-0 cursor-pointer dark:bg-blue-600 bg-rose-600 static inline-block`}
            >
              Read More!
            </a>
          </Link>
          {!isLast && (
            <hr
              css={(theme) => css`
                margin-top: 50px;
                margin-left: auto;
                margin-right: auto;
                max-width: 250px;
                color: var(--text-main);
                @media (min-width: 600px) {
                  display: none;
                }
              `}
            />
          )}
        </div>
      </div>
    </div>
  );
}
