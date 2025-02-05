import apiClient from './axios.js'

export default {
  async register(userData) {
    return await apiClient.post('/register', userData)
  },

  async login(credentials) {
    return await apiClient.post('/login', credentials)
  },

  async logout() {
    const token = localStorage.getItem('token')
    if (!token) return true

    return await apiClient.post(
      '/logout',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
  },
}
