import { createStore } from "redux";

const studentDetails = [];
const printReducer = (state = studentDetails, action) => {
  switch (action.type) {
    case "initialize":
      return { ...state, ...action.payload };

    case "add":
      console.log(action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const store = createStore(printReducer);

export default store;
