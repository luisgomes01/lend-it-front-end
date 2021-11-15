import Header from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import WelcomePage from '../src/pages/Welcome/WelcomePage';
import {useState, useEffect} from 'react'
import "./global.css"
function App() {

  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <Footer />
    </div>
  );
}

export default App;