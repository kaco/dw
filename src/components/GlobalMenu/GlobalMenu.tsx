import React from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { ReactComponent as ShoppingCartLogo } from '../../assets/svg/shopping-cart.svg';
import styled  from 'styled-components';

const Wrapper = styled.div`
  background: #0E2240;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  
  svg path {
    fill: #fff;
  }
  
  @media (max-width: 960px) {
    align-items: flex-start;
  }
`;

const MENU_LIST = [
  {title: 'New', link: '/new'},
  {title: 'All watches', link: '/all'},
  {title: 'Accessories', link: '/accessories'},
  {title: 'Watch straps', link: '/straps'},
  {title: 'Gift cards', link: '/gift-cards'},
  {title: 'Store locations', link: '/locations'},
];

const GlobalMenu: React.FC = () => (
  <Wrapper>
    <MobileMenu menuList={MENU_LIST} />
    <DesktopMenu menuList={MENU_LIST} />
    <ShoppingCartLogo />
  </Wrapper>
);

export default GlobalMenu;
