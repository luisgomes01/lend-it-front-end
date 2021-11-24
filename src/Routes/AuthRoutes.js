import { Routes, Route } from "react-router-dom";
import Menu from "../components/Menu/Menu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import WelcomePage from "../pages/Welcome/WelcomePage.jsx";
import RegisterPage from "../pages/Register/RegisterPage.jsx";
import LoginPage from "../pages/Login/LoginPage.jsx";

export default function AuthRoutes() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}
