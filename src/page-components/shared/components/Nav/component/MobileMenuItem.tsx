import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styled from '@emotion/styled';

interface MobileMenuItemProps {
  path: string;
  name: string;
  onClick: () => void;
}

const MobileNavLinkItem = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

interface MobileNavItemProps {
  path: string;
  pathname: string;
}

const MobileNavItem = styled.li`
  color: ${(props: MobileNavItemProps) =>
    props.pathname === props.path ? 'var(--primary-main)' : 'inherit'};
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 6px 0;
`;

export const MobileMenuItem = ({
  name,
  path,
  onClick,
}: MobileMenuItemProps) => {
  const { pathname } = useRouter();

  return (
    <MobileNavItem path={path} pathname={pathname}>
      <Link href={path} passHref>
        <MobileNavLinkItem onClick={onClick}>
          <MdOutlineKeyboardArrowRight size={22} />
          {name}
        </MobileNavLinkItem>
      </Link>
    </MobileNavItem>
  );
};
