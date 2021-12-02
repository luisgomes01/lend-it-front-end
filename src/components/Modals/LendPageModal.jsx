import * as Api from "../../api/create-item";

import { useState } from "react";
import { useLend } from "../../contexts/lendContext";

import { MdClose } from "react-icons/md";
import { ImPlus } from "react-icons/im";

import { Container } from "./ModalsStyle.js";

import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { pt } from "date-fns/esm/locale";

export default function BorrowModal() {
  const todayNow = {};
  //Modal States
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  //Object list
  const { lends, setLends } = useLend();
  const { setLate } = useLend();

  //Page fields
  const [object, setObject] = useState("");
  const [lentDate, setLentDate] = useState(new Date());
  const [objectReturnDate, setObjectReturnDate] = useState(null);
  const [whoLent, setWhoLent] = useState("");
  const [emailWhoLent, setEmailWhoLent] = useState("");
  const [cellphoneWhoLent, setCellphoneWhoLent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(typeof(objectReturnDate))
    console.log(typeof(lentDate))
    if (!handleInputs()) return;

    try {
      const response = await Api.createLent(
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

        setEmailWhoLent("");
        setCellphoneWhoLent("");
      }
    } catch (error) {
      alert("Item não criado. Por favor, verifique os campos obrigatórios");
    }
  };

  const handleInputs = () => {
    if (object.trim().length === 0) {
      alert("Digite o nome do objeto para prosseguir!");
      return false;
    }

    if (lentDate.toString().trim().length > 0 && objectReturnDate !== null && objectReturnDate < lentDate) {
      alert("A data de devolução não pode ser antes da data do empréstimo!");
      return false;
    }

    if (whoLent.trim().length === 0) {
      alert("Digite o nome de quem pegou o objeto!");
      return false;
    }

    if (whoLent.trim().length === 0) {
      alert("Digite o nome de quem pegou o objeto!");
      return false;
    }

    if (cellphoneWhoLent.length !== 11) {
      alert("Certifique-se de ter digitado o DDD e o número corretamente!");
      return false;
    }

    return true;
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
                    Quando será devolvido?
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

                <div className="modal-body-part">
                  <h3>INFORMAÇÕES DE QUEM PEGOU</h3>

                  <label htmlFor="nome-quem-pegou">
                    Quem pegou? <span>*</span>
                  </label>
                  <input
                    name="nome-quem-pegou"
                    type="text"
                    value={whoLent}
                    placeholder="Digite o nome de quem pegou o novo objeto emprestado..."
                    onChange={(e) => {
                      setWhoLent(e.target.value);
                    }}
                    required
                  />

                  <label htmlFor="email-quem-pegou">
                    Qual o e-mail de quem pegou?
                  </label>
                  <input
                    name="email-quem-pegou"
                    type="email"
                    value={emailWhoLent}
                    placeholder="Digite e-mail de quem pegou o novo objeto emprestado..."
                    onChange={(e) => {
                      setEmailWhoLent(e.target.value);
                    }}
                  />

                  <label htmlFor="celular-quem-pegou">
                    Qual o número de celular de quem pegou? <span>*</span>
                  </label>
                  <input
                    name="celular-quem-pegou"
                    type="text"
                    value={cellphoneWhoLent}
                    placeholder="Apenas números (com DDD)"
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
