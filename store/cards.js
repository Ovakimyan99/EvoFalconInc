export default {
  state: {
    clothesArr: [],
    item: null
  },
  mutations: {
    EXISTENCE_ITEM (state, payload) {
      state.item = payload
    },
    CHANGE_CARDS_ARR (state, payload) {
      state.clothesArr = [...payload]
    }
  },
  actions: {
    async draftingArrClothes ({ commit, state }, payload) {
      if (state.clothesArr.length) {
        return
      }

      // payload = './db.json'
      const res = await fetch(payload)
      if (!res.ok || res.status !== 200) {
        throw new Error('Не удалось получить данные от сервера')
      }

      commit('CHANGE_CARDS_ARR', await res.json())
    },
    CardInfoModal ({ commit, getters }, event) {
      try {
        // debugger

        const parentCard = event.target.closest('[data-id]').getAttribute('data-id') // card id

        const item = getters.clothesArr.find(obj => obj.id === parentCard)
        commit('EXISTENCE_ITEM', item)

        return getters.itemInfo
      } catch (e) {
        throw new Error('что то не так', e)
      }
    }
  },
  getters: {
    itemInfo: state => state.item,
    clothesArr: state => state.clothesArr
  }
}
