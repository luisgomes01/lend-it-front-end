import { Container } from "./LentItem.js";
import { IoClose } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";

import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";

function LentItem({
  id,
  name_obj,
  name_resp,
  cellphone,
  email,
  date_lent,
  date_devolution,
  result_devolution,
}) {
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
            <button>
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
      {/* <div className="container">
                    <div className="lef-info-content">
                        <h3>Blusa Vermelha</h3>
                        <p>Está com: <span> Mylena Rodrigues</span></p>
                        <p>Será devolvido em: <span> 22/11/2021</span></p>
                    </div>
                    
                    <div className="right-info-content">
                        <p>Contato: <span> (81) 98682-6693 </span></p>    
                    </div>
                <div className="buttons-container">
                    <div className="icons-container">
                        <IoClose size={30}/> 
                        <FiEdit2 size={24}/>
                    </div>
                    <ButtonSubmit>
                        Devolvido
                    </ButtonSubmit>
                </div>
            </div>     */}
    </Container>
  );
}

export default LentItem;
