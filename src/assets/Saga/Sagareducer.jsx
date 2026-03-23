import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "./SagaTypes";

let initialState = {
  loading: false,
  error: null,
  user: null
};

const Sagareducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null, user: null };

    case LOGIN_SUCESS:
      return { ...state, loading: false, user: action.payload };

    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default Sagareducer;