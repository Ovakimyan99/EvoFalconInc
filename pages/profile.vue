<template>
  <div class="container">
    <div class="profile-cap__wrapper">
      <div class="profile-cap__user">
        <span class="profile-cap__name">{{ this.userName.split(' ', 2).join(' ') }}</span>
        <div class="profile-cap__img-wrapper">
          <img src="@/static/img/users/user.jpg" alt="" class="profile-cap__img">
        </div>
        <input type="button" class="profile-cap__btn" value="редактировать">
      </div>

      <div class="profile-cap__info">
        <div v-for="{ descr, placeholder, answer } of userInfo" :key="descr" class="profile-cap__info-row">
          <input
            :id="descr"
            placeholder=" "
            type="text"
            :value="answer"
            class="profile-cap__info-input"
          >
          <label :for="descr" class="profile-cap__info-descr">{{ placeholder }}</label>
        </div>
      </div>
    </div>

    <div class="products products--cart">
      <div class="products-list">
        <app-product-item-cart
          class="products-list__item"
          v-for="item of 7"
          :key="item"
        >
          <app-btns-card
            :btns="{
              close: false,
              cart: false,
              info: true,
              delete: true,
              like: true
            }"
            volume="2d"
          />
        </app-product-item-cart>
      </div>
      <ul class="products-finally">
        <li class="products-finally__info">
          <span class="products-finally__info-product">количество товаров</span>
          <span class="products-finally__info-product">{{amountProducts}}</span>
        </li>
        <li class="products-finally__info">
          <span class="products-finally__info-product">общая сумма</span>
          <span class="products-finally__info-product">{{sumTotal}} руб</span>
        </li>
        <li class="products-finally__info" v-for="{product, productName, size} of basketInfo" :key="productName">
          <span class="products-finally__info-product">{{product}}: «{{productName}}»</span>
          <span class="products-finally__info-product">{{size}}</span>
        </li>
      </ul>
    </div>
    <div class="products products--liked">
      <div class="products-list">
        <app-product-item-cart
          class="products-list__item"
          v-for="item of 7"
          :key="item"
        >
          <app-btns-card
            :btns="{
              close: false,
              like: false,
              delete: true,
              cart: true,
              info: true
            }"
            volume="2d"
          />
        </app-product-item-cart>
      </div>
    </div>
    <div class="products products--maybe-like-it">
      <div class="products-list">
        <app-product-item-cart
          class="products-list__item"
          v-for="item of 7"
          :key="item"
        >
          <app-btns-card
            :btns="{
              delete: false,
              close: false,
              info: true,
              cart: true,
              like: true
            }"
            volume="2d"
          />
        </app-product-item-cart>
      </div>
    </div>

    <div class="collect-clothes">
      <h3 class="collect-clothes__title">собери свой лук</h3>
      <div class="collect-clothes-main">
        <div class="collect-clothes__visual"></div>
        <div class="collect-clothes__products"></div>
        <div class="collect-clothes__sort"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AppProductItemCart from '@/components/ProductItemCart'
import AppBtnsCard from '@/components/VolumeLikeBasketClose'

export default {
  name: 'Profile',
  components: {
    AppProductItemCart,
    AppBtnsCard
  },
  data: () => ({
    userInfo: [
      {
        descr: 'town',
        placeholder: 'Город',
        answer: 'Это'
      },
      {
        descr: 'adres',
        placeholder: 'адрес',
        answer: 'Надо заполнить'
      },
      {
        descr: 'userName',
        placeholder: 'ФИО',
        answer: 'Если хочешь оформить заказ'
      },
      {
        descr: 'tel',
        placeholder: 'телефон',
        answer: 'а дефолтно будет показано другое'
      },
      {
        descr: 'index',
        placeholder: 'индекс почты',
        answer: 'это железобетонно нужно для оформления заказа'
      }
    ],
    basketInfo: [
      {
        product: 'худи',
        productName: '«EMPTINESS OF THE SOUL» VOL.01',
        size: 'M'
      },
      {
        product: 'футболка',
        productName: 'CAREFFULLY HOT',
        size: 'S'
      },
      {
        product: 'футболка',
        productName: 'CAREFFULLY HOT23',
        size: 'S'
      },
      {
        product: 'футболка',
        productName: 'CAREFFULLY HOT53',
        size: 'S'
      },
      {
        product: 'футболка',
        productName: 'CAREFFULLY HOT3',
        size: 'S'
      }
    ],
    amountProducts: 0,
    sumTotal: 1200
  }),
  computed: {
    userName () {
      return this.userInfo.find(item => item.descr === 'userName').answer
    }
  }
}
</script>

