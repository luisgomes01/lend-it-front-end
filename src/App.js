import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import WelcomePage from '../src/pages/Welcome/WelcomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
// import {useState, useEffect} from 'react'
import "./global.css"
function App() {

  return (
    <div className="App">
      <Menu />
      {/* <WelcomePage /> */}
      <LoginPage />
      <RegisterPage />
      <Footer />
    </div>
  );
}

export default App;