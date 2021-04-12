import LinkWrapper from 'components/LinkWrapper';

import { XCircleIcon } from '@primer/octicons-react';

import * as S from './styles';

export type IPageTemplate = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: IPageTemplate) => (
  <>
    <LinkWrapper href="/">
      <XCircleIcon size={32} aria-label="Voltar para o mapa" />
    </LinkWrapper>

    <S.Wrapper>
      <S.Heading>{heading}</S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Wrapper>
  </>
);

export default PageTemplate;
