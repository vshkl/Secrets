import axios from 'axios'

const apiClient = () => {
  return axios.create({
    baseURL: 'https://file.io',
  })
}

const postFile = (file: string) => {
  return apiClient()
    .post('', {
      data: { file },
      params: { expires: '1W' },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

const postNote = (text: string) => {
  return apiClient()
    .post('', {
      data: { text },
      params: { expires: '1W' },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

export default {
  file: {
    post: postFile,
  },
  note: {
    post: postNote,
  },
}
