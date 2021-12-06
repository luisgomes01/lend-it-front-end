import { useLocation } from "react-router-dom";
import { useLend } from "../../contexts/lendContext.js";
import { format } from "date-fns";
import { Container } from "./LateItem.js";
import { IoClose } from "react-icons/io5";


import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";
import EditModal from "../Modals/EditModal/EditModal.jsx";

function LateItem({
  id,
  name_obj,
  name_resp,
  cellphone,
  email,
  date_devolution,
  result_devolution,
}) {
  const { removeLend, giveBack } = useLend();
  const pathname = useLocation().pathname;
  return (
    <Container>
      <div className="late-container">
        <div className="header-container">
          <h2>{name_obj}</h2>
          <div className="icons-container">
            <button>
              <EditModal id = {id}/>
            </button>
            <button onClick={() => removeLend(id, pathname)}>
              <IoClose size={34} />
            </button>
          </div>
        </div>
        <div className="body-container">
          <p>
            Está com: <span>{name_resp}</span>
          </p>
          <p>
            Contato: <span> {cellphone}</span>
          </p>
          <p>
            Atrasado desde:{" "}
            <span>{format(new Date(date_devolution), "dd/MM/yyyy")}</span>
          </p>
        </div>
        <div className="footer-container">
          <ButtonSubmit>Devolvido</ButtonSubmit>
        </div>
      </div>
    </Container>
  );
}

export default LateItem;
