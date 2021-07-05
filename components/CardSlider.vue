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

.carouselItem {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 60%);
  background: rgba(46, 45, 45, 0.3);
  border-radius: 5px;

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
</style>
