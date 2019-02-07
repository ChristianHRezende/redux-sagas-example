import sagaHelper from 'redux-saga-testing'
import uaSagas from './userAgentSagas'
import { call, put } from 'redux-saga/effects';
import { loadUASuccess } from '../actions'

describe('should test uaSagas', () => {
    const axiosMock = {
        get: jest.fn()
    }
    const it = sagaHelper(uaSagas(axiosMock))
    it('should call api get UA', result => {
        expect(result).toEqual(call(axiosMock.get, 'http://httpbin.org/user-agent'))
        return {
            data: {
                'user-agent': 'ua retornado'
            }
        }
    })
    it('should put load UA success', result => {
        expect(result).toEqual(put(loadUASuccess('ua retornado')))
    })
})

