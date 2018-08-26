import auth from '@/api/auth'

const state = {
  user: null,
  isLogin: false
}
// 这里是个技巧，即并未改变数据，使用getters 只是为了数据传出
const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations = {
  setUser(state, played) {
    state.user = played.user
  },

  setLogin(state, played) {
    state.isLogin = played.isLogin
  }
}

const actions = {
  login({ commit }, { username, password }) {
    return auth.login({ username, password })
      .then(res => {
      commit('setUser', { user: res.data })
      commit('setLogin', { isLogin: true })
    })
  },
  // ES6语法：async 是 promise 的改进，可以理解为另一种写法
  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    commit('setUser', { user: res.data })
    commit('setLogin', { isLogin: true })
    return res.data
  },
  
  async logout({ commit, state }) {
    await auth.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
  },

  async checkLogin({ commit, state }) {
    if (state.isLogin) return true
    let res = await auth.getInfo()
    commit('setLogin', { isLogin: res.isLogin })
    if (!res.isLogin) return false
    commit('setUser', { user: res.data })
    return true
  }
}

export default ({
  state,
  getters,
  mutations,
  actions
})
