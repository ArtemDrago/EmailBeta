import React from 'react';
import BodyMail from '../contentBox/BodyMail';
import HeaderMail from '../header/HeaderMail';
import './style.css'

const HomePage: React.FC = () => {

  return (
    <div className='home'>
      <HeaderMail />
      <BodyMail />
    </div>
  );
}

export default HomePage;