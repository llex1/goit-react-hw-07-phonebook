const KEY = "AleksaHrevtsova";

const postman = (store) => (next) => (action) => {
  // console.log(action);
  if (action.type === "AVE") {
    fetch(`https://llex.one/api/?key=${KEY}`)
      .then((data) => data.json())
      .then((json) => {
        action = {
          type: "ADD",
          payload: {
            contacts: [...json],
          },
        };
        next(action);
      });
  } else if (action.type === "ADD" && action.payload.contacts.length) {
    fetch(`https://llex.one/api/?key=${KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload.contacts),
    })
    .then(next(action));
  } else if (action.type === "DEL"){
    fetch(`https://llex.one/api/?key=${KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ marker: 'del', id: action.payload.id}),
    })
    .then(next(action));
  } else {
    next(action);
  }
};

export default postman
