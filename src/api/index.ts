import axios from 'axios'
import qs from 'qs'

const postFile = (file: string) => {
  return null
}

const postNote = (text: string) => {
  return axios({
    method: 'post',
    url: 'https://file.io',
    data: qs.stringify({ text }),
    params: { expires: '14d' },
    headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
  })
}

export default {
  file: {
    post: postFile,
  },
  note: {
    post: postNote,
  },
}
