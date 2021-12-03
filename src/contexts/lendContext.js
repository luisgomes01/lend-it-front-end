import React, { createContext, useState, useContext } from "react";
import { destroyBorrow, destroyLent } from "../api/delete.js";
import { createBorrow, createLent } from "../api/create-item.js";
import { editBorrow, editLent } from "../api/edit-item.js";
import api from "../api/index.js";
const lendContext = createContext({});

export default function LendContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const [lends, setLends] = useState([]);
  const [late, setLate] = useState([]);

  const [object, setObject] = useState("");
  const [lentDate, setLentDate] = useState(new Date());
  const [objectReturnDate, setObjectReturnDate] = useState(null);
  const [whoLent, setWhoLent] = useState("");
  const [emailWhoLent, setEmailWhoLent] = useState("");
  const [cellphoneWhoLent, setCellphoneWhoLent] = useState("");

  const createLend = async (e) => {
    e.preventDefault();
    if (!handleInputs()) return;
    try {
      const response = await createLent(
        object,
        whoLent,
        cellphoneWhoLent,
        emailWhoLent,
        lentDate,
        objectReturnDate
      );
      if (response.id) {
        const newList = [...lends, response];

        setLends(newList);
        setLate(newList);
        alert(
          "Novo Item '" + response.item_emprestado + "' criado com sucesso!!!"
        );

        //Fechando Modal depois do alerta
        setShowModal(false);

        // Setando campos para vazios de novo
        setObject("");
        setWhoLent("");
        setLentDate(new Date());
        setObjectReturnDate(null);
        setEmailWhoLent("");
        setCellphoneWhoLent("");
      }
    } catch (error) {
      alert("Item não criado. Por favor, verifique os campos obrigatórios");
    }
  };

  const createBorrowLend = async (e) => {
    e.preventDefault();
    if (!handleInputs()) return;
    try {
      const response = await createBorrow(
        object,
        whoLent,
        cellphoneWhoLent,
        emailWhoLent,
        lentDate,
        objectReturnDate
      );
      if (response.id) {
        const newList = [...lends, response];

        setLends(newList);
        setLate(newList);
        alert(
          "Novo Item '" + response.item_emprestado + "' criado com sucesso!!!"
        );

        //Fechando Modal depois do alerta
        setShowModal(false);

        // Setando campos para vazios de novo
        setObject("");
        setWhoLent("");
        setLentDate(new Date());
        setObjectReturnDate(null);
        setEmailWhoLent("");
        setCellphoneWhoLent("");
      }
    } catch (error) {
      alert("Item não criado. Por favor, verifique os campos obrigatórios");
    }
  };

  const handleInputs = () => {
    if (object.trim().length === 0) {
      alert("Digite o nome do objeto para prosseguir!");
      return false;
    }

    if (
      lentDate.toString().trim().length > 0 &&
      objectReturnDate !== null &&
      objectReturnDate < lentDate
    ) {
      alert("A data de devolução não pode ser antes da data do empréstimo!");
      return false;
    }

    if (whoLent.trim().length === 0) {
      alert("Digite o nome de quem pegou o objeto!");
      return false;
    }

    if (whoLent.trim().length === 0) {
      alert("Digite o nome de quem pegou o objeto!");
      return false;
    }

    if (cellphoneWhoLent.length !== 11) {
      alert("Certifique-se de ter digitado o DDD e o número corretamente!");
      return false;
    }

    return true;
  };

  async function removeLend(id, pathname) {
    try {
      setLends(lends.filter((e) => e.id !== id));
      setLate(late.filter((e) => e.id !== id));

      if (pathname === "/emprestado") {
        await destroyBorrow({ id });
      } else {
        await destroyLent({ id });
      }

      alert("Removido com sucesso!");
    } catch (err) {
      alert(err.message);
    }
  }

  const findOneObject = async (id) => {
    try {
      const [response] = lends.filter((lent) => {
        return lent.id === id;
      });
      console.log(response.id);
      if (response) {
        setObject(response.item_emprestado);
        setWhoLent(response.nome_donoObj);
        setEmailWhoLent(response.contato_email_devolucao);
        setCellphoneWhoLent(response.contato_celular_devolucao);
        setLentDate(new Date(response.data_emprestimo));
        if (response.data_devolucao) {
          setObjectReturnDate(response.data_devolucao);
        }
      }
      return response.id;
    } catch (err) {
      alert(
        "Objeto não encontrado na base de dados, por favor, entre em contato com os administradores"
      );
    }
  };

  const updateItem = async (id, location) => {
    try {
      if (location === "/emprestado") {
        await editBorrow(
          id,
          object,
          whoLent,
          cellphoneWhoLent,
          emailWhoLent,
          lentDate,
          objectReturnDate
        );
        alert(object + " atualizado com sucesso!!!");
      } else {
        await editLent(
          id,
          object,
          whoLent,
          cellphoneWhoLent,
          emailWhoLent,
          lentDate,
          objectReturnDate
        );
        alert(object + "atualizado com sucesso!!!");
      }
    } catch (err) {
      alert(object + " não pode ser atualizado");
    }
  };

  return (
    <lendContext.Provider
      value={{
        lends,
        setLends,
        late,
        setLate,
        removeLend,
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
        showModal,
        setShowModal,
        createLend,
        createBorrowLend,
        updateItem,
        findOneObject,
      }}
    >
      {children}
    </lendContext.Provider>
  );
}

export const useLend = () => useContext(lendContext);
