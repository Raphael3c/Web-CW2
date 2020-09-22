import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Render from './components/viagens/render'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Render></Render>
      <Footer></Footer>
    </div>
  );
}

export default App;
