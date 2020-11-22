import React from 'react';
import styled  from 'styled-components';
import { css } from "@emotion/core";
import { useQuery } from 'react-query';
import PacmanLoader from 'react-spinners/PacmanLoader';
import PreviewCard from '../components/PreviewCard';
import { WatchItem } from '../globalTypes';

const override = css`
  display: block;
  margin: 0 auto;
`;

const PreviewCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
    
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

const PageWrapper = styled.div`
  text-align: center;
`;

const LoaderWrapper = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  width: 100%;
  
  > div {
    margin-top: -100px;
    margin-left: 30%;
  }
`;

const StartPage: React.FC = () => {
  const [showSpinner, setShowSpinner] = React.useState(true);

  const { isLoading, data } = useQuery('products', () =>
    fetch(
      "https://dev-api.danielwellington.com/frontend/products/"
    ).then((res) => res.json())
  );

  React.useEffect(() => {
    if (data && !isLoading) {
      setTimeout(() => setShowSpinner(false), 1000);
    }
  }, [isLoading, data]);

  const watchesList = data?.data;

  return (
    <div>
      {showSpinner ?
      <LoaderWrapper>
        <PacmanLoader
          css={override}
          size={100}
          color={'#0E2240'}
          loading={showSpinner}
        />
      </LoaderWrapper>
        :
        <PageWrapper>
          <p>{watchesList.length} products</p>
          <PreviewCardsWrapper>
            {watchesList.length && watchesList.map((item: WatchItem) => <PreviewCard key={item.id} id={item.id} />)}
          </PreviewCardsWrapper>
        </PageWrapper>
      }
    </div>
  );
};

export default StartPage;
