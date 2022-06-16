import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.google.com/'
})

export const useApi = () => ({
  validadeToken: async (token: string) => {
    return {
      user: { id: 3, name: 'Karina', email: 'karina@gmail.com' },
    }
    const response = await api.post('/validate', { token })
    return response.data
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: 'Karina', email: 'karina@gmail.com' },
      token: '1234'
    }
    const response = await api.post('/signin', { email, password })
    return response.data
  },
  signout: async () => {
    return { status: true }
    const response = await api.post('/logout')
    return response.data
  }
})