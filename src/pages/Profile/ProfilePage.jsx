import * as Api from "../../api/edit-profile";

import { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import profileimg from "../../img/profileimg.png";
import { Container } from "./ProfilePage.js";

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit.jsx";
import Title from "../../components/Title/Title.jsx";

function ProfilePage() {
  const [active, setActive] = useState(false);
  const [inputkey, setInputKey] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const appear = (input) => {
    setActive(!active);
    setInputKey(input);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await Api.edit({ name, email });
      alert("Atualizado com sucesso!");
    } catch (error) {
      alert(error.message);
    }
    setActive(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Api.infoUser();
        setName(response.nome);
        setEmail(response.email);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Title>PERFIL</Title>
      <div className="profile-container">
        <div className="header-profile-container">
          <img src={profileimg} alt="LEND IT IMG" />
        </div>
        <div className="body-profile-container">
          <form className="edit">
            {/* Nome */}
            <div className="edit-part">
              <div className="edit-part-section">
                <p>
                  {" "}
                  Nome: <span>{name}</span>
                </p>
                <button type="button" onClick={() => appear("name")}>
                  {active && inputkey === "name" ? (
                    <IoClose size={20} />
                  ) : (
                    <FiEdit2 />
                  )}
                </button>
              </div>
              <div
                className="input-name"
                style={
                  active && inputkey === "name"
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Escreva seu novo Nome"
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="edit-part">
              <div className="edit-part-section">
                <p>
                  E-mail: <span> {email}</span>
                </p>
                <button type="button" onClick={() => appear("email")}>
                  {active && inputkey === "email" ? (
                    <IoClose size={20} />
                  ) : (
                    <FiEdit2 />
                  )}
                </button>
              </div>

              <div
                className="input-email"
                style={
                  active && inputkey === "email"
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Escreva seu novo e-mail"
                />
              </div>
            </div>
            <div className="edit-footer">
              <ButtonSubmit submit={onSubmit}>Alterar</ButtonSubmit>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ProfilePage;
