import { useState } from "react";
import { ImPlus } from "react-icons/im";

import { Container } from "./AddButton.js";

import AddModal from "../AddModal/AddModal.jsx";

function AddButton() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <AddModal showModal={showModal} setShowModal={setShowModal} />

      <Container>
        <button
          className="add-button"
          onClick={openModal}
          style={showModal ? { display: "none" } : { display: "flex" }}
        >
          <ImPlus />
        </button>
      </Container>
    </>
  );
}

export default AddButton;
