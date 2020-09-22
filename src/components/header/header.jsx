import React from 'react';
import './header.css';
import onibus from './assets/onibus.png';

function header() {
  return (
    <div id='header'>
        <img src={onibus} alt="logo"/>
    </div>
  );
}

export default header;