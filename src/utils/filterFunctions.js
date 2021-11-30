const filterNameBorrow = (array, name) => {
  return array.map((arr) => {
    return arr.nome_donoObj === name;
  });
};

const filterNameLend = (array, name) => {
  return array.map((arr) => {
    return arr.nome_responsavel_atual === name;
  });
};
