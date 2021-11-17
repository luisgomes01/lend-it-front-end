import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';
import WelcomePage from '../src/pages/Welcome/WelcomePage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import RegisterPage from './pages/Register/RegisterPage.jsx';
// import {useState, useEffect} from 'react'
import "./global.css"

function App() {

  return (
    <div className="App">
      <Menu />
      <WelcomePage />
      {/* <LoginPage />
      <RegisterPage /> */}
      <Footer />
    </div>
  );
}

export default App;