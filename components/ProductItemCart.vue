<template>
  <div class="product-wrapper">
    <picture class="product-img-wrapper">
<!--      <source srcset="@/static/img/7.webp" class="product-img">-->
      <img src="@/static/img/hoody-kaneki/7.jpg" class="product-img" alt="">
    </picture>
    <div class="product-btn-wrapper" @click="productBtnClick($event)">
      <input type="button" class="product-btn info" v-if="this.btns.info">
      <button class="product-btn basket icon-cart" v-if="this.btns.cart" />
      <button class="product-btn delete icon-bascet" v-if="this.btns.delete" />
      <button class="product-btn liked" v-if="this.btns.like">❤</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productItemCart',
  props: ['btns'],
  methods: {
    productBtnClick (e) {
      const target = e.target
      if (target.classList.contains('product-btn')) {
        target.classList.toggle('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@mixin btnBg ($color) {
  &:hover {
    background-color: $color;
  }
  &.active {
    background-color: $color;
  }
}

.product-wrapper {
  position: relative;
  max-width: 350px;
  width: 100%;

  margin-bottom: 50px;
  border-radius: 0 0 7px 7px;
  box-shadow: 0 0 30px -3px #1b212c;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:nth-child(3n - 1) {
    margin: 0 15px 50px;
  }

  &:last-child {
    margin-right: 0;
  }
}

.product-img-wrapper {}

.product-img {
  width: 100%;
}

.product-btn-wrapper {
  display: flex;
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
  //filter: grayscale(1);
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
    //background-color: #FF0081;
  }

  &.info {
    @include btnBg(#8E3C71);
    background-image: url('../static/img/other/cartItem/info.svg');
  }

  &.basket {
    @include btnBg(#FEDB01)
  }
}
</style>
