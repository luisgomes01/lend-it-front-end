import emptystate from '../../img/emptystate.svg'

import {Container} from './EmptyState.js'

function EmptyBorrowState() {
    return (
        <Container>
            <img src={emptystate} alt="Nenhum empréstimo listado" />
            <p>
                Adicione um <span>novo objeto</span> em sua lista
                <p>
                clicando no botão de adicionar 
                </p>
            </p>
        </Container>
    );
}

export default EmptyBorrowState;