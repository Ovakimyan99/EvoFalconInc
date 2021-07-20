<template>
  <div
    class="product-btn-wrapper"
    @click="activeChange($event)"
  >
    <button
      v-if="this.btns.info"
      class="info"
      :class="this.btnsClass"
      @click="ThreeDModal($event)"
    ><img src="@/static/img/other/cartItem/info.svg" alt="3д"></button>
    <button
      v-if="this.btns.close"
      class="close"
      :class="this.btnsClass"
      @click="closeModal"
    >&#10006;</button>
    <button
      v-if="this.btns.cart"
      class="basket icon-cart"
      :class="this.btnsClass"
    />
    <button
      v-if="this.btns.delete"
      class="delete icon-bascet"
      :class="this.btnsClass"
    />
    <button
      v-if="this.btns.like"
      class="liked"
      :class="this.btnsClass"
    >❤</button>
  </div>
</template>

<script>
export default {
  props: ['item', 'btns', 'volume'],
  data () {
    return {
      card: this.item,
      btn: this.btns
    }
  },
  computed: {
    btnsClass () {
      if (this.volume === '2d') {
        return 'product-btn'
      } else if (this.volume === '3d') {
        return 'header-icon'
      } else if (this.volume === 'lookbook') {
        return 'header-icon header-icon--lookbook'
      }
      return ''
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('EXISTENCE_ITEM', false)
      this.$store.dispatch('enablesScroll')
    },
    ThreeDModal (e) {
      this.$store.dispatch('CardInfoModal', e)
    },
    activeChange (e) {
      const target = e.target.closest('.product-btn') || e.target.closest('.header-icon')
      if (target) {
        target.classList.toggle('active')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin modalIcon($color, $background) {
  &.active, &:hover {
    transform: translateY(-3px);
    box-shadow: 0 11px 22px -7px $color;
    background: $background;
  }

  &:active {
    opacity: 0.7;
  }
}

@mixin btnBg ($color) {
  &:hover {
    background-color: $color;
  }
  &.active {
    background-color: $color;
  }
}

.product-btn-wrapper {
  display: flex;
  justify-content: flex-end;
}

.poster__header-icon {
  display: flex;
  justify-content: flex-end;
}

.card-icons {
  margin-right: 8px;
  width: 30px;
  height: 30px;
  background: #F5F5F5;
}

.header-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 8px;
  font-size: 16px;
  width: 33px;
  height: 33px;
  color: #f5f3f5;
  background: #534d4d;

  &--lookbook {
    font-size: 22px;
    width: 50px;
    height: 50px;
  }

  &:last-child {
    margin-right: 0;
  }

  &.basket {
    @include modalIcon(#fdcf58, #e9c363)
  }

  &.liked{
    @include modalIcon(#ff0081, #ee1e87)
  }

  &.close {
    @include modalIcon(#000, #433e3e)
  }

  &.info {
    @include modalIcon(#8E3C71, #a54784);
    padding: 6px;
    img {
      width: 100%;
    }
  }
}

.product-btn {
  flex: 1;
  padding: 25px 10px;
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: center;
  color: white;
  font-size: 30px;
  cursor: pointer;
  background-color: #404040;

  &:hover {
    filter: grayscale(0);
  }

  &.delete {
    @include btnBg(#7A83BF);
    background-size: 25px;
  }

  &.liked {
    @include btnBg(#FF0081);
  }

  &.info {
    @include btnBg(#8E3C71);
    img {
      width: 40%;
    }
  }

  &.basket {
    @include btnBg(#FEDB01)
  }
}
</style>
