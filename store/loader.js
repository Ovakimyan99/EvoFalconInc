export default {
  state: {
    loader: true
  },
  mutations: {
    ENABLE_LOADER (state) {
      state.loader = true
    },
    DISABLE_LOADER (state) {
      state.loader = false
    }
  },
  actions: {
    disableScroll () {
      const body = document.body

      const widthScroll = window.innerWidth - body.offsetWidth

      body.dbScrollY = window.scrollY

      body.style.cssText = `
        transition: 0;
        position: fixed;
        top: ${~window.scrollY}px;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;`
    },
    enablesScroll () {
      const body = document.body
      body.style.cssText = ''
      window.scroll({ top: document.body.dbScrollY })
    }
  },
  getters: {
    loader (state) {
      return state.loader
    }
  }
}
