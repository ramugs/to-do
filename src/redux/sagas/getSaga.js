import { findAllUserApi, findOneUserApi } from "../apis/getApis";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FIND_ALL_USER,
  FIND_ONE_USER,
  USERDETAILS_FAILED,
  USERDETAILS_LOADED,
  USERDETAILS_LOADING,
} from "../types";
import { act } from "react-dom/test-utils";

export function* findAllUserWorker(action) {
  try {
    console.log("ksjhdkjas");
    const res = yield call(findAllUserApi);
    if (res.status === 200 && res.data.status === "success") {
      yield action.onSuccess(res.data);
    } else if (res.status === 200 && res.data.status === "fail") {
      yield action.onError(res);
    } else {
      yield action.onError("Something Went Wrong");
    }
  } catch (error) {
    yield action.onError("Something Went Wrong");
  }
}

export function* watcherFindAllUserWorker() {
  yield takeLatest(FIND_ALL_USER, findAllUserWorker);
}

export function* findOneUserWorker(action) {
  try {
    const res = yield call(findOneUserApi, action.data);
    yield put({ type: USERDETAILS_LOADING });
    console.log(res, "asddsd");
    if (res.status === 200) {
      yield put({
        type: USERDETAILS_LOADED,
        data: res.data,
      });
      yield action.onSuccess(res.data);
    } else {
      yield put({ type: USERDETAILS_FAILED, data: res });
      yield action.onError(res);
    }
  } catch (error) {
    yield put({ type: USERDETAILS_FAILED, data: "Something Went Error" });
    yield action.onError("Something Went Error");
  }
}

export function* WatcherFindOneUserWorker() {
  yield takeLatest(FIND_ONE_USER, findOneUserWorker);
}
