import React from 'react';
import styled  from 'styled-components';
import { useQuery } from 'react-query';
import { transformAssets } from '../helpers/transformAssets';
import ItemImage from '../components/ItemImage';

const ItemWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const Header = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    font-size: 20px;
    padding-bottom: 20px;
  }
    
  @media (max-width: 680px) {
    flex-direction: column;
    
    h1 {
      padding-bottom: 0px;
    }
  }
`;

const Description = styled.div`
  width: 50%;
  
  @media (max-width: 680px) {
     width: 100%;
  }
`;

const PreviewPage: React.FC<{
  match: {
    params: {
      id: number,
    },
  },
}> = ({ match: { params: { id } } } ) => {

  const { data } = useQuery(`productDetails${id}`, () =>
    fetch(
      `https://dev-api.danielwellington.com/frontend/products/${id}`
    ).then((res) => res.json())
  );

  const assets = transformAssets(data);

  return (
    <div>
      {Object.keys(assets).length &&
      <ItemWrapper>
        <ItemImage assetsId={assets['main_image'].id} title={assets.name} isLarge />
        <Description>
          <Header>
            <h1>{assets.name}</h1>
            <p>{assets.price.value} {assets.price.unitAbbreviation}</p>
          </Header>
          <p>Color: {assets.color}</p>
          <p>Size: {assets.size}</p>
          <p>Article number: {assets.sku}</p>
          <p>{assets.description}</p>
        </Description>
      </ItemWrapper>
      }
    </div>
  );
};

export default PreviewPage;
