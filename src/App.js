import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';
import WelcomePage from '../src/pages/Welcome/WelcomePage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import RegisterPage from './pages/Register/RegisterPage.jsx';
import PerfilPage from './pages/Perfil/PerfilPage.jsx';
import LoanItem from './components/LoanItem/LoanItem.jsx';
import LateItem from './components/LateItem/LateItem.jsx';
// import {useState, useEffect} from 'react'
import "./global.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyBorrowState from './pages/EmptyState/EmptyState.jsx';
import AddButton from './components/AddButton/AddButton.jsx';
import ListLoanItem from './components/ListComponents/ListBorrow/ListLoanItem.jsx';

function App() {

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/board" element={<EmptyBorrowState />} />
          <Route path="/perfil" element={<PerfilPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <AddButton/>
        <LateItem/> */}
        <ListLoanItem/>
      {/* <LoanItem /> */}
    </div>
  );
}

export default App;