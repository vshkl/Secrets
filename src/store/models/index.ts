import { all, call } from 'redux-saga/effects'

import NoteReducer from './notes/reducer'

import NoteSaga from './notes/saga'

export default {
  reducers: {
    notes: NoteReducer,
  },
  sagas: function* watch() {
    yield all([
      call(NoteSaga),
    ])
  },
}
