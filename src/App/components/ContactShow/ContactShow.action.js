const del = (state, { id }) => {
  const dataOut = {
    type: 'DEL',
    payload: {
      contacts: [],
      filter: [],
      id: id
    }
  };
  if (state.filter.length) {
    let idx = 0;
    state.filter.forEach((el, index) => {
      if (el.id === id) {
        idx = index;
      }
    });
    const newFilters = [...state.filter];
    newFilters.splice(idx, 1);
    dataOut.payload.filter = [...newFilters];
  }

  let idx = 0;
  state.contacts.forEach((el, index) => {
    if (el.id === id) {
      idx = index;
    }
  });
  const newContacts = [...state.contacts];
  newContacts.splice(idx, 1);
  dataOut.payload.contacts = [...newContacts];
  return dataOut;
};

export default { del };