<style scoped lang="scss">
@mixin nameProductList($name) {
  content: $name;
  position: absolute;
  top: 6px;
  left: 13px;
  background-color: #6A7995;
  padding: 3px;
  font-size: 13px;
  text-transform: capitalize;
  color: #fff;
}
.profile-cap {
  &__wrapper {
    display: flex;
    height: 368px;
    position: relative;
    color: #fff;
    margin: 35px 0 0;
  }

  &__user {
    height: 100%;
    width: 280px;
    background-color: #1B212C;
    border-radius: 7px;
    margin-right: 16px;
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 13px;
  }

  &__name {
    font-family: Roboto;
    font-size: 15px;
    line-height: 1;
    text-transform: capitalize;
    color: #FFFFFF;
    display: inline-block;
  }

  &__img-wrapper {
    width: 100%;
    height: calc(100% - 26px);
    position: relative;
    margin: 13px 0;
  }

  &__img {
    position: absolute;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__btn {
    padding: 13px 10px;
    background-color: #3B4659;
    font-family: Roboto;
    font-size: 12px;
    line-height: 1;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }

  &__info {
    height: 100%;
    background-color: #1B212C;
    border-radius: 7px;
    padding: 13px;
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &-row {
      position: relative;
      width: auto;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &-input {
      padding: 13px;
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
      width: 100%;
      border-radius: 3px;
      transition: 0.3s ease;
    }

    &-descr {
      position: absolute;
      top: 50%;
      left: 13px;
      transform: translateY(-50%);
      font-size: 11px;
      color: #F9F9F9;
      display: block;
      transition: 0.3s ease;
      text-transform: uppercase;
    }

    &-input:focus, &-input:not(:placeholder-shown) {
      margin-top: 7px;
    }

    &-input:focus ~ &-descr,
    &-input:not(:placeholder-shown) ~ &-descr{
      top: 0;
      left: 0;
      font-size: 11px;
      color: #F9F9F9;
      opacity: 0.5;
    }

  }
}

.products {
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #1B212C;
  max-width: 100%;
  overflow-x: auto;
  padding: 30px 13px 13px 13px;
  border-radius: 7px;
  margin: 26px 0;

  &-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;

    &__item {
      margin-right: 20px;
      min-width: 205px;
      flex: 1;
    }
  }

  &-finally {
    min-width: 260px;
    max-height: 300px;
    overflow-y: auto;
    border: 3px solid #3B4659;
    padding: 11px 0;
    margin-left: 20px;

    &__info {
      display: flex;
      align-content: center;
      justify-content: space-between;
      text-transform: uppercase;
      background-color: #3B4659;
      color: #fff;
      padding: 12px 8px;
      margin: 0 7px 11px;

      &-product {
        font-size: 10px;
        display: inline-block;
        max-width: 170px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        &:not(:last-child) {
          margin-right: 11px;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.products--cart {
  &:before {
    @include nameProductList('коризина')
  }
}

.products--liked {
  &:before {
    @include nameProductList('понравившееся')
  }
}

.products--maybe-like-it {
  &:before {
    @include nameProductList('возможно понравится')
  }
}

.collect-clothes {
  margin: 100px 0;

  &__title {
    font-weight: bold;
    font-size: 28px;
    line-height: 1.1;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
  }

  &-main {
    display: flex;
    justify-content: space-between;
    height: 700px;
    padding-top: 50px;
  }

  &__visual {
    flex: 5;
    background: #494747;
    box-shadow: inset 0px 0px 50px #3E3C3C;
  }

  &__products {
    flex: 4;
    background: #d76262;
    margin: 0 20px;
  }

  &__sort {
    flex: 1.5;
    background: #87a960;
  }
}
</style>
