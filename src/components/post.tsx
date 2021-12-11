import { css } from '@emotion/react';
import Image from 'next/image';
import Truncate from 'react-text-truncate';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { VscCalendar } from 'react-icons/vsc';
import { AiOutlineTags } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { GoCommentDiscussion } from 'react-icons/go';

export function Post({ slug, data, imagePath, date }: any) {
  const { description, title, publishedDate, tags, author } = data;
  const { modifiedDate, createdDate } = date;
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
          }
          & > div:hover {
            background-color: ${theme.color.information};
            color: ${theme.color.link.main};
            cursor: pointer;
          }
          @media (max-width: 750px) {
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
          <p>{format(new Date(createdDate), 'MMM do, yyyy')}</p>
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
          <button
            onClick={() => router.push(`/${slug}`)}
            css={(theme) => css`
              position: absolute;
              bottom: 10px;
              left: 0;
              padding: 8px 16px;
              border-radius: 6px;
              color: ${theme.color.text.light};
              border: 0;
              cursor: pointer;
              background-color: ${theme.color.primary};
              @media (max-width: 600px) {
                position: static;
                display: block;
              }
            `}
          >
            Read More!
          </button>
          <hr
            css={(theme) => css`
              margin-top: 50px;
              margin-left: auto;
              margin-right: auto;
              max-width: 250px;
              color: ${theme.color.text.main};
              @media (min-width: 600px) {
                display: none;
              }
            `}
          />
        </div>
      </div>
    </div>
  );
}
