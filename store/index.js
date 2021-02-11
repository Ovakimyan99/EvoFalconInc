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
    },
    timer () {
      setClock('.timer', '2021-02-30')

      function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor((t / (1000 * 60 * 60 * 24)))
        const seconds = Math.floor((t / 1000) % 60)
        const minutes = Math.floor((t / 1000 / 60) % 60)
        const hours = Math.floor((t / (1000 * 60 * 60) % 24))

        return {
          total: t,
          days,
          hours,
          minutes,
          seconds
        }
      }

      function getZero (num) {
        if (num >= 0 && num < 10) {
          return '0' + num
        } else {
          return num
        }
      }

      function setClock (selector, endtime) {
        const timer = document.querySelector(selector)
        const days = timer.querySelector('#days')
        const hours = timer.querySelector('#hours')
        const minutes = timer.querySelector('#minutes')
        const seconds = timer.querySelector('#seconds')
        const timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock () {
          const t = getTimeRemaining(endtime)

          days.innerHTML = getZero(t.days)
          hours.innerHTML = getZero(t.hours)
          minutes.innerHTML = getZero(t.minutes)
          seconds.innerHTML = getZero(t.seconds)

          if (t.total <= 0) {
            clearInterval(timeInterval)
          }
        }
      }
    }
  }
}
