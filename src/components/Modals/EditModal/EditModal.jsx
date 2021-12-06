import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { pt } from "date-fns/esm/locale";
import { MdClose } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

import { Container } from "./EditModal";
import ButtonSubmit from "../../ButtonSubmit/ButtonSubmit.jsx";
import { useLend } from "../../../contexts/lendContext";

export default function EditModal({ id }) {
  const pathname = useLocation().pathname;

  const [showModal, setShowModal] = useState(false);
  const openInfoModal = () => {
    setShowModal(true);
  };

  const {
    object,
    setObject,
    lentDate,
    setLentDate,
    objectReturnDate,
    setObjectReturnDate,
    whoLent,
    setWhoLent,
    emailWhoLent,
    setEmailWhoLent,
    cellphoneWhoLent,
    setCellphoneWhoLent,
    updateItem,
    findOneObject,
  } = useLend();

  const onSubmit = (e) => {
    e.preventDefault();
    updateItem(id, pathname);
    setShowModal(false);
  };

  async function returnLendId() {
    console.log(await findOneObject(id));
  }

  return (
    <Container>
      {showModal && (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-header">
              <div className="modal-title">
                <input
                  type="text"
                  value={object}
                  onChange={(e) => setObject(e.target.value)}
                  required
                />
              </div>
              <button
                type="button"
                className="button-cancel"
                data-dismiss="modal"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <MdClose />
              </button>
            </div>
            <div className="modal-body">
              <div className="left-modal-content">
                {/* Nome Responsável atual */}
                <label htmlFor="object-name">
                  {pathname === "/emprestei"
                    ? "Está com: "
                    : "Pertence a: "}
                </label>
                <input
                  name="object-name"
                  type="text"
                  value={whoLent}
                  onChange={(e) => setWhoLent(e.target.value)}
                  required
                />

                {/* Data de Empréstimo */}
                <label htmlFor="date-object-lend">Emprestado em:</label>
                <DatePicker
                  selected={lentDate}
                  onChange={(date) => setLentDate(date)}
                  locale={pt}
                  showTimeSelect
                  timeFormat="p"
                  timeIntervals={15}
                  dateFormat="Pp"
                />

                <label htmlFor="data-devolucao-objeto">
                  Será devolvido em:
                </label>

                <DatePicker
                  selected={objectReturnDate}
                  onChange={(date) => setObjectReturnDate(date)}
                  locale={pt}
                  showTimeSelect
                  timeFormat="p"
                  timeIntervals={15}
                  dateFormat="Pp"
                />
              </div>
              <div className="right-modal-content">
                {/* Contato - Email */}
                <label htmlFor="email-quem-pegou">Contato - email:</label>
                <input
                  name="email-quem-pegou"
                  type="email"
                  value={emailWhoLent}
                  onChange={(e) => {
                    setEmailWhoLent(e.target.value);
                  }}
                />
                {/* Contato - Celular */}
                <label htmlFor="celular-quem-pegou">Contato - celular:</label>
                <input
                  name="celular-quem-pegou"
                  type="text"
                  value={cellphoneWhoLent}
                  placeholder="Digite celular de quem pegou o novo objeto emprestado..."
                  onChange={(e) => {
                    setCellphoneWhoLent(e.target.value);
                  }}
                  required
                />

                <div className="save-button">
                  <ButtonSubmit submit={onSubmit}>Salvar</ButtonSubmit>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        className="icon-button"
        onClick={() => {
          openInfoModal();
          returnLendId(id);
        }}
      >
        <FiEdit2 size={24} />
      </button>
    </Container>
  );
}
