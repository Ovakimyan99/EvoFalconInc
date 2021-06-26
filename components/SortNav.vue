<template>
  <div class="sort">
    <ul class="sort-products container">
      <li
        class="sort__item"
        v-for="{ name, clothes } of products"
        :key="name"
        :data-clothes="clothes"
      >{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SortNav',
  data: () => ({
    products: [
      {
        name: 'аниме', clothes: 'anime'
      },
      {
        name: 'футболки', clothes: 't-shirt'
      },
      {
        name: 'лонгсливы', clothes: 'longsleeve'
      },
      {
        name: 'толстовки', clothes: 'hoodie'
      },
      {
        name: 'свитшоты', clothes: 'sweatshirts'
      },
      {
        name: 'головные уборы', clothes: 'hat'
      },
      {
        name: 'шорты', clothes: 'shorts'
      },
      {
        name: 'рубашки', clothes: 'shirt'
      },
      {
        name: 'поясные сумки', clothes: 'bag'
      },
      {
        name: 'обувь', clothes: 'footwear'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.sort {
  height: 100%;
  width: 100%;
  border-top: 7px solid #8E3C71;
  border-bottom: 7px solid #8E3C71;
}

.sort-products {
  position: relative;
  display: flex;
  padding: 30px 0;
  color: #fff;
  overflow-x: auto;
}

.sort__item {
  font-size: 19px;
  line-height: 1;
  text-transform: uppercase;
  color: #FFFFFF;
  white-space: nowrap;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 30px;
  }
}
</style>
