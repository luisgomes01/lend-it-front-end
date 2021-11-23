import { Container } from "./LateItem.js";
import {IoClose} from 'react-icons/io5';
import {FiEdit2} from 'react-icons/fi';

import ButtonSubmit from '../ButtonSubmit/ButtonSubmit.jsx';

function LateItem({
        id,
        name_obj,
        name_resp, 
        celphone,
        email,
        date_loan,
        date_devolution,
        result_devolution
}) {
    return ( 
        <Container>
            <div className="container">
                <div className="header-container">
                    <h2>{name_obj}</h2>
                    <div className="icons-container">
                        <button>
                            <FiEdit2 size={24}/>
                        </button>
                        <button>
                            <IoClose size={34}/> 
                        </button>
                    </div>
                </div>
                <div className="body-container">
                    <p>Está com: <span>{name_resp}</span></p>
                    <p>Contato: <span> {celphone}</span></p>
                    <p>Atrasado desde: <span>{date_devolution}</span></p>
                </div>
                <div className="footer-container">
                    <ButtonSubmit>
                        Devolvido
                    </ButtonSubmit>
                </div>
            </div>
        </Container>
     );
}

export default LateItem;