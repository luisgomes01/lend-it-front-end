import { Container } from "./LentItem.js";
import { IoClose } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { useLend } from "../../contexts/lendContext.js";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";

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
  const { removeLend } = useLend();
  return (
    <Container>
      <div className="container">
        <div className="header-container">
          <div className="name-object-container">
            <h2>{name_obj}</h2>
          </div>
          <div className="icons-container">
            <button>
              <FiEdit2 size={24} />
            </button>
            <button onClick={() => removeLend(id)}>
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
                  Emprestado em: <span>{date_lent}</span>
                </p>
              ) : (
                <p>
                  Será devolvido em: <span> {date_devolution}</span>
                </p>
              )}
            </div>
          </div>
          <div className="button-container">
            <ButtonSubmit>Devolvido</ButtonSubmit>
          </div>
        </div>
      </div>
    </Container>
  );
}
