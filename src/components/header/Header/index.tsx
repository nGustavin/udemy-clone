import React from 'react';
import { MdSearch, MdShoppingCart } from 'react-icons/md'

import { Container } from './styles';
import udemyLogo from '../../../assets/images/logo-coral.svg'

// logo da udemy,categories, input, udemy for business, teach on udemy,carrinho de compra, log in, sign up 

const Header: React.FC = () => {
  return (
    <Container>
      <img src={udemyLogo} alt="logo"/>
      <a href="">Categories</a>
      <MdSearch size={20} fill={'rgba(0, 0, 0, 0.7)'} style={{marginRight: '-75px', zIndex:10}} />
      <input type="text" placeholder="Search for anything"/>
      <a href="">Udemy For Business</a>
      <a href="">Teach on Udemy</a>
      <MdShoppingCart size={20}/>
      <button type="submit">Log in</button>
      <button type="submit">Sign up</button>
    </Container>
  );
};

export default Header;
