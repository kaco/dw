import React from 'react';
import { ReactComponent as HamburgerIconLogo } from '../../assets/svg/hamburger.svg';
import styled  from 'styled-components';
import { MenuItem } from '../../globalTypes';

const Wrapper = styled.div`
  @media (min-width: 960px) {
    display: none;
  }
`;

const MenuListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const MenuListItem = styled.li`
  text-transform: uppercase;
  list-style: none;
  color: #fff;
  padding: 8px 0;
  
  a {
    color: #fff;
  }
`;

const GlobalMenu: React.FC<{
  menuList: MenuItem[],
}> = ({ menuList}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <button onClick={toggleMenu}><HamburgerIconLogo /></button>
      {isMenuOpen &&
        <MenuListWrapper>
          {menuList.map(menu => (
            <MenuListItem key={menu.title}>
              <a href={menu.link}>{menu.title}</a>
            </MenuListItem>
          ))}
        </MenuListWrapper>
      }
    </Wrapper>
  )
};

export default GlobalMenu;
