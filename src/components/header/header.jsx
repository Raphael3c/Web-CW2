import React from 'react';
import './header.css';
import onibus from './assets/onibus.png';

function header() {
  return (
    <header>
        <img src={onibus} alt="logo"/>
    </header>
  );
}

export default header;