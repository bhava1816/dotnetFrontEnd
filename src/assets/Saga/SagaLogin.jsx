import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCESS } from "./SagaTypes";
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* loginWork(action) {
  try {
    // Wrap axios.post in a function to preserve context
    const response = yield call(() =>
      axios.post(
        "https://localhost:7152/api/login",
        action.payload.data, // this should be an object
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    );

    console.log(response);

    yield put({
      type: LOGIN_SUCESS,
      payload: response.data
    });

    sessionStorage.setItem("AccessToken", response.data.accessToken);
    // action.payload.navigate('/DashBroad');

  } catch (err) {
    console.error(err.response?.data || err.message);
    yield put({
      type: LOGIN_FAILURE,
      payload: "API failed"
    });
  }
}

export default function* LoginWork() {
  yield takeLatest(LOGIN_REQUEST, loginWork);
}