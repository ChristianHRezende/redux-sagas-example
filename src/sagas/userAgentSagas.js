import { put, call } from 'redux-saga/effects'
import { loadUASuccess } from '../actions';

function* getUA(axios) {
    const dados = yield call(axios.get, 'http://httpbin.org/user-agent')
    yield put(loadUASuccess(dados.data['user-agent']))
}

export default getUA