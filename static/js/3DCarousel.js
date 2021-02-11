let w, container, carousel, item, radius, itemLength, rY, ticker
let mouseX = 0
let mouseY = 0
let mouseZ = 0
let addX = 0

document.addEventListener('DOMContentLoaded', init)

function init () {
  w = document.window
  container = document.querySelector('#contentContainer')
  carousel = document.querySelector('#carouselContainer')
  item = document.querySelectorAll('.carouselItem')
  itemLength = document.querySelectorAll('.carouselItem').length
  rY = 360 / itemLength
  radius = Math.round((250) / Math.tan(Math.PI / itemLength))

  // set container 3d props
  TweenMax.set(container, { perspective: 600 })
  TweenMax.set(carousel, { z: -(radius) })

  // create carousel item props

  for (let i = 0; i < itemLength; i++) {
    const $item = item[i]
    const $block = $item.querySelector('.carouselItemInner')

    // thanks @chrisgannon!
    TweenMax.set($item, { rotationY: rY * i, z: radius, transformOrigin: '50% 50% ' + -radius + 'px' })

    animateIn($item, $block)
  }

  // set mouse x and y props and looper ticker
  window.addEventListener('mousemove', onMouseMove, false)
  ticker = setInterval(looper, 1000 / 60)
}

function animateIn ($item, $block) {
  const $nrX = 360 * getRandomInt(2)
  const $nrY = 360 * getRandomInt(2)

  const $nx = -(2000) + getRandomInt(4000)
  const $ny = -(2000) + getRandomInt(4000)
  const $nz = -4000 + getRandomInt(4000)

  const $s = 1.5 + (getRandomInt(10) * 0.1)
  const $d = 1 - (getRandomInt(8) * 0.1)

  TweenMax.set($item, { autoAlpha: 1, delay: $d })
  TweenMax.set($block, { z: $nz, rotationY: $nrY, rotationX: $nrX, x: $nx, y: $ny, autoAlpha: 0 })
  TweenMax.to($block, $s, { delay: $d, rotationY: 0, rotationX: 0, z: 0, ease: Expo.easeInOut })
  TweenMax.to($block, $s - 0.5, { delay: $d, x: 0, y: 0, autoAlpha: 1, ease: Expo.easeInOut })
}

function onMouseMove (event) {
  mouseX = -(-(window.innerWidth * 0.5) + event.pageX) * 0.0019
  mouseY = -(-(window.innerHeight * 0.5) + event.pageY) * 0.009
  mouseZ = -(radius) - (Math.abs(-(window.innerHeight * 1) + event.pageY) - 200)
}

// loops and sets the carousel 3d properties
function looper () {
  addX += mouseX
  TweenMax.to(carousel, 1, { rotationY: addX, rotationX: mouseY, ease: Quint.easeOut })
  TweenMax.set(carousel, { z: mouseZ })
}

function getRandomInt ($n) {
  return Math.floor((Math.random() * $n) + 1)
}
