import React from 'react';
import styled, { css }  from 'styled-components';
import { css as emotionCss } from "@emotion/core";
import { useQuery } from 'react-query';
import { AssetsImageItem } from '../globalTypes';
import ClipLoader from 'react-spinners/ClipLoader';

const override = emotionCss`
  display: block;
  margin: 0 auto;
`;

const Wrapper = styled.div<{ isLarge?: Boolean }>`
  width: 268px;
    height: 271px;
  ${({ isLarge }) =>
  isLarge &&
  css`
    width: 50vw;
    height: auto;
    
    @media (max-width: 680px) {
      width: calc(100vw - 100px);
    }
  `};

${({ isLarge }) =>
  !isLarge &&
    css`
    width: calc((100vw - 80px) / 3 - 40px);
    height: calc((100vw - 80px) / 3 - 40px);
    
    @media (max-width: 960px) {
      width: calc((100vw - 80px) / 2 - 40px);
      height: calc((100vw - 80px) / 2 - 40px);
    }
  `};
    
  @media (max-width: 560px) {
    margin: 0 auto 10px;
  }
    
  img {
    max-width: 100%;
  }
`;

const ItemImage: React.FC<AssetsImageItem> = ({ assetsId, title, isLarge }) => {
  const { data } = useQuery(`assets${assetsId}`, () =>
    fetch(
      `https://dev-api.danielwellington.com/frontend/assets/${assetsId}`
    ).then((res) => res.json())
  );

  const assets = data?.data;

  return (
    <Wrapper isLarge={isLarge}>
      {assets ?
        <img src={assets.uri} alt={title} />
        :
        <ClipLoader
          css={override}
          size={150}
          color={'#0E2240'}
          loading={!assets}
        />}
    </Wrapper>
  );
};

export default ItemImage;
