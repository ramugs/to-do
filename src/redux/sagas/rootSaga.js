import { all } from "redux-saga/effects";
import { WatcherFindOneUserWorker, watcherFindAllUserWorker } from "./getSaga";

export default function* rootSaga() {
  console.log("ksjhdkjas");
  yield all([watcherFindAllUserWorker(), WatcherFindOneUserWorker()]);
}
