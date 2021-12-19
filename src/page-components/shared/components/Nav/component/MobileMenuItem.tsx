import { useRouter } from 'next/router';
import Link from 'next/link';
import { css } from '@emotion/react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface MobileMenuItemProps {
  path: string;
  name: string;
  onClick: () => void;
}

export const MobileMenuItem = ({
  name,
  path,
  onClick,
}: MobileMenuItemProps) => {
  const router = useRouter();

  return (
    <Link href={path} passHref>
      <li
        css={[
          router.pathname === path &&
            css`
              color: var(--primary-main);
              font-weight: bold;
              display: flex;
              align-items: center;
              padding: 6px 0;
            `,
        ]}
      >
        <MdOutlineKeyboardArrowRight size={22} />
        {name}
      </li>
    </Link>
  );
};
