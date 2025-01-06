import React from 'react';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen py-10 font-courier bg-gradient-to-br from-primary to-secondary">
      <Header />
      <About />
    </div>
  );
}

export default App;