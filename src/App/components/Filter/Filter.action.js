const filter = (state, { name }) => {
  let filter = [];
  if (name) {
    state.contacts.forEach((el) => {
      if (el.name.toLowerCase().includes(name.toLowerCase())) {
        filter.push(el);
      }
    });
  } else {
    filter = [];
  }
  return {
    type: "FILTER",
    payload: { filter: filter },
  };
};

export default { filter };
