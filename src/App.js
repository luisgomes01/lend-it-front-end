import Header from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import {useState, useEffect} from 'react'
import "./global.css"
function App() {

  return (
    <div className="App">
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;