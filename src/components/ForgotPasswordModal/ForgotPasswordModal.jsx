import { useState } from "react";
import { Container } from "./ForgotPasswordModal";

import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";

function ForgotPasswordModal() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <Container>
      {showModal && (
        <div class="modal" role="dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5> Esqueceu sua senha? </h5>
              <h5>Por favor, digite e-mail da conta no campo abaixo:</h5>
            </div>
            <div class="modal-body">
              <form>
                <div className="input">
                  <input type="text" placeholder="Digite seu e-mail" />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="button-cancel"
                    data-dismiss="modal"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <ButtonSubmit>Enviar</ButtonSubmit>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <button type="button" className="esquecer-senha" onClick={openModal}>
        Esqueceu a senha?
      </button>
    </Container>
  );
}

export default ForgotPasswordModal;
