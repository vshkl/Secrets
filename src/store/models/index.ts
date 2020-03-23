import { all, call } from 'redux-saga/effects'

import AddNoteReducer from './addNote/reducer'

import AddNoteSaga from './addNote/saga'

export default {
  reducers: {
    addNote: AddNoteReducer,
  },
  sagas: function* watch() {
    yield all([
      call(AddNoteSaga),
    ])
  },
}
