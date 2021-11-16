import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import WelcomePage from '../src/pages/Welcome/WelcomePage';
import LoginPage from './pages/Login/LoginPage';
// import {useState, useEffect} from 'react'
import "./global.css"
function App() {

  return (
    <div className="App">
      <Menu />
      <LoginPage />
      {/* <WelcomePage /> */}
      <Footer />
    </div>
  );
}

export default App;