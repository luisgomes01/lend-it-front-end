import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "./EditModal";
import { MdClose } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

import ButtonSubmit from "../../ButtonSubmit/ButtonSubmit.jsx";

export default function EditModal() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const [object, setObject] = useState("");
  const [lentDate, setLentDate] = useState("");
  const [objectReturnDate, setObjectReturnDate] = useState("");
  const [whoLent, setWhoLent] = useState("");
  const [emailWhoLent, setEmailWhoLent] = useState("");
  const [cellphoneWhoLent, setCellphoneWhoLent] = useState("");

  const location = useLocation();
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
                  {location.pathname === "/emprestei"
                    ? "Está com: "
                    : "Pertence a: "}
                </label>
                <input
                  name="object-name"
                  type="text"
                  value={whoLent}
                  placeholder="Digite nome do novo objeto..."
                  onChange={(e) => setWhoLent(e.target.value)}
                  required
                />

                {/* Data de Empréstimo */}
                <label htmlFor="date-object-lend">Emprestado em:</label>
                <input
                  name="date-object-lend"
                  type="text"
                  value={lentDate}
                  placeholder="Data de quando foi emprestado..."
                  onChange={(e) => {
                    setLentDate(e.target.value);
                  }}
                  required
                />

                <label htmlFor="data-devolucao-objeto">
                  Será devolvido em:
                </label>
                <input
                  name="data-devolucao-objeto"
                  type="text"
                  value={objectReturnDate}
                  placeholder="Data de Devolução..."
                  onChange={(e) => {
                    setObjectReturnDate(e.target.value);
                  }}
                />
              </div>
              <div className="right-modal-content">
                {/* Contato - Email */}
                <label htmlFor="email-quem-pegou">Contato - email:</label>
                <input
                  name="email-quem-pegou"
                  type="email"
                  value={emailWhoLent}
                  placeholder="Digite o e-mail de quem emprestou o novo objeto..."
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
                  <ButtonSubmit>Salvar</ButtonSubmit>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <button className="icon-button" onClick={openModal}>
        <FiEdit2 size={24} />
      </button>
    </Container>
  );
}
