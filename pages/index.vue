<template>
  <main class="main">
    <!--first screen-->
    <div class="container-flex first-screen">
      <section :id="this.sliderCardData.id" ref="poster" class="poster container" :data-id="this.sliderCardData.id">
        <div class="poster-slider">
          <div class="slider-border">
            <img :src="this.sliderCardData.substrateUrl" alt="подложка">
          </div>
          <img
            class="poster-slider__img animate__animated"
            :src="this.urlImgFrontAndBack[0]"
            :alt="this.sliderCardData.name"
            :title="this.sliderCardData.name"
          >
          <img
            hidden
            class="poster-slider__img animate__animated poster-slider__img-substrate"
            :src="this.urlImgFrontAndBack[1]"
            :alt="this.sliderCardData.name"
            :title="this.sliderCardData.name"
          >
          <div class="poster-slider-nav">
            <span @click="newPoster($event = 'prev')"><app-red-button data-dark :text="'❮'" class="slider-nav-btn" /></span>
            <span @click="revertCard($event)"><app-red-button data-dark :text="'перевернуть'" /></span>
            <span @click="newPoster($event = 'next')"><app-red-button data-dark :text="'❯'" class="slider-nav-btn" /></span>
          </div>
        </div>
        <div class="poster-info">
          <h1 class="poster-info__title">
            {{ this.sliderCardData.name }}
          </h1>
          <div class="poster__descr">
            <p class="poster__text">
              {{ this.sliderCardData.text }}
            </p>
            <ul class="poster__text poster__list">
              <li v-for="li of this.sliderCardData.info" :key="li">
                {{ li }}
              </li>
            </ul>
          </div>
          <div class="poster__descr">
            <div class="poster__timer">
              <span class="timer-countdown">До дропа осталось:</span>
              <time v-if="this.timeLeft && this.timeLeft > 0" class="timer">
                <div class="timer__block">
                  <span id="days">{{ Math.floor((this.timeLeft / (1000 * 60 * 60 * 24))) >= 10 ? Math.floor((this.timeLeft / (1000 * 60 * 60 * 24))) : `0${Math.floor((this.timeLeft / (1000 * 60 * 60 * 24)))}` }}</span> :
                </div>
                <div class="timer__block">
                  <span id="hours">{{ Math.floor((this.timeLeft / (1000 * 60 * 60) % 24)) >= 10 ? Math.floor((this.timeLeft / (1000 * 60 * 60) % 24)) : `0${Math.floor((this.timeLeft / (1000 * 60 * 60) % 24))}` }}</span> :
                </div>
                <div class="timer__block">
                  <span id="minutes">{{ Math.floor((this.timeLeft / 1000 / 60) % 60) >= 10 ? Math.floor((this.timeLeft / 1000 / 60) % 60) : `0${Math.floor((this.timeLeft / 1000 / 60) % 60)}` }}</span> :
                </div>
                <div class="timer__block">
                  <span id="seconds">{{ Math.floor((this.timeLeft / 1000) % 60) >= 10 ? Math.floor((this.timeLeft / 1000) % 60) : `0${Math.floor((this.timeLeft / 1000) % 60)}` }}</span>
                </div>
              </time>
              <div v-else class="poster-released">
                released
              </div>
            </div>
            <div class="poster-price">
              <span>{{ this.sliderCardData.priceDrop }}</span>
              <span v-if="this.realDate > 0">{{ this.sliderCardData.pricePreorder }}</span>
            </div>
          </div>
          <div class="poster__descr">
            <span class="sold-out">SOLD OUT</span>
            <span @click="CardInfoModal($event)"><app-red-button :text="'ПОДРОБНЕЕ'" /></span>
          </div>
        </div>
      </section>
    </div>
    <!--first screen-->

    <app-three-d-carousel />

    <section class="delivery">
      <span class="delivery-figure-left"></span>
      <h2 class="page-title">
        все о доставке all about delivery
      </h2>
      <div class="delivery-info-wrapper">
        <article class="delivery-info">
          <img src="@/static/img/other/delivery/post-office.svg" alt="Доставка почтой России" class="delivery-info__img">
          <h3 class="delivery-info__text">
            почта<br>россии
          </h3>
        </article>
        <article class="delivery-info">
          <img src="@/static/img/other/delivery/email.svg" alt="Доставка СДЭК" class="delivery-info__img">
          <h3 class="delivery-info__text">
            сдэк
          </h3>
        </article>
        <article class="delivery-info">
        <img src="@/static/img/other/delivery/city.svg" alt="Самовывоз в МСК" class="delivery-info__img">
        <h3 class="delivery-info__text">
          самовывоз<br>в москве
        </h3>
      </article>
      </div>
      <div class="delivery-descr">
        <p class="delivery-descr__text">Отправка товара производится в течение 3-4 дней после оплаты, если товар есть в наличии, то есть исключения - это товары на стадии предзаказов.</p>
        <p class="delivery-descr__text">При доставке почтой России, как показала практика, товар едет не больше 7 дней.</p>
        <p class="delivery-descr__text">СДЭК доставляет быстрее, чем почта России и если Вам нужно на руках иметь одежду в течение 1-2 дней, то это наилучший вариант.</p>
        <p class="delivery-descr__text">Также можете забрать Ваш заказ прямо у меня из рук, если Вы живете в Москве: личные встречи никто не отменял : )</p>
      </div>
      <span class="delivery-figure-right"></span>
    </section>

    <div class="other" id="other">
      <div class="other-figure-left-wrapper">
        <img src="@/static/img/other/other/figure-left-top.svg" alt="" class="other-figure-left-img">
        <h2 class="page-title">Возможные вопросы<br>possible questions</h2>
      </div>
      <div class="other-questions">
        <ul class="other-questions__list" @mousemove="questionGlowFonOver($event)" @click="questionTabs($event)">
          <li
            class="other__list-item"
            @mouseleave="questionGlowFonLeave($event)"
            v-for="question of this.questionAnswer"
            :key="question.quest"
          >{{ question.quest }}</li>
        </ul>
        <div class="other-answers" ref="answers">
          <p class="other-answers__text" hidden :key="answer.answ" v-for="answer in this.questionAnswer">{{ answer.answ }}</p>
        </div>
      </div>
    </div>

    <app-card-info-modal
      v-if="openCloseModal"
      ref="threeDModal"
      v-model="openCloseModal"
      class="animate__zoomIn"
      :item="itemData.name"
      :btns="{
        volume: null,
        close: true,
        like: true,
        basket: true
      }"
    />
  </main>
