import { MdClose } from "react-icons/md";
import { ImPlus } from "react-icons/im";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { pt } from "date-fns/esm/locale";

import { useLend } from "../../contexts/lendContext";
import { Container } from "./ModalsStyle.js";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";

export default function BorrowModal() {
  //Object list, Page Fields, Modal
  const {
    showModal,
    setShowModal,
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
    createLend,
  } = useLend();

  const openModal = () => {
    setShowModal(true);
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
                onClick={() => {
                  setShowModal(false);
                  setObject("");
                  setWhoLent("");
                  setLentDate(new Date());
                  setObjectReturnDate("");
                  setEmailWhoLent("");
                  setCellphoneWhoLent("");
                }}
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
                    placeholder="data"
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
                <ButtonSubmit submit={createLend}>EMPRESTAR</ButtonSubmit>
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
