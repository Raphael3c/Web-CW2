import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Tabela from './components/tabela/tabela'
import Form from './components/form/form'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
      <Tabela></Tabela>
      <Footer></Footer>
    </div>
  );
}

export default App;
