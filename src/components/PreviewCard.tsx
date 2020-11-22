import React from 'react';
import styled  from 'styled-components';
import { useQuery } from 'react-query';
import ItemImage from './ItemImage';
import { transformAssets } from '../helpers/transformAssets';
import { ProductDetailsWrapper } from '../globalTypes';

const ItemWrapper = styled.div`
  padding: 20px 20px 40px;
  text-align: center;
  color: #333;
  
  p {
    margin: 4px;
    font-size: 14px;
  }
  
  h5 {
    margin: 6px;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: normal;
  }
  
  &:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  }
`;

const CardWrapper = styled.div`
  @media (max-width: 960px) { {
    width: 50%;
  }
  @media (max-width: 560px) { {
    width: 100%;
  }
`;

const Item: React.FC<{
  id: number,
}> = ({ id }) => {
  const { data } = useQuery<ProductDetailsWrapper>(`productDetails${id}`, () =>
    fetch(
      `https://dev-api.danielwellington.com/frontend/products/${id}`
    ).then((res) => res.json())
  );

  const assets = transformAssets(data);

  return (
    <CardWrapper>
      {Object.keys(assets).length &&
        <a href={`/${id}`}>
          <ItemWrapper>
            <ItemImage assetsId={assets['main_image'].id} title={assets.name} />
            <h5>{assets.name}</h5>
            <p>{assets.price.value} {assets.price.unitAbbreviation}</p>
          </ItemWrapper>
        </a>
      }
    </CardWrapper>
  );
};

export default Item;
