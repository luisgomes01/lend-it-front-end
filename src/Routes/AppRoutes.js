import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Menu from "../components/Menu/Menu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PerfilPage from "../pages/Perfil/PerfilPage.jsx";
import EmptyState from "../pages/EmptyState/EmptyState.jsx";
import "../global.css";

import ListLoanItemBorrow from "../components/ListComponents/ListBorrow/ListLoanItemBorrow.jsx";
import ListLateItemBorrow from "../components/ListComponents/ListBorrow/ListLateItemBorrow.jsx";
import ListLoanItemLoan from "../components/ListComponents/ListLoan/ListLoanItemLoan.jsx";
import ListLateItemLoan from "../components/ListComponents/ListLoan/ListLateItemLoan.jsx";
=======

import "../global.css";

import Menu from "../components/Menu/Menu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ProfilePage from "../pages/Profile/ProfilePage.jsx";
import EmptyState from "../pages/EmptyState/EmptyState.jsx";
import Lent from "../pages/Lent/Lent.jsx";
>>>>>>> 5b0f978c6dafd65a781c67adce3989ef04cf5884

export default function AppRoutes() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/emprestei" element={<Lent />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/emprestado" element={<EmptyState />} />
      </Routes>
      <Footer />
    </>
  );
}
