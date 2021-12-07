const sortOldest = (array) => {
  return array.sort((a, b) => {
    const aDate = new Date(a.data_emprestimo);
    const bDate = new Date(b.data_emprestimo);
    return aDate.getTime() - bDate.getTime();
  });
};

const sortNewst = (array) => {
  return array.sort((a, b) => {
    const aDate = new Date(a.data_emprestimo);
    const bDate = new Date(b.data_emprestimo);
    return (bDate.getTime() - aDate.getTime())*(-1);
  });
};

const sorts = {
  oldest : sortOldest,
  newst: sortNewst
};

export default sorts;
