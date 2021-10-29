import {takeLatest, put,call} from 'redux-saga/effects';
import { loadPostSuccess } from '../actions';
import { loadPostApi } from '../api';





export function* onLoadPostStartAsync(){

    const res = yield call (loadPostApi );
    yield put(loadPostSuccess(res.data));
}

export function* onLoadPost (){
 yield takeLatest("LOAD_POST_START", onLoadPostStartAsync)
}