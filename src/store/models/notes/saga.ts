import {
  all, call, put, takeLeading,
} from 'redux-saga/effects'

import api from '../../../api'

import actions from './actions'
import types from './types'

function* addNote({ payload }: { payload: { text: string }}) {
  try {
    const { data } = yield api.note.post(payload.text)

    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + Number.parseInt(data.expiry.match(/\d+/g)[0], 10))

    const note = {
      text: payload.text,
      key: data.key,
      link: data.link,
      expiry: expiryDate,
    }
    yield put(actions.addNote.success(note))
  } catch (error) {
    yield put(actions.addNote.failure())
  }
}

export default function* () {
  yield all([
    call(function* watch() {
      // @ts-ignore
      yield takeLeading(types.addNote.init, addNote)
    }),
  ])
}
