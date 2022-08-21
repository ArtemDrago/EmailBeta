import React from 'react';
import { useTheme } from '../../hooks/useThems';
import BodyMail from '../contentBox/BodyMail';
import HeaderMail from '../header/HeaderMail';
import './style.css'

const HomePage: React.FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className='home'>
      <HeaderMail />
      <BodyMail />
    </div>
  );
}

export default HomePage;