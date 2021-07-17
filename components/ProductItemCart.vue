<template>
  <div class="product-wrapper">
    <picture class="product-img-wrapper">
<!--      <source srcset="@/static/img/7.webp" class="product-img">-->
      <img
        v-if="this.card"
        :src="this.card.imageUrl"
        class="product-img"
        :alt="this.card.name"
      >
    </picture>
    <div class="product-btn-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'productItemCart',
  props: ['card']
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

  border-radius: 0 0 7px 7px;
  box-shadow: 0 0 30px -3px #1b212c;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:last-child {
    margin-right: 0 !important;
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
