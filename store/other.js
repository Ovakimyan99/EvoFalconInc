export default {
  state: {
    dropDate: null,
    timeLeft: null
  },
  mutations: {
    DROP_DATE_CHANGE (state, payload) {
      state.dropDate = payload
    },
    ITEM_LEFT_CHANGE (state, payload) {
      state.timeLeft = payload
    }
  },
  actions: {
    timer ({ state, commit, getters }, payload) {
      commit('DROP_DATE_CHANGE', payload)
      function getTimeRemaining (dropDate) {
        return Date.parse(dropDate) - Date.parse(new Date())
      }

      function setClock (dropDate) {
        const timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock () {
          const res = getTimeRemaining(state.dropDate)
          commit('ITEM_LEFT_CHANGE', res)

          if (state.timeLeft <= 0) {
            clearInterval(timeInterval)
          }
        }
        return state.timeLeft
      }

      return setClock(state.dropDate)
    }
  },
  getters: {
    dropDate: state => state.dropDate,
    timeLeft: state => state.timeLeft
  }
}
