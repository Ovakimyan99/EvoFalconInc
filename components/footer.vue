<template>
  <div>
    <footer class="footer">
      <div class="footer-info">
        <h3 class="footer-info__title">CONTACTS</h3>
        <div class="footer-info__options">
          <div class="footer-info__social" v-for="social in social" :key="social.name">
          <img :src="`./img/other/social/${social.src}.svg`" :alt="social.name" :title="social.name" class="social-icon">
        </div>
        </div>
      </div>
      <div class="footer-info">
        <h3 class="footer-info__title">FAQ</h3>
        <nav class="footer-info__options">
          <nuxt-link to="/#other" v-for="option in faq" :key="option"><span class="info__options">{{option}}</span></nuxt-link>
        </nav>
      </div>
      <div class="footer-info">
        <h3 class="footer-info__title">OTHER</h3>
        <nav class="footer-info__options">
          <nuxt-link :to="option.url" v-for="option in other" :key="option.text"><span class="info__options">{{option.text}}</span></nuxt-link>
        </nav>
      </div>
      <div class="footer-info">
        <h3 class="footer-info__title">INFO</h3>
        <nav class="footer-info__options">
          <nuxt-link :to="option.option" v-for="option in info" :key="option.option" class="info__options"><span>{{option.option}}: {{option.answer}}</span></nuxt-link>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    social: [
      {
        src: 'vk', name: 'vk'
      },
      {
        src: 'instagram', name: 'instagram'
      },
      {
        src: 'tiktok', name: 'tiktok'
      },
      {
        src: 'tiger', name: 'tiger'
      }
    ],
    faq: [
      'КАК ОФОРМИТЬ ЗАКАЗ?',
      'РЕКОМЕНДАЦИИ ПО УХОДУ',
      'КАК ОТСЛЕДИТЬ ЗАКАЗ?',
      'ВОЗВРАТ ТОВАРА',
      'ИДЕЯ ЗА ПОДАРОК',
      'СКИДОЧНАЯ СИСТЕМА',
      'НАПИСАТЬ РАЗРАБОТЧИКУ'
    ],
    other: [
      {
        text: 'Пользовательское соглашение', url: 'url'
      },
      {
        text: 'Публичная оферта', url: 'url'
      },
      {
        text: 'Обработка персональных данных', url: 'url'
      }
    ],
    info: [
      {
        option: 'ИНН', answer: '860327083277'
      },
      {
        option: 'ФИО', answer: 'ОВАКИМЯН ТИГРАН ДАВИТОВИЧ'
      },
      {
        option: 'Номер телефона', answer: '+79013854561'
      },
      {
        option: 'E-mail', answer: 'tigr.kman@gmail.com'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.footer {
  background-color: #6A7995;
  display: flex;
  justify-content: space-between;
  padding: 64px 136px;

  &-info {
    margin-right: 30px;
    color: #fff;
    max-width: 260px;
    text-transform: uppercase;

    &__title {
      margin-bottom: 21px;
      font-weight: bold;
      font-size: 26px;
      line-height: 1.6;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: '';
        width: 30px;
        background: #fff;
        height: 3px;
        position: absolute;
        left: 1px;
        bottom: 0;
      }
    }

    &__options {
      a {
        display: block;
        width: 100%;
      }
    }

    &__social {
      margin-right: 32px;
      margin-bottom: 21px;
      display: inline-flex;
      overflow: hidden;

      &:nth-child(2n) {
        margin-right: 0;
      }

      &:nth-child(3), &:nth-child(4) {
        margin-bottom: 0;
      }
    }

    &:first-child {
      max-width: 165px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.info__options {
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.8;
}
</style>
