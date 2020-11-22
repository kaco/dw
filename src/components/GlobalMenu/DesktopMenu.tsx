import React from 'react';
import { ReactComponent as DWLogo } from '../../assets/svg/dw-logo.svg';
import styled  from 'styled-components';
import { MenuItem } from '../../globalTypes';

const Wrapper = styled.div`
  background: #0E2240;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0.8;
  
  svg path {
    fill: #fff;
  }
  
  @media (max-width: 960px) {
    display: none;
  }
`;

const MenuListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
`;

const MenuListItem = styled.li`
  text-transform: uppercase;
  list-style: none;
  color: #fff;
  padding: 0 8px;
  
  a {
    color: #fff;
  }
`;

const GlobalMenu: React.FC<{
  menuList: MenuItem[],
}> = ({ menuList }) => (
  <Wrapper>
    <a href='/'><DWLogo /></a>
    <MenuListWrapper>
      {menuList.map(menu => (
        <MenuListItem key={menu.title}>
          <a href={menu.link}>{menu.title}</a>
        </MenuListItem>
      ))}
    </MenuListWrapper>
  </Wrapper>
);

export default GlobalMenu;
