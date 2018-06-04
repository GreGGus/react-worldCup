/**
 * Created by Gohma on 05/06/2017.
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {getTwitterAgg,getTwitter} from "../../services/api"
import * as Actions from "../actions/"



function* fetchTwitter(action) {
  try {
    const news = yield call(() => getTwitter());
    yield put({type: Actions.FETCH_TWITTER_SUCCES, data: news.data});
  } catch (e) {
    yield put({type: Actions.FETCH_TWITTER_FAIL, message: e.message});
  }
}
function* fetchTwitterAgregatSentiment(action) {
  try {
    const news = yield call(() => getTwitterAgg());
    yield put({type: Actions.FETCH_TWITTER_AGREGAT_SUCCES, data: news.data});
  } catch (e) {
    yield put({type: Actions.FETCH_TWITTER_AGREGAT_FAIL, message: e.message});
  }
}

function* mySaga() {

  yield takeLatest(Actions.FETCH_TWITTER_AGREGAT_REQUEST, fetchTwitterAgregatSentiment);
  yield takeLatest(Actions.FETCH_TWITTER_REQUEST, fetchTwitter);


}

export default mySaga;
