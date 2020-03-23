import {
  all, call, put, takeLeading,
} from 'redux-saga/effects'

import api from '../../../api'

import actions from './actions'
import types from './types'

function* addNote(noteText: string) {
  try {
    yield api.note.post(noteText)
    yield put(actions.addNote.success())
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
