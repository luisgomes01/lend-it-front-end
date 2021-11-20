import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';
import WelcomePage from '../src/pages/Welcome/WelcomePage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import RegisterPage from './pages/Register/RegisterPage.jsx';
// import {useState, useEffect} from 'react'
import "./global.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyBorrowState from './components/EmptyState/EmptyState.jsx';
import AddButton from './components/AddButton/AddButton.jsx';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
      <AddButton/>
      <EmptyBorrowState/>
      <EmptyBorrowState/>
      <EmptyBorrowState/>
      <EmptyBorrowState/>
      
       
      {/* <LoginPage /> */}
      {/* <Route path="/register" component={RegisterPage} /> */}
      
      <Footer />
    </div>
  );
}

export default App;