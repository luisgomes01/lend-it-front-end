import ListLoanItemLoan from "../../components/ListComponents/ListLoan/ListLoanItemLoan.jsx";
import ListLateItemLoan from "../../components/ListComponents/ListLoan/ListLateItemLoan.jsx";
import AddModal from "../../components/AddModal/AddModal.jsx";

export default function Lent() {
  return (
    <div>
      <ListLateItemLoan />
      <ListLoanItemLoan />
      <AddModal />
    </div>
  );
}
