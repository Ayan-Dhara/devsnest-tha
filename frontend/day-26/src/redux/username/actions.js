import {SET_USERNAME} from "../keywards";

const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username
  }
}

export default setUsername;
