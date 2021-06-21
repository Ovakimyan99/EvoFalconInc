export default {
  state: {
    cardsArr: [],
    item: null,
    openCloseModal: null
  },
  mutations: {
    EXISTENCE_ITEM (state, payload) {
      state.item = payload
    },
    CHANGE_3D_MODAL (state, payload) {
      state.openCloseModal = payload
    },
    CHANGE_CARDS_ARR (state, payload) {
      state.cardsArr = [...payload]
    }
  },
  actions: {
    async indexFirstScreen ({ commit, state }, payload) {
      if (state.cardsArr.length) {
        return
      }
      // начало махинайций с выводом данных
      // payload = './db.json'
      const res = await fetch(payload)
      if (!res.ok || res.status !== 200) {
        throw new Error('Не удалось получить данные от сервера')
      }

      commit('CHANGE_CARDS_ARR', await res.json())
    },
    CardInfoModal ({ commit, state, dispatch, getters }, event) {
      try {
        // debugger
        commit('ENABLE_LOADER')
        dispatch('disableScroll')

        const parentCard = event.target.closest('[data-id]').getAttribute('data-id')
        // parentCard = hhhyyy01
        commit('CHANGE_3D_MODAL', true)
        commit('EXISTENCE_ITEM', parentCard)
        // в будущем буду находить нужный элемент в массиве и передавать его в emit
        commit('DISABLE_LOADER')
        return state.item
      } catch (e) {
        throw new Error('что то не так', e)
      }
    }
  },
  getters: {
    itemInfo: state => state.item,
    get3DModalCard: state => state.openCloseModal,
    cardsArr: state => state.cardsArr
  }
}
