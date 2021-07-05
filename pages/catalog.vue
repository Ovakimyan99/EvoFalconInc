<template>
  <div>
    <section class="sale">
      <picture class="sale-info">
        <source srcset="@/static/img/sale/carefullyHotFon.webp" class="sale-info__fon-img">
        <img src="@/static/img/sale/carefullyHotFon.jpg" alt="" class="sale-info__fon-img">
      </picture>
      <div class="sale-info sale-info--fon">
        <span class="sale-info__contents">АКЦИЯ / SALE</span>
        <i class="sale-info__contents--motivator">Заяви о себе по - новому!</i>
        <h2 class="sale-info__title">Дарим скидку на футболку<br>«CAREFULLY HOT»</h2>
        <div class="sale-info__special-offer">
          <div class="sale-info__timer--wrapper">
            <span>До конца акции</span>
            <time class="sale-info__timer">
              14 : 21: 17: 20
            </time>
          </div>
          <button type="button" data-sale="10%" class="sale-info__btn">забрать скидку <span>10%</span></button>
        </div>
      </div>
      <picture class="sale-info__product">
        <source srcset="@/static/img/sale/carefullyHot.webp" class="sale-info__product-img">
        <img src="@/static/img/sale/carefullyHot.png" alt="" class="sale-info__product-img">
      </picture>
    </section>
    <app-sort-nav />
    <div class="products container">
      <app-product-item-cart
        class="products-item"
        v-for="n in 5"
        :key="n"
        :btns="{
          info: true,
          cart: true,
          delete: false,
          like: true
        }"
      />
    </div>
  </div>
</template>

<script>
import AppSortNav from '@/components/SortNav'
import AppProductItemCart from '@/components/ProductItemCart'
export default {
  name: 'catalog',
  // transition: {
  //   beforeEnter (el) {
  //     el.addEventListener('DOMContentLoaded', () => {
  //       console.log(el, 'beforeEnter')
  //       alert('beforeEnter')
  //     })
  //   },
  //   beforeLeave (el) {
  //     el.addEventListener('DOMContentLoaded', () => {
  //       console.log(el, 'beforeLeave')
  //       alert('beforeEnter')
  //     })
  //   }
  // },
  // mounted () {
  //   this.$store.commit('DISABLE_LOADER')
  //   this.$store.dispatch('enablesScroll')
  // },
  components: {
    AppSortNav,
    AppProductItemCart
  }
}
</script>

<style scoped lang="scss">
.sale {
  display: flex;
  justify-content: space-between;
  height: 470px;
  overflow: hidden;
  position: relative;
  &-info {
    position: relative;
    width: 50%;

    &--fon {
      background: linear-gradient(248.39deg, rgba(27, 10, 22, 0.93) 10.92%, rgba(121, 112, 116, 0.65) 90.32%);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 0 50px 50px 0;
    }

    &__fon-img {
      width: 100%;
    }

    &__contents {
      font-size: 40px;
      margin-bottom: 3px;
      font-weight: 500;
      line-height: 1;

      &--motivator{
        font-size: 22px;
        line-height: 1;
      }
    }

    &__title {
      font-size: 22px;
      line-height: 1.4;
      margin: 30px 0;
      text-align: right;
      letter-spacing: 0.03em;
    }

    &__special-offer {
      display: flex;
      text-transform: uppercase;
      color: white;
    }

    &--wrapper {
      span {
        font-size: 11px;
      }
    }

    &__timer {
      font-family: Stardos Stencil;
      display: block;
      font-size: 35px;
    }

    &__btn {
      font-family: 'Helvetica', 'Arial', sans-serif;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      color: #FFFFFF;
      letter-spacing: 0.04em;
      line-height: 1;

      position: relative;
      padding: 16px 10px 16px 24px;
      background: #FF0081;
      border-radius: 7px;
      cursor: pointer;
      transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
      box-shadow: 0 2px 25px rgba(255, 0, 130, 50%);
      margin-left: 20px;
      overflow: hidden;

      span {
        margin-left: 13px;
        font-weight: bold;
        font-size: 16px;
      }

      &:before {
        content: '?';
        position: absolute;
        right: 0;
        top: 0;
        background: #fff;
        width: 62px;
        height: 100%;
        font-size: 22px;
        color: #ff0081;
        line-height: 2;
        clip-path: polygon(64px 0, 16px 0, 0 100%, 100% 100%);
        transform: translateX(0);
        transition: transform 0.3s ease;
        padding-left: 7px;
      }

      &:hover:before {
        transform: translateX(100%);
      }
    }

    &__product {
      position: absolute;
      height: 100%;
      left: 50%;
      transform: translate(-50%, 0%);

      &-img {
        height: 700px;
      }
    }
  }
}

.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 0 0 0;

  &-item {
    margin-bottom: 50px;
  }

  &-item:nth-child(3n - 1) {
    margin: 0 15px 50px;
  }
}
</style>
