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
.product-wrapper {
  position: relative;
  max-width: 350px;
  width: 100%;

  border-radius: 0 0 7px 7px;
  box-shadow: 0 0 30px -3px #1b212c;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-img {
  width: 100%;
}
</style>
