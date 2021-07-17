<template>
  <div ref="sliderWrapper" class="slider-wrapper">
    <div class="slider-controller">
      <div class="controller-instruction">
        SHIFT +
        <span class="controller-instruction__mouse" />
        SCROLL
      </div>
      <div class="swith-wrapper">
        <span>SPIN</span>
        <input class="swith-wrapper__input" type="checkbox" id="switch" ref="switchSpin">
        <label class="swith-wrapper__label" for="switch">Toggle</label>
      </div>
    </div>
    <!--3d-slider-->
    <div id="drag-container">
      <div id="spin-container">
        <app-card-carousel
          class="spin-container__slide"
          v-for="n of 2"
          :key="n"
        />
        <!-- Text at center of ground -->
        <p class="carousel-name-center">EVO FALCON INC</p>
      </div>
      <div id="ground" />
    </div>
    <!--3d-slider-->
  </div>
</template>

<script>
import appCardCarousel from './CardSlider'

export default {
  components: {
    appCardCarousel
  },
  mounted () {
    // You can change global variables here:
    let switchSpinBoolean = false
    let radius = 400 // how big of the radius
    const autoRotate = true // auto rotate or not
    const rotateSpeed = -60 // unit: seconds/360 degrees
    const imgWidth = 390 // width of images (unit: px)
    const imgHeight = 215 // height of images (unit: px)

    // ===================== start =======================
    // animation start after 1000 miliseconds
    document.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const heightFirstScreen = document.documentElement.clientHeight
      if (heightFirstScreen - scrollTop <= heightFirstScreen / 2) {
        // Запускаем показ
        setTimeout(init, 300)
      }
    })

    const swithSpin = this.$refs.switchSpin
    const sliderWrapper = this.$refs.sliderWrapper
    const odrag = sliderWrapper.querySelector('#drag-container')
    const ospin = sliderWrapper.querySelector('#spin-container')
    const aImg = ospin.querySelectorAll('figure')
    const aEle = [...aImg] // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + 'px'
    ospin.style.height = imgHeight + 'px'

    // Size of ground - depend on radius
    const ground = sliderWrapper.querySelector('#ground')
    ground.style.width = radius * 3 + 'px'
    ground.style.height = radius * 3 + 'px'

    function init (delayTime) {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = 'rotateY(' + (i * (360 / aEle.length)) + 'deg) translateZ(' + radius + 'px)'
        aEle[i].style.transition = 'transform 1s'
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's'
      }
    }

    function applyTranform (obj) {
      // Constrain the angle of camera (between 0 and 90)
      if (tY > 90) {
        tY = 90
      }
      if (tY < 0) {
        tY = 0
      }

      if (tY > 30 && radius > sliderWrapper.getBoundingClientRect().height / 2) {
        sliderWrapper.style.height = sliderWrapper.offsetHeight + radius / 1.5 + 'px'
        // диаметр больше высоты карусели при повернутом состоянии
      } else if (tY <= 30) {
        sliderWrapper.style.height = ''
      }

      // Apply the angle
      obj.style.transform = 'rotateX(' + (-tY) + 'deg) rotateY(' + (tX) + 'deg)'
    }

    function playSpin (yes) {
      ospin.style.animationPlayState = (yes ? 'running' : 'paused')
    }

    // eslint-disable-next-line no-unused-vars
    let sX; let sY; let nX; let nY; let desX = 0
    let desY = 0
    let tX = 0
    let tY = 10

    // auto spin
    if (autoRotate) {
      const animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert')
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`
    }

    // setup events
    swithSpin.addEventListener('click', (e) => {
      e = e || window.event
      switchSpinBoolean = !switchSpinBoolean
      if (e.target.checked && e && switchSpinBoolean) {
        return playSpin(false)
      }
      return playSpin(true)
    })

    sliderWrapper.onpointerdown = function (e) {
      clearInterval(odrag.timer)
      playSpin(false)

      e = e || window.event
      let sX = e.clientX // позиция мыши относительно экрана от левого края
      let sY = e.clientY // позиция мыши относительно верха экрана
      // sX, sY - определяются 1 раз, во время нажатия

      this.onpointermove = function (e) {
        e = e || window.event
        const nX = e.clientX // позиция мыши относительно экрана от левого края
        const nY = e.clientY // позиция мыши относительно верха экрана
        // nX, nY - определяются на протяжении всего времени перетаскивания
        desX = nX - sX
        desY = nY - sY
        tX += desX * 0.1
        tY += desY * 0.1
        applyTranform(odrag)
        sX = nX
        sY = nY
      }

      this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
          desX *= 0.95
          desY *= 0.95
          tX += desX * 0.1
          tY += desY * 0.1
          applyTranform(odrag)
          playSpin(false)
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer)
            if (!switchSpinBoolean) {
              playSpin(true)
            }
          }
        }, 17)
        this.onpointermove = this.onpointerup = null
      }

      return false
    }

    sliderWrapper.querySelectorAll('.carouselItem').forEach((item) => {
      // const headerIcon = item.querySelector('.poster__header-icon')
      // headerIcon.addEventListener('mousemove', () => {
      //   playSpin(false)
      // })
      // headerIcon.addEventListener('mouseleave', () => {
      //   if (!switchSpinBoolean) {
      //     playSpin(true)
      //   }
      // })
    })

    sliderWrapper.onmousewheel = function (e) {
      e = e || window.event
      const d = e.wheelDelta / 20 || -e.detail
      if ((radius <= imgWidth + 80 && d > 0) || (radius > imgWidth + 80 && (d || !d) && (radius < document.body.offsetWidth / 2 - 100))) {
        radius += d
      } else if ((radius >= document.body.offsetWidth / 2 - 100) && d < 0) {
        radius += d
      }

      if (tY > 70 && radius > sliderWrapper.clientHeight / 2) {
        radius = sliderWrapper.clientHeight / 2
        // больше 50
      }

      init(1)
    }
  }
}
</script>

<style lang="scss">
.slider-controller {
  width: 100%;
  position: absolute;
  top: -100px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding: 10px;
}

// switch
.swith-wrapper {
  display: inline-flex;

  span {
    color: #fff;
    font-size: 20px;
    line-height: 1.5;
    margin-right: 10px;
    font-weight: bold;
  }
}

.controller-instruction {
  display: inline-flex;
  padding: 13px;
  border-radius: 5px;
  color: white;
  line-height: 2;
  font-size: 14px;
  background: rgba(25, 24, 24, 76%);

  &__mouse {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 30px;
    border: 2px solid #fff;
    border-radius: 9px;
    margin: 0 13px;

    &:after {
      content: '';
      position: absolute;
      border-radius: 4px;
      background: #fff;
      width: 1px;
      height: 7px;
      left: 5px;
      margin-top: -8px;
      -webkit-animation-name: wheel;
      animation-name: wheel;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-play-state: running;
      animation-play-state: running;
    }
  }
}

@-webkit-keyframes wheel {
  0% {
    top: 3px;
    opacity: 0;
  }
  30% {
    top: 10px;
    opacity: 1;
  }
  100% {
    top: 18px;
    opacity: 0;
  }
}

.swith-wrapper__input {
  height: 0;
  width: 0;
  visibility: hidden;
}

.swith-wrapper__label {
  cursor: pointer;
  text-indent: -9999px;
  width: 65px;
  height: 30px;
  background: grey;
  display: block;
  border-radius: 20px;
  position: relative;
}

.swith-wrapper__label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

.swith-wrapper__input:checked + .swith-wrapper__label {
  background: #7a83bf;
}

.swith-wrapper__input:checked + .swith-wrapper__label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}
// switch ===

.slider-wrapper {
  position: relative;
  height: 500px;
  display: flex;
  perspective: 1000px;
  transform-style: preserve-3d;
  margin: 100px 0;
  align-items: center;
  justify-content: center;
  transition: 0.6s ease;
}

#drag-container, #spin-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateX(-10deg);
  transform: rotateX(-10deg);
}

#ground {
  width: 900px;
  height: 900px;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%) rotateX(90deg);
  transform: translate(-50%,-50%) rotateX(90deg);
}

@-webkit-keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  } to{
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
}

@keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  } to{
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
}
@-webkit-keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  } to{
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
}
@keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  } to{
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
}

.carousel-name-center {
  transform: translate(100%, 50%) rotateX(90deg);
  display: flex;
  align-items: center;
  color: white;
  text-transform: uppercase;
}
</style>
