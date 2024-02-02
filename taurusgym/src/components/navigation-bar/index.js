import React, { useState } from 'react';
import './styles.css';

const NavigationBar = () => {




  return (
    <div className ='container'>

      <div className='container-logo'>
        <img id='logo' src="/logo01.png" alt="logo" />
      </div>


      <div className='options'>
        <ul className='menu'>
          <li><button className='btn-nav'>TRAPÉZIO</button></li>
          <li><button className='btn-nav'>OMBRO</button></li>
          <li><button className='btn-nav'>PEITO</button></li>
          <li><button className='btn-nav'>BRAÇO</button></li>
          <li><button className='btn-nav'>ABDÓMEN</button></li>
          <li><button className='btn-nav'>COSTAS</button></li>
          <li><button className='btn-nav'>PERNA</button></li>
        </ul>
      </div>
      
    </div>
  );
};

export default NavigationBar;
