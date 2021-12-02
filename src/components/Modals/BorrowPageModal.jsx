import * as Api from "../../api/create-item";

import { useState } from "react";
import { useLend } from "../../contexts/lendContext";

import { MdClose } from "react-icons/md";
import { ImPlus } from "react-icons/im";

import { Container } from "./ModalsStyle.js";

import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";

export default function LendModal() {
  // Modal States
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  //Object lists
  const { lends, setLends } = useLend();
  const { setLate } = useLend();

  //Page fields
  const [object, setObject] = useState("");
  const [lentDate, setLentDate] = useState("");
  const [objectReturnDate, setObjectReturnDate] = useState("");
  const [whoLent, setWhoLent] = useState("");
  const [emailWhoLent, setEmailWhoLent] = useState("");
  const [cellphoneWhoLent, setCellphoneWhoLent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Api.createBorrow(
        object,
        whoLent,
        cellphoneWhoLent,
        emailWhoLent,
        lentDate,
        objectReturnDate
      );
      if (response.id) {
        const newList = [...lends, response];

        setLends(newList);
        setLate(newList);
        alert(
          "Novo Item '" + response.item_emprestado + "' criado com sucesso!!!"
        );

        //Fechando Modal depois do alerta
        setShowModal(false);

        // Setando campos para vazios de novo
        setObject("");
        setWhoLent("");
        setLentDate("");
        setObjectReturnDate("");
        setEmailWhoLent("");
        setCellphoneWhoLent("");
      }
    } catch (error) {
      alert("Item não criado. Por favor, verifique os campos obrigatórios");
    }
  };

  return (
    <Container>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header-all">
              <div className="modal-header">
                <h1>NOVO EMPRÉSTIMO</h1>
              </div>

              <button
                type="button"
                className="button-cancel"
                data-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                <MdClose />
              </button>
            </div>
            <form className="send-object">
              <div className="modal-body">
                <div className="modal-body-part">
                  <h3>INFORMAÇÕES DO OBJETO</h3>

                  <label htmlFor="object-name">
                    Nome do objeto emprestado <span>*</span>
                  </label>
                  <input
                    name="object-name"
                    type="text"
                    value={object}
                    placeholder="Digite nome do novo objeto..."
                    onChange={(e) => setObject(e.target.value)}
                    required
                  />

                  <label htmlFor="date-object-lend">
                    Quando foi emprestado?
                  </label>
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
                    Quando será devolvido?
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

                <div className="modal-body-part">
                  <h3>INFORMAÇÕES DE QUEM EMPRESTOU</h3>

                  <label htmlFor="nome-quem-pegou">
                    Nome de quem emprestou? <span>*</span>
                  </label>
                  <input
                    name="nome-quem-pegou"
                    type="text"
                    value={whoLent}
                    placeholder="Digite o nome de quem emprestou o novo objeto..."
                    onChange={(e) => {
                      setWhoLent(e.target.value);
                    }}
                    required
                  />

                  <label htmlFor="email-quem-pegou">
                    Qual o e-mail de quem emprestou?
                  </label>
                  <input
                    name="email-quem-pegou"
                    type="email"
                    value={emailWhoLent}
                    placeholder="Digite o e-mail de quem emprestou o novo objeto..."
                    onChange={(e) => {
                      setEmailWhoLent(e.target.value);
                    }}
                  />

                  <label htmlFor="celular-quem-pegou">
                    Qual o número de celular de quem emprestou? <span>*</span>
                  </label>
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
                </div>
              </div>

              <div className="modal-footer">
                <ButtonSubmit submit={onSubmit}>EMPRESTAR</ButtonSubmit>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="button-container">
        <button
          className="add-button"
          onClick={openModal}
          style={showModal ? { display: "none" } : { display: "flex" }}
        >
          <ImPlus />
        </button>
      </div>
    </Container>
  );
}
