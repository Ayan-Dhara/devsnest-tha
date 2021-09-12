import {SET_EMAIL} from "../keywards";

const setEmail = (username) => {
  return {
    type: SET_EMAIL,
    payload: username
  }
}

export default setEmail;
