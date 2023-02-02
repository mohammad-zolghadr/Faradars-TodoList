const addWork = (data) => {
  return { type: "ADD_WORK", payload: data };
};

const removeWork = (data) => {
  return { type: "REMOVE_WORK", payload: data };
};

const doneWork = (data) => {
  return { type: "DONE_WORK", payload: data };
};

const undoneWork = (data) => {
  return { type: "UNDONE_WORK", payload: data };
};

const getAllWork = () => {
  return { type: "GET_ALL_WORK" };
};

export { addWork, removeWork, doneWork, undoneWork, getAllWork };
