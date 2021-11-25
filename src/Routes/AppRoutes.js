import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu/Menu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PerfilPage from "../pages/Perfil/PerfilPage.jsx";
import EmptyState from "../pages/EmptyState/EmptyState.jsx";
import "../global.css";

import ListLoanItemBorrow from "../components/ListComponents/ListBorrow/ListLoanItemBorrow.jsx";
import ListLateItemBorrow from "../components/ListComponents/ListBorrow/ListLateItemBorrow.jsx";
import ListLoanItemLoan from "../components/ListComponents/ListLoan/ListLoanItemLoan.jsx";
import ListLateItemLoan from "../components/ListComponents/ListLoan/ListLateItemLoan.jsx";

export default function AppRoutes() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/board" element={<EmptyState />} />
        <Route path="/profile" element={<PerfilPage />} />
        <Route path="/emprestado" element={<ListLoanItemBorrow />} />
      </Routes>
      <Footer />
    </>
  );
}
