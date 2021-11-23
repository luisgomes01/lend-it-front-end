import { Container } from "./LateItem.js";
import {IoClose} from 'react-icons/io5';
import {FiEdit2} from 'react-icons/fi';

import ButtonSubmit from '../ButtonSubmit/ButtonSubmit.jsx';

function LateItem() {
    return ( 
        <Container>
            <div className="container">
                <div className="header-container">
                    <h2>Blusa Vermelha</h2>
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
                    <p>Está com: <span> Mylena Rodrigues</span></p>
                    <p>Contato: <span> (81) 98682-6693 </span></p>
                    <p>Será devolvido em: <span> 22/11/2021</span></p>
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