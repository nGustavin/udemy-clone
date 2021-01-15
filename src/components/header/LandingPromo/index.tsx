import React from 'react';
import {BsDisplay} from 'react-icons/bs'
import {FaMedal} from 'react-icons/fa'
import {IoIosInfinite} from 'react-icons/io'


import { Container, SearchBox } from './styles';
import promoImage from '../../../assets/images/ladingImage.jpg'

const LandingPromo: React.FC = () => {
  return (
    <Container>
      <img src={promoImage} alt="promoImage"/>

      <SearchBox>
        <h1>Last day to save!</h1>
        <p>Learn anywhere from any device. Take a course for as low as R$22.90.</p>
        <input type="text" placeholder="What do you want to learn?"/>
      </SearchBox>

      <div className="footerButtons">
        
        <div>
          <div className="simbol">
            <BsDisplay size={18} fill={'#0f7c90'}/>
          </div>
          <div className="Info">
            <span>130,000 online courses</span>
            <h1>Enjoy a variety of fresh topics</h1>
          </div>
        </div>

        <div>
          <div className="simbol">
          <FaMedal size={18} fill={'#0f7c90'}/>
          </div>
          <div className="Info">
            <span>Expert instruction</span>
            <h1>Find the right instructor for you</h1>
          </div>
        </div>

        <div>
          <div className="simbol">
          <IoIosInfinite size={24} fill={'#0f7c90'}/>
          </div>
          <div className="Info">
            <span>Lifetime access</span>
            <h1>Learn on your schedule</h1>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default LandingPromo;
