<template>
  <figure data-id="01" class="carouselItem trans3d">
    <div class="carouselItemInner trans3d">
      <div class="carousel-item__img">
        <img src="@/static/img/hoody-kaneki/mockup.png" alt="kaneki">
      </div>
      <div class="carousel-item__info">
        <h2 class="item-info__header">HOODIE «EMPTINESS OF THE SOUL» VOL.01</h2>
        <p class="item-info__text">Испоьлзуется оверсайз крой, с нашивками из джинсы и прямой полноцветной печатью.</p>
        <span class="item-info__size">SIZE » S / M / L / XL</span>
        <div class="item-info__price">
          price:
          <span class="item-price">3800<br>4300</span>
        </div>
        <app-btns-card
          :btns="{
            close: null,
            volume: true,
            like: true,
            basket: true
          }"
        /></div>
    </div>
  </figure>
</template>

<script>
import AppBtnsCard from './VolumeLikeBasketClose'
export default {
  data: () => {
    return {}
  },
  components: {
    AppBtnsCard
  },
  methods: {
    ThreeDModal (e) {
      new Promise((resolve) => {
        this.$store.commit('ENABLE_LOADER')
        setTimeout(() => { resolve() }, 2000)
      })
        .then(() => {
          const parentCard = e.target.closest('[data-id]')
          console.log(parentCard)
          // this.item = parentCard.id
          this.$store.dispatch('disableScroll')
          this.$store.commit('DISABLE_LOADER')
        })
        .catch(() => {
          throw Error
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "plugins/incons.css";

//@mixin modalIcon($color, $background) {
//  color: rgba(46, 45, 45, 0.3);
//  &.active, &:hover {
//    transform: translateY(-3px);
//    box-shadow: 0 11px 22px -7px $color;
//    background: $background;
//    opacity: 1;
//    color: #fff;
//  }
//
//  &:active {
//    opacity: 0.7;
//  }
//}

.carouselItem {
  position: relative;

  &:before {
    content: attr(data-id);
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    backface-visibility: hidden;

    width: 135px;
    height: 135px;
    text-align: center;
    border-radius: 50%;
    padding: 13px 0 0 6px;

    font-size: 70px;
    color: rgba(255, 255, 255, 0.05);
    border: 20px solid rgba(255, 255, 255, 0.05);
    letter-spacing: -3px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -2;
    filter: blur(7px);
    background: rgba(0, 0, 0, 0.1);
  }
}

.carouselItemInner {
  height: 100%;
  display: flex;
  justify-content: space-between;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  background: rgba(46, 45, 45, 0.3);
  border-radius: 5px;
}

.carousel-item__img {
  width: calc(50% - 25px);
  flex-basis: calc(50% - 25px);
  position: relative;

  img {
    height: calc(100% + 30px);
    top: -15px;
    left: -45px;
    position: absolute;
  }
}

.carousel-item__info {
  margin: 10px 10px 10px 0;
  color: #F5F5F5;
  text-align: start;
  max-width: 165px;
  flex-basis: calc(50% - 25px);
}

.item-info {
  &__header {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    text-align: justify;
  }

  &__text {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    margin: 7px 0;
    text-align: justify;
  }

  &__size, &__price {
    font-family: Black Ops One;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 1.05;
    letter-spacing: 0.05em;
    color: #EEE7E7;
    text-align: right;
    display: block;
    text-transform: uppercase;
  }

  &__price {
    margin: 7px 0 18px
  }
}

.poster__header-icon {
  display: flex;
  justify-content: flex-end;
}
//
//.header-icon {
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  margin-right: 8px;
//  border-radius: 50%;
//  width: 30px;
//  height: 30px;
//  cursor: pointer;
//  transition: 0.3s ease;
//  background: #F5F5F5;
//
//  &:last-child {
//    margin-right: 0;
//  }
//
//  &__3d {
//    @include modalIcon(rgba(0,212,255,0.9587185215883228), linear-gradient(0deg, rgba(10,4,117,0.950315160243785) 0%, rgba(9,9,121,0.8214636196275386) 3%, rgba(5,103,183,0.9755252442773985) 36%, rgba(0,212,255,0.9587185215883228) 75%, rgba(175,255,253,0.9643207624846813) 100%));
//    i {
//      width: 66%;
//      height: 66%;
//      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkxLjIwMyA0OTEuMjAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTEuMjAzIDQ5MS4yMDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDg3LjI5OCwzMjYuNzMzbC02Mi4zMDQtMzcuMTI4bDYyLjMwNC0zNy4xMjhjMi40MjEtMS40NDMsMy45MDQtNC4wNTQsMy45MDQtNi44NzJzLTEuNDgzLTUuNDI5LTMuOTA0LTYuODcyDQoJCQlsLTYyLjMwNC0zNy4xMjhsNjIuMzA0LTM3LjEyOGMzLjc5NS0yLjI2Miw1LjAzOC03LjE3MiwyLjc3Ni0xMC45NjhjLTAuNjgtMS4xNDItMS42MzUtMi4wOTYtMi43NzYtMi43NzZsLTIzNy42LTE0MS42DQoJCQljLTIuNTI0LTEuNTA0LTUuNjY5LTEuNTA0LTguMTkyLDBsLTIzNy42LDE0MS42Yy0zLjc5NSwyLjI2Mi01LjAzOCw3LjE3Mi0yLjc3NiwxMC45NjhjMC42OCwxLjE0MiwxLjYzNSwyLjA5NiwyLjc3NiwyLjc3Ng0KCQkJbDYyLjMwNCwzNy4xMjhMMy45MDUsMjM4LjczM2MtMy43OTUsMi4yNjItNS4wMzgsNy4xNzItMi43NzYsMTAuOTY4YzAuNjgsMS4xNDIsMS42MzUsMi4wOTYsMi43NzYsMi43NzZsNjIuMzA0LDM3LjEyOA0KCQkJTDMuOTA1LDMyNi43MzNjLTMuNzk1LDIuMjYyLTUuMDM4LDcuMTcyLTIuNzc2LDEwLjk2OGMwLjY4LDEuMTQyLDEuNjM1LDIuMDk2LDIuNzc2LDIuNzc2bDIzNy42LDE0MS42DQoJCQljMi41MjYsMS40OTQsNS42NjYsMS40OTQsOC4xOTIsMGwyMzcuNi0xNDEuNmMzLjc5NS0yLjI2Miw1LjAzOC03LjE3MiwyLjc3Ni0xMC45NjgNCgkJCUM0ODkuMzkzLDMyOC4zNjgsNDg4LjQzOSwzMjcuNDE0LDQ4Ny4yOTgsMzI2LjczM3ogTTIzLjYyNSwxNTcuNjA1TDI0NS42MDEsMjUuMzE3bDIyMS45NzYsMTMyLjI4OEwyNDUuNjAxLDI4OS44OTMNCgkJCUwyMy42MjUsMTU3LjYwNXogTTIzLjYyNSwyNDUuNjA1bDU4LjIwOC0zNC42OGwxNTkuNjcyLDk1LjJjMi41MjQsMS41MDQsNS42NjgsMS41MDQsOC4xOTIsMGwxNTkuNjcyLTk1LjJsNTguMjA4LDM0LjY4DQoJCQlMMjQ1LjYwMSwzNzcuODkzTDIzLjYyNSwyNDUuNjA1eiBNMjQ1LjYwMSw0NjUuODkzTDIzLjYyNSwzMzMuNjA1bDU4LjIwOC0zNC42OGwxNTkuNjcyLDk1LjJjMi41MjQsMS41MDQsNS42NjgsMS41MDQsOC4xOTIsMA0KCQkJbDE1OS42NzItOTUuMmw1OC4yMDgsMzQuNjhMMjQ1LjYwMSw0NjUuODkzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K)
//    }
//
//    &:hover {
//      i {
//        mix-blend-mode: overlay;
//      }
//    }
//  }
//
//  &__basket {
//    @include modalIcon(#fdcf58, #e9c363)
//  }
//
//  &__like{
//    @include modalIcon(#ff0081, #ee1e87)
//  }
//}
</style>
