import {useState, useParams} from 'react'
import {ImPlus} from 'react-icons/im'

import {Container} from './AddButton.js'

import ButtonSubmit from '../ButtonSubmit/ButtonSubmit.jsx'
import AddModalLend from '../AddModal/AddModalLend.jsx';

function AddButton() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };
    return (
        <>
        <AddModalLend showModal={showModal} setShowModal={setShowModal}/>

        <Container>
            <button className="add-button" onClick={openModal} style={showModal ? {display: 'none'} : {display: 'flex'}}>
                <ImPlus />
            </button>
        </Container>
        </>
    );
}

export default AddButton;