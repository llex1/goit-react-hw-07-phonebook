import { createAction } from "@reduxjs/toolkit";

const add = (state, { id, name, number }) => {
  if (
    name &&
    !state.contacts
      .map((el) => el.name.toLowerCase())
      .includes(name.toLowerCase())
  ) {
    return {
      type: "ADD",
      payload: {
        contacts: [{ id, name, number }],
      },
    };
  } else {
    return {
      type: "ADD",
      payload: {
        contacts: [],
      },
    };
  }
};

// const alert = ({ isAlert, alertMessage }) => {
//   return {
//     type: "ALERT",
//     payload: {
//       isAlert,
//       alertMessage,
//     },
//   };
// };
const alert = createAction("ALERT", ({ isAlert, alertMessage }) => ({
  payload: {
    isAlert,
    alertMessage,
  },
}));

export default { add, alert };
