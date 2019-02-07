import { takeLatest } from 'redux-saga/effects'
import getIP from './ipSagas';
import getUA from './userAgentSagas';

import axios from 'axios'

function* index() {
    yield takeLatest('LOAD_DATA_REQUEST', getIP, axios)
    yield takeLatest('LOAD_UA_REQUEST', getUA, axios)
}

export default index