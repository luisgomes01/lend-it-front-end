import * as Api from "../../api/edit-perfil";

import { useState } from 'react';
import {FiEdit2} from 'react-icons/fi'
import {IoClose} from 'react-icons/io5'

import perfilimg from '../../img/perfilimg.png'
import { Container } from './PerfilPage.js'

import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit.jsx'
import Title from "../../components/Title/Title.jsx";

function Perfil() {
    const [active, setActive] = useState(false);
    const [inputkey, setInputKey] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const appear = (input) => {
        setActive(!active);
        setInputKey(input);
    }

    const onSubmit = async (e) =>{ 
        e.preventDefault();
        try{
            const id = localStorage.getItem('@lendit/user_id');
            if( email === undefined ){
                const response = await Api.editName(id, name);
            } else if (name === undefined ){
                const response = await Api.editName(id, email);
            }
            
        } catch(error){
            alert(error.message);
        }
    }

    return ( 
    <Container>
        <Title>PERFIL</Title>
        <div className="perfil-container">
            <div className="header-perfil-container">
                <img src={perfilimg} alt="LEND IT IMG" />
            </div>
            <div className="body-perfil-container">
                <form className="edit">
                    {/* Nome */}
                    <div className="edit-part">
                        <div className="edit-part-section">
                            <p> Nome: <span>Mylena Rodrigues</span></p>
                            <button type="button" onClick = {() => appear("nome")}>
                                {((active) && (inputkey==="nome")) ? <IoClose size={20}/> : <FiEdit2/>}
                            </button>
                        </div>
                        <div className="input-name" 
                        style={((active) && (inputkey==="nome")) ?  {display: 'flex'} : {display:'none'}}>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Escreva seu novo Nome"/>
                        </div>
                    </div>

                    {/* E-mail */}
                    <div className="edit-part">
                        <div className="edit-part-section">
                            <p>E-mail: <span> mylenawz@yahoo.com</span></p> 
                            <button type="button" onClick = {() => appear("email")}>
                                {((active) && (inputkey==="email")) ? <IoClose size={20}/> : <FiEdit2/>}
                            </button>
                        </div>

                        <div className="input-email" 
                        style={((active) && (inputkey==="email")) ?  {display: 'flex'} : {display:'none'}}>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Escreva seu novo e-mail"/>
                        </div>
                    </div>
                    
                    {/* Senha */}
                    <div className="edit-part">
                        <div className="edit-part-section">
                            <p>Senha: <span> *******</span></p>
                            <button type="button" onClick = {() => appear("senha")}>
                                {((active) && (inputkey==="senha")) ? <IoClose size={20}/> : <FiEdit2/>}
                            </button>
                        </div>

                        <div className="alert-senha" 
                        style={((active) && (inputkey==="senha")) ?  {display: 'flex'} : {display:'none'}}>
                            <div className="alert">
                                <p>
                                    Atenção!
                                </p>
                                <p>O Link para mudança de senha foi enviado ao seu e-mail</p>
                            </div>
                        </div>
                    </div>
                    <div className="edit-footer">
                        <ButtonSubmit submit={onSubmit}>
                            Alterar
                        </ButtonSubmit>
                    </div>
                </form>
            </div>
        </div>               
    </Container> 
    );
}

export default Perfil;