</template>

<script>
import AppThreeDCarousel from '@/components/3DIndexSlider'
import AppCardInfoModal from '@/components/CardInfoModal'
import AppRedButton from '@/components/RedBtn'
import 'animate.css'

export default {
  components: {
    AppCardInfoModal,
    AppThreeDCarousel,
    AppRedButton
  },
  data () {
    return {
      itemData: null,
      sliderCardData: {},
      urlImgFrontAndBack: [],
      threeDCarousel: false,
      realDate: null,
      questionAnswer: [
        {
          quest: 'Как оформить заказ?', answ: `Оформить заказ можно через сайт: добавляете товар в корзину и через нее производите оплату,
          либо через "Вконтакте": переходите в раздел товаров, выбираете интересующий Вас продук и заполняете все поля.
          После с Вами свяжется менеджер и вы произведете оплату.`
        },
        {
          quest: 'Рекомендации по уходу', answ: `Следующие рекомендации будут актуальны для любой нашей продукции:
            При стирке и глажке одежду нужно вывернуть наизнанку. Стирать следует при температуре не выше 30°. Не использовать отбеливатели.`
        },
        {
          quest: 'Как отследить заказ?', answ: `Отследить заказ можно через различные сайты в зависимости от способа доставки:
            Почта России и СДЭК. Независимо от варианта доставки,
            будет выслан трек-код, с помощью которого и будет происходить отслеживание
            (также отслеживать можно через приложения "Вконтакте").`
        },
        {
          quest: 'Возврат товара', answ: 'Возврат товара возможен только при обнаружении брака или несоответствия описанию. В таком случае отправка товара обратно происходит за наш счет, а Вам будет возвращена сумма в полном объеме.'
        },
        {
          quest: 'Идея за подарок', answ: `У Вас есть возможность получить от меня (основателя) подарок за идею дизайна.
            Представьте ситуацию: разрабатывается активно новый продукт, например, по аниме Hunter x Hunter.
            Я создаю чат, где набираю людей, которые смотрели Hunter\`a (и только их). Там я презентую им этот продукт (все на стадии идеи). О нем будем знать только мы: что за одежда, что на нем будет, какие фишки будут использоваться…
            Также я буду выслушивать Ваши идеи, отрицательные или положительные отзывы о грядущем релизе.
            Чем это круто и полезно?
            1) Будет создан товар, продуманный до мелочей, со всеми фишками и тонкостями из аниме.
            2) Будут отбираться действительно перспективные идеи от Вас. Если идея по итогу будет одобрена, то будет стоять вопрос о реализации. Если нет, то нет.
            Важно понимать и помнить, все в конце будет прогоняться через руку профессионального дизайнера, чтобы вышла «чоколатка» . То есть будет обсуждаться именно идея - концепция.

            А как за это получить подарок и что это за подарок такой?
            Тот, чье предложение будет реализовано или поможет мне в создании нового продукта, будет поощрен подарком.
            Это может быть стикер пак, скидки, деньги (это когда админ будет миллионером), билеты в местный кино, какой — то неожиданный бонус от меня в виде сладостей..
            Это именно подарок: что — нибудь оригинальное и интересное от меня. И подарки эти будут людские: я хочу поощрить и порадовать вас за активное участие и классные идеи. Поэтому ждите достойный сюрприз, а не «абы что».
            После обсуждений я буду исключать ВСЕХ из чата. Никто не будет там отсиживаться.
            Если резюмировать, вот что имеем:
            - я подготавливаю презентацию о грядущем товаре
            - собираю людей в чат
            - вы отвечаете на поставленные вопросы
            - ведем бурное обсуждение
            - с меня подарок
            - исключаю всех из чата

            все начинается с Вас
            P.S
            Есть те кто уже получил от меня свои подарки, поскольку принимали активное участие в этом. Огромное им от меня спасибо. Если остались вопросы, пишите мне.
            Возможность проявить себя есть всегда. Чтобы понять происходящее, просто следи за группой и разок поучаствуй в таком мероприятии. Будет интересно!`
        },
        {
          quest: 'Скидочная система', answ: `По этому поводу отлично написана статья в ВК, потому что именно там она и актульна. В добавок, независимо от этого разрабатывается система
            накопительных процентов для скидок на сайте.`
        },
        {
          quest: 'Написать разработчику', answ: 'Если есть вопросы, предложения: деловые и не очень, то всегда можете написать мне в вк: @iddizzycrow - там меня застать легче всего. Всем буду рад'
        }
      ]
    }
  },
  computed: {
    openCloseModal () {
      return this.$store.getters.get3DModalCard
    },
    cardsArr () {
      return this.$store.getters.cardsArr
    },
    slideDropDate () {
      return this.$store.getters.dropDate
    },
    timeLeft () {
      return this.$store.getters.timeLeft
    }
  },
  async beforeMount () {
    // await this.$store.dispatch('disableScroll')

    // начало махинайций с выводом данных
    await this.$store.dispatch('indexFirstScreen', './db.json')

    // nearestDrop
    for (const card of this.cardsArr) {
      this.realDate = Date.parse(card.dropDate) - Date.parse(new Date())

      if (this.realDate > 0) {
        this.itemData = await JSON.parse(JSON.stringify(card))
        this.sliderCardData = await JSON.parse(JSON.stringify(card))
        await this.$store.dispatch('timer', this.sliderCardData.dropDate) // undefiend
        this.urlImgFrontAndBack.push(this.itemData.imageUrl, this.itemData.imageBackUrl)

        break
      } else {
        console.log('нет нового товара, все')
      }
    }
    // конец махинаций с выводом данных
  },
  mounted () {
    window.addEventListener('load', function () {
      this.$refs.answers.querySelector('.other-answers__text').hidden = false
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 100)
      })
    })
  },
  methods: {
    CardInfoModal (e) {
      this.$store.dispatch('CardInfoModal', e)
    },
    revertCard (e) {
      // фотография, которую надо менять
      const imgFrontAndBack = this.$refs.poster.querySelectorAll('.poster-slider__img')

      for (const img of imgFrontAndBack) {
        if (!img.hidden) {
          img.hidden = true
        } else {
          img.hidden = false
        }
      }

      // меняю в html местами изображения, чтобы анимация отрабатывала без новой подгрузки
      const lastImg = imgFrontAndBack[1]
      imgFrontAndBack[1].remove()
      this.$refs.poster.querySelector('.slider-border').insertAdjacentElement('afterend', lastImg)

      // a = [b, b = a][0];
    },
    newPoster (e) {
      // this.cardsArr - массив из шины со всеми карточками
      this.cardsArr.find((item, index, array) => {
        if (item.id === this.sliderCardData.id) {
          if (e === 'next' && array[index + 1]) {
            this.sliderCardData = array[index + 1]
            this.realDate = Date.parse(array[index + 1].dropDate) - Date.parse(new Date())
            this.$store.dispatch('timer', array[index + 1].dropDate)
          }
          if (e === 'next' && !array[index + 1]) {
            this.sliderCardData = array[0]
            this.realDate = Date.parse(array[0].dropDate) - Date.parse(new Date())
            this.$store.dispatch('timer', array[0].dropDate)
          }
          if (e === 'prev' && array[index - 1]) {
            this.sliderCardData = array[index - 1]
            this.realDate = Date.parse(array[index - 1].dropDate) - Date.parse(new Date())
            this.$store.dispatch('timer', array[index - 1].dropDate)
          }
          if (e === 'prev' && !array[index - 1]) {
            this.sliderCardData = array[array.length - 1]
            this.realDate = Date.parse(array[array.length - 1].dropDate) - Date.parse(new Date())
            this.$store.dispatch('timer', array[array.length - 1].dropDate)
          }
          return item
        }
        return null
      })
    },
    questionGlowFonOver (e) {
      const target = e.target.closest('.other__list-item')
      const spotlightSize = 'rgba(255, 255, 255, 0.1) 7px, rgba(255, 255, 255, 0.09) 20px, rgba(255, 255, 255, 0.03) 52px'
      if (target) {
        target.style.background = `radial-gradient(circle at ${e.offsetX / target.offsetWidth * 100}% ${e.offsetY / target.offsetHeight * 100}%, ${spotlightSize})`
      }
    },
    questionGlowFonLeave (e) {
      e.target.closest('.other-questions__list').querySelectorAll('.other__list-item').forEach((item, i) => {
        item.style.background = 'rgba(255, 255, 255, 0.03)'
      })
    },
    questionTabs (e) {
      const target = e.target.closest('.other__list-item')
      if (target) {
        target.closest('.other-questions__list').querySelectorAll('.other__list-item').forEach((item, i) => {
          target.closest('.other-questions').querySelectorAll('.other-answers__text')[i].hidden = true
          if (item.textContent === target.textContent) {
            target.closest('.other-questions').querySelectorAll('.other-answers__text')[i].hidden = false
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Montserrat:wght@600;700&family=Stardos+Stencil&display=swap');
//font-family: 'Black Ops One', cursive;
//font-family: 'Montserrat', sans-serif;
//font-family: 'Stardos Stencil', cursive;
@mixin infoHydi{
  padding-left: 4px;
  margin: 8px 0;

  li{
    font-size: 16px;
    line-height: 1.2;
  }
}

.page-title {
  position: relative;
  max-width: 300px;
  font-weight: bold;
  font-size: 26px;
  line-height: 1.6;
  text-align: center;
  margin: 0 auto;
  text-transform: uppercase;
  color: #FFFFFF;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 86%;
    height: 2px;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    background: white;
  }
}

.sold-out {
  font-family: 'Stardos Stencil', cursive;
  font-size: 44px;
  color: #fff;
}

.first-screen {
  background: linear-gradient(248.39deg, rgba(27, 10, 22, 0.93) 10.92%, rgba(121, 112, 116, 0.65) 90.32%);
  min-height: calc(100vh - 51px);
}

.container-flex{
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 970px) {
    flex-wrap: nowrap;
  }
}

.poster {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 50px 0;

  &-released {
    font-size: 30px;
    line-height: 1;
    font-family: 'Stardos Stencil', cursive;
    text-transform: uppercase;
    color: white;
    margin-top: 5px;
  }

  &-slider-nav {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-basis: 60%;
    width: 60%;
    margin: 0 auto;
    left: 50%;
    top: calc(100% + 50px);
    transform: translate(-50%, -25%);

    button {
      border-radius: 8px 8px 0 0;
    }
  }

  &__descr {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 33px;

    &:before {
      content: '';
      position: absolute;
      height: 80%;
      width: 2px;
      top: 10%;
      left: 53%;
      background: #fff;
      border-radius: 5px;
    }
  }

  &__text {
    max-width: 250px;
    text-align: left;
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 1.4;
    color: #FFFFFF;
    letter-spacing: 0.9px;
    text-align: justify;

    &.poster__list {
      width: 216px;
      &:after {
        content: none;
      }
    }

    & li{
      display: block;
      list-style: none;
      text-decoration: none;
    }
  }

  &-info {
    max-width: 524px;

    &__title {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 46px;
      line-height: 56px;

      color: #F4EAEA;
    }
  }
}

.slider-nav-btn {
  font-size: 25px;
  padding: 10px 18px;
}

.poster-price {
  font-family: Black Ops One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  text-align: right;

  color: #FFFFFF;

  & span:last-child {
    background: #ef3794c7;
    padding: 5px 10px;
    border-radius: 5px;
  }

  & span:first-child {
    font-size: 16px;
    text-decoration: line-through;
    color: #e7e1e1;
  }
}

.poster-slider, .poster-slider__img {
  position: relative;
  max-width: 500px;
  max-height: 500px;
  height: 100%;
  width: 100%;
}

.slider-border {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 60px solid rgba(243, 43, 144, 0.12);
  box-shadow: 0 2px 25px #ff008240;
  border-radius: 50%;
  z-index: -1;
  background: rgba(243, 43, 144, 0.08);

  & img {
    height: 100%;
    width: 100%;
    position: absolute;
    transform: translate(-25%, -30%);
  }
}

// Timer
.timer-countdown {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #F9F9F9;
}

.timer{
  display: flex;
}

.timer__block{
  font-family: Stardos Stencil;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 1.38;
  color: #FFFFFF;
  margin-right: 10px;
  text-transform: uppercase;

  @media (max-width: 465px) {
    margin-bottom: 15px;
  }

  @media (max-width: 490px) {
    font-size: 24px;
  }
}
// Timer

.delivery {
  position: relative;
  width: 100%;
  padding: 77px 0;
  color: white;
  background: linear-gradient(180deg, #3E3C3C 0%, rgba(62, 60, 60, 0.5) 49.92%, rgba(53, 56, 74, 0) 99.06%), #3C3D3E;

  &-info-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 137px auto;
    max-width: 812px;
    width: 100%;
  }

  &-info {
    text-align: center;
    position: relative;

    &__text {
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 1.25;
      text-transform: uppercase;
      margin-top: 10px;
    }
  }

  &-descr {
    position: relative;
    max-width: 894px;
    width: 100%;
    padding: 69px 66px 0;
    margin: 0 auto 100px;

    &__text {
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 27px;
      margin-bottom: 36px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:after, &:before {
      content: '';
      position: absolute;
      width: 119px;
      height: 119px;
      background: #FF0081;
      left: 0;
      top: 0;
      clip-path: polygon(0 1%, 100% 0, 20% 20%, 0% 100%);
    }

    &:before {
      right: 0;
      left: auto;
      transform: rotate(90deg);
    }
  }

  &-figure {
    &-left {
      position: absolute;
      left: -153px;
      top: 270px;
      transform: rotate(-45deg);

      &:before {
        content: '';
        position: absolute;
        left: 143px;
        top: 2px;
        width: 314px;
        height: 113px;
        z-index: 3;
        clip-path: polygon(23% 0, 77% 0, 100% 65%, 85% 65%, 73% 100%, 27% 100%, 15% 65%, 0 65%);
        background: linear-gradient(180deg, rgba(122,131,191,1) 0%, rgba(122,131,191,1) 65%, rgba(255,0,129,1) 65%, rgba(255,0,129,1) 100%);
      }

      &:after {
        content: '';
        position: absolute;
        clip-path: polygon(24% 0, 76% 0, 100% 100%, 0% 100%);
        background: rgb(34, 40, 51);
        transform: translateX(-4px);
        width: 608px;
        height: 142px;
        z-index: 2;
        top: 76px;
      }
    }

    &-right {
      position: absolute;
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);
      bottom: 0;
      right: 0;
      width: 252px;
      height: 252px;
      background: #2D3037;

      &:after {
        content: '';
        position: absolute;
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        bottom: 0;
        right: 0;
        width: 147px;
        height: 147px;
        background: #7A83BF;
      }

      &:before {
        content: '';
        position: absolute;
        clip-path: polygon(0 0, 0% 100%, 100% 0);
        width: 56px;
        height: 56px;
        background: #FF0081;
        right: 0;
        bottom: 0;
        transform: translate(-45px, -45px);
      }
    }
  }
}

.other {
  background: #1B212C;
  position: relative;
  overflow: hidden;
  padding: 77px 0;

  &-figure-left {
    display: flex;
    flex-wrap: wrap;

    &:nth-child(2n) {
      margin-left: -75px;
    }
  }

  &-figure-left__item {
    margin-bottom: 3px;
    margin-right: -24px;
    background: #333942;
    width: 140px;
    height: 35px;
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);

    &:nth-child(2n) {
      transform: rotate(180deg);
    }
  }

  &-figure-left-img {
    position: absolute;
    left: 0;
    top: -25px;
  }

  .page-title {
    max-width: 370px;
  }

  &-questions {
    max-width: 894px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    position: relative;
    margin-top: 137px;
  }

  &-questions__list {
    flex: 1;
    margin-right: 30px;
  }

  &__list-item {
    display: block;
    padding: 20px;
    background: rgba(255, 255, 255, 0.03);
    margin-bottom: 10px;
    border-radius: 4px;
    text-transform: uppercase;
    color: white;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-answers {
    flex: 1;
    padding: 20px 10px;
    box-shadow: 0px 0px 49px -40px white;
    border: 4px solid #ffffff33;
    border-radius: 2px;
    line-height: 1.5;
    font-size: 15px;
    overflow-y: auto;
    color: #fff;
    max-height: 435px;

    &__text {}
  }
}
</style>
