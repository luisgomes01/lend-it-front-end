import { Route, Routes } from "react-router-dom";

import "../global.css";

import Menu from "../components/Menu/Menu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ProfilePage from "../pages/Profile/ProfilePage.jsx";
import EmptyState from "../pages/EmptyState/EmptyState.jsx";
import Lent from "../pages/Lent/Lent.jsx";
import Borrow from "../pages/Borrow/Borrow.jsx";

export default function AppRoutes() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/emprestei" element={<Lent />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/emprestado" element={<Borrow />} />
      </Routes>
      <Footer />
    </>
  );
}
