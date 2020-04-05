import React from 'react';

import CartIconContainer from '../cart-icon/cart-icon.container';
import CardDropdownContainer from '../cart-dropdown/cart-dropdown.container';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
} from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <CartIconContainer />
    </OptionsContainer>
    <CardDropdownContainer />
  </HeaderContainer>
);

export default Header;