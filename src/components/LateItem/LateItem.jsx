import { Container } from "./LateItem.js";
import { IoClose } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";

import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";
import { useLend } from "../../contexts/lendContext.js";
import { format } from "date-fns";
function LateItem({
  id,
  name_obj,
  name_resp,
  cellphone,
  email,
  date_devolution,
  result_devolution,
}) {
  const { removeLend } = useLend();

  return (
    <Container>
      <div className="late-container">
        <div className="header-container">
          <h2>{name_obj}</h2>
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
