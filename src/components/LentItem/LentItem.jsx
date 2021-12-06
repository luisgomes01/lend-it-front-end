import { useLocation } from "react-router-dom";

import { Container } from "./LentItem.js";
import { IoClose } from "react-icons/io5";
import { useLend } from "../../contexts/lendContext.js";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";

import { format } from "date-fns";

import EditModal from "../Modals/EditModal/EditModal.jsx";

export default function LentItem({
  id,
  name_obj,
  name_resp,
  cellphone,
  email,
  date_lent,
  date_devolution,
  result_devolution,
}) {
  const { removeLend, giveBack } = useLend();
  const pathname = useLocation().pathname;

  return (
    <Container>
      <div className="container">
        <div className="header-container">
          <div className="name-object-container">
            <h2>{name_obj}</h2>
          </div>
          <div className="icons-container">
            <EditModal id={id} />
            <button
              className="icon-button"
              onClick={() => removeLend(id, pathname)}
            >
              <IoClose size={34} />
            </button>
          </div>
        </div>
        <div className="body-container">
          <div className="left-body-content">
            <div className="middle-line">
              <p>
                Está com: <span> {name_resp}</span>
              </p>
              <p>
                Contato: <span> {cellphone} </span>
              </p>
            </div>
            <div className="last-line">
              {!date_devolution ? (
                <p>
                  Emprestado em:{" "}
                  <span>{format(new Date(date_lent), "dd/MM/yyyy")}</span>
                </p>
              ) : (
                <p>
                  Será devolvido em:{" "}
                  <span>{format(new Date(date_devolution), "dd/MM/yyyy")}</span>
                </p>
              )}
            </div>
          </div>
          <div className="button-container">
            <ButtonSubmit submit={() => giveBack(id, pathname)}>
              Devolvido
            </ButtonSubmit>
          </div>
        </div>
      </div>
    </Container>
  );
}
