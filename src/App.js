import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Tabela from './components/tabela/tabela'
import Form from './components/add/add'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Tabela></Tabela>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
