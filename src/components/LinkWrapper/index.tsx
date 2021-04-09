import Link from 'next/link';

import * as S from './styles';

type ILinkWrapper = {
  href: string;
  children: React.ReactNode;
};

const LinkWrapper = ({ href, children }: ILinkWrapper) => (
  <S.Wrapper>
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </S.Wrapper>
);

export default LinkWrapper;
