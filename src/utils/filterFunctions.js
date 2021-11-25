const filterNameBorrow = (array, name) => {
  return array.map((arr)=> {
        return arr.nome_donoObj === name;
  });
}

const filterNameLend = (array, name) => {
  return array.map((arr)=> {
        return arr.nome_responsável_atual === name;
  });
}