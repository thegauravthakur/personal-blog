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

export function Post({ slug, data, imagePath, isLast }: any) {
  const { description, title, publishedDate, tags, author } = data;

  const [mainTag, ...rest] = tags.split(',');
  const router = useRouter();
  return (
    <div
      css={css`
        margin-bottom: 50px;
      `}
    >
      <h2>{title}</h2>
      <div
        css={(theme) => css`
          display: grid;
          grid-template-columns: 170px 170px 170px 170px;
          place-items: center;
          & > div {
            padding: 0 14px;
            border-radius: 12px;
            margin: 5px 0;
            display: flex;
            align-items: center;
            column-gap: 7px;
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
          }
          & > div:hover {
            background-color: var(--information);
            color: var(--link-main);
            cursor: pointer;
          }
          @media (max-width: 750px) {
            display: none; // hide it for now, //todo check if needs to show in mobile
            grid-template-columns: 1fr max-content;
            place-items: flex-start;
            font-size: 14px;
            margin:0;
            & > div {
              column-gap: 4px;
              padding: 0 10px;
              min-width: max-content;
            
          }
        `}
      >
        <div>
          <VscCalendar />
          <p>{format(new Date(publishedDate), 'MMM do, yyyy')}</p>
        </div>
        <div>
          <AiOutlineTags />
          <p>{mainTag}</p>
        </div>
        <div>
          <BsPencil />
          <p>{author}</p>
        </div>
        <div>
          <GoCommentDiscussion />
          <p>0 Comments</p>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          margin: 30px 0;
          column-gap: 40px;
          @media (max-width: 900px) {
            column-gap: 30px;
          }
          @media (max-width: 600px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            max-width: 400px;
            @media (max-width: 1370px) {
              max-width: 300px;
            }
            @media (max-width: 600px) {
              max-width: 100%;
            }
          `}
        >
          <Image
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
              css={(theme) => css`
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
                transition: background-color 0.5s, box-shadow 0.5s,
                  transform 0.5s;

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

                @media (max-width: 600px) {
                  position: static;
                  display: inline-block;
                }
              `}
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
