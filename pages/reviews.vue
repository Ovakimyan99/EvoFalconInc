<template>
  <div>
    <div class="reviews-vk container">
      <div class="reviews-vk__text-wrapper">
        <p class="reviews-vk__text">со всеми отзывами можно ознакомиться в группе в ВК</p>
        <a href="https://vk.com/topic-200676580_47084795" target="_blank" class="reviews-vk__link">перейти</a>
      </div>
      <img src="@/static/img/other/social/qr.jpg" alt="qr code evo falcon inc" class="reviews-vk__img-qr">
    </div>
    <app-sort-nav />
    <div ref="sliderWrapper">
      <div class="reviews-slider container" v-for="{ productName, anime, reviews, idd } of reviews" :data-idd="idd" :key="productName">
        <h2 class="reviews-slider__title">{{ productName }}</h2>
        <span class="reviews-slider__title" v-if="anime">anime: "{{ anime }}"</span>

        <div ref="reviewsWrapper" class="reviews-slider-wrapper">
          <section class="reviews-slide__sidebar">
            <div class="reviews-slide__content" v-for="review of [...reviews].reverse()" :key="review.name">
              <a v-if="review.userLink" :href="review.userLink" class="reviews-slide__name" target="_blank">{{ review.name }}</a>
              <span v-else class="reviews-slide__name">{{ review.name }}</span>
              <p class="reviews-slide__text">{{ review.text }}</p>
            </div>
          </section>

          <div class="reviews-slide__img-content">
            <picture class="reviews-slide__img-wrapper"  v-for="review of reviews" :key="review.name">
              <source v-if="review.img[0].indexOf('webp') > 0" :srcset="review.img[0]" class="reviews-slide__img">
              <source v-else-if="review.img[1] && review.img[1].indexOf('webp') > 0" :srcset="review.img[1]" class="reviews-slide__img">
              <img v-else :src="review.img[0]" class="reviews-slide__img" :alt="review.name">
            </picture>
          </div>

          <div class="reviews-slider__controls" data-active="0">
            <button class="controls__down-btn controls--btn" @click="(e) => changeSlide('down', e)">
              <i>&#8595;</i>
            </button>
            <button class="controls__up-btn controls--btn" @click="(e) => changeSlide('up', e)">
              <i>&#8593;</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSortNav from '@/components/SortNav'

export default {
  name: 'reviews',
  components: {
    AppSortNav
  },
  data: () => ({
    activeSlide: 0,
    reviews: [
      {
        productName: 'HOODIE «EMPTINESS OF THE SOUL» VOL.01',
        anime: 'Tokyo Ghoul',
        idd: '001',
        reviews: [
          {
            img: ['./img/lykbyk/hoody-kaneki/7.jpg'],
            name: 'Мокап',
            userLink: 'https://vk.com/iddizzycrow1947',
            text: 'Используется оверсайз крой, с нашивками из джинсы и прямой полноцветной печатью.'
          },
          {
            img: ['./img/lykbyk/hoody-kaneki/2.jpg'],
            name: 'Полина Малышева',
            userLink: 'https://vk.com/p.malysheva99',
            text: 'Фотомодель. Худи ей очень понравился'
          },
          {
            img: ['./img/lykbyk/hoody-kaneki/3.jpg'],
            name: 'Данила Булгаков',
            userLink: 'https://vk.com/yrlywww',
            text: 'Фотомодель. Ему очень понравилось качество худи'
          },
          {
            img: ['./img/lykbyk/hoody-kaneki/4.jpg'],
            name: 'Вячеслав Дядичко',
            userLink: 'https://vk.com/dead_666x7',
            text: 'Победитель нашего первого конкурса!'
          },
          {
            img: ['./img/lykbyk/hoody-kaneki/5.jpg'],
            name: 'Даня Леоненко',
            userLink: 'https://vk.com/trap_alligator',
            text: 'ХУДАК СУПЕР КЛАСС!!!!. ЗАКАЗЫВАЙТЕ ОПТОМ ДЛЯ ВСЕЙ СЕМЬИ И ЖДИТЕ ЛОНГ. МАТЕРИАЛ ИМБА. КОГДА НАДЕВАЕШЬ ИГРАЕТ ПЕСНЯ ЛЕЛЕЛЕМИДАЙ. 1000-7?☠.'
          },
          {
            img: ['./img/lykbyk/hoody-kaneki/8.jpg'],
            name: 'Кирилл Иванов',
            userLink: 'https://vk.com/plvgboi',
            text: 'Худи лучшего качества, всем советую этот бренд. Ребята, вы лучшие, продолжайте в том же духе)'
          },
          {
            img: ['./img/lykbyk/hoody-kaneki/9.jpg'],
            name: 'Ника Домбровская',
            userLink: 'https://vk.com/mbnikizzz',
            text: 'Хочу поблагодарить создателей сия прекрасного шедевра, чувствую себя максимально dead inside 🥵\n' +
              'Материал очень приятный, а принт просто невероятный 😍\n' +
              'Раскупайте, пока есть в ассортименте, не пожалеете)'
          },
          {
            img: ['./img/lykbyk/hoody-kaneki/10.jpg'],
            name: 'Андрей Маслов',
            userLink: 'https://vk.com/andy.msl666',
            text: '1000-7\n' + 'Худак хорошего качества 🔥'
          },
          {
            img: ['./img/lykbyk/hoody-kaneki/11.jpg'],
            name: 'Тигран Овакимян',
            userLink: 'https://vk.com/iddizzycrow1947',
            text: 'Знакомьтесь, это админ :)'
          },
          {
            img: ['./img/lykbyk/hoody-kaneki/1.jpg'],
            name: 'Фотосессия',
            userLink: '',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, tempore voluptatem.'
          }
        ]
      },
      {
        productName: 'CAREFULLY HOT',
        anime: '',
        idd: '002',
        reviews: [
          {
            img: ['./img/lykbyk/carefully-hot/carefullyHotFon.jpg'],
            name: 'Мокап',
            userLink: 'https://vk.com/evo_falcon_inc',
            text: 'Используется оверсайз крой, с нашивками из джинсы и прямой полноцветной печатью.'
          },
          {
            img: ['./img/lykbyk/carefully-hot/1.jpg'],
            name: 'Арсений Ищенко',
            userLink: 'https://vk.com/sadboychristi',
            text: 'Тишка пришла, качеством ткани и принта безумно доволен, сидит отлично, в качестве бонуса положили конфетки, обязательно возьму ещё какую нибудь вещь!'
          },
          {
            img: ['./img/lykbyk/carefully-hot/2.jpg'],
            name: 'Фотомодель',
            userLink: 'https://vk.com/iddizzycrow1947',
            text: ''
          },
          {
            img: ['./img/lykbyk/carefully-hot/3.jpg'],
            name: 'Фотомодель',
            userLink: 'https://vk.com/dead_666x7',
            text: ''
          },
          {
            img: ['./img/lykbyk/carefully-hot/4.jpg'],
            name: 'Фотомодель',
            userLink: 'https://vk.com/iddizzycrow1947',
            text: ''
          },
          {
            img: ['./img/lykbyk/carefully-hot/5.jpg'],
            name: 'Фотомодель',
            userLink: 'https://vk.com/kamposter120',
            text: ''
          },
          {
            img: ['./img/lykbyk/carefully-hot/6.jpg'],
            name: 'Фотомодель',
            userLink: 'https://vk.com/kamposter120',
            text: ''
          }
        ]
      }
    ]
  }),
  computed: {
    reviewsRevers () {
      return [...this.reviews].reverse()
    }
  },
  methods: {
    changeSlide (direction, e) {
      const sliderWrapper = e.target.closest('.reviews-slider-wrapper')
      const idd = e.target.closest('.reviews-slider').getAttribute('data-idd')
      const reviewLenght = this.reviews.find(item => item.idd === idd).reviews.length
      const reviewsControl = e.target.closest('.reviews-slider__controls')
      let activeSlide = reviewsControl.getAttribute('data-active')
      if (direction === 'up') {
        activeSlide++
        if (activeSlide === reviewLenght) {
          activeSlide = 0
        }
      } else if (direction === 'down') {
        activeSlide--
        if (activeSlide < 0) {
          activeSlide = reviewLenght - 1
        }
      }

      reviewsControl.setAttribute('data-active', activeSlide)
      const sidebar = sliderWrapper.querySelector('.reviews-slide__sidebar')
      const mainSlide = sliderWrapper.querySelector('.reviews-slide__img-content')

      const btnControls = sliderWrapper.querySelectorAll('.controls--btn')
      btnControls.forEach((item) => {
        const btnConrolsLeft = sidebar.clientWidth / sliderWrapper.clientWidth * 100
        item.style.left = `${btnConrolsLeft}%`
      })

      mainSlide.style.transform = `translateY(-${100 * activeSlide}%)`
      sidebar.style.transform = `translateY(${100 * (activeSlide - reviewLenght + 1)}%)`
    }
  },
  mounted () {
    const sliderWrapper = this.$refs.sliderWrapper
    const sliders = sliderWrapper.querySelectorAll('.reviews-slider')

    sliders.forEach((item) => {
      const sidebar = item.querySelector('.reviews-slide__sidebar')
      const heightOneSlide = sidebar.clientHeight / window.innerHeight * 100
      sidebar.style.transform = `translateY(-${(this.reviews.length - 1) * heightOneSlide}vh)`
    })
  }
}
</script>

<style scoped lang="scss">
.reviews-vk {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 400px;
  margin: 50px auto;

  &__text {
    font-size: 20px;
    line-height: 1.3;
  }

  &__text-wrapper {
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    max-width: 350px;
  }

  &__link {
    padding: 10px 20px;
    background: #5181B8;
    border-radius: 6px;
    color: #fff;
    font-size: 13px;
    margin: 10px auto 0;
    display: inline-block;
  }

  &__img-qr {
    width: 300px;
    margin-left: 60px;
  }
}

.reviews-slider {
  margin-top: 100px;

  &__title {
    display: block;
    font-size: 25px;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    line-height: 1.3;
  }
}

.reviews-slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 450px;
  width: 80%;
  background-color: #1B212C;
  box-shadow: 0 0 30px -3px #1b212c;
  margin: 50px auto;
  border-radius: 7px;
  overflow: hidden;
}

.reviews-slide {

  &__sidebar {
    transition: transform 0.5s ease-in-out;
    height: 100%;
    left: 0;
    bottom: 0;
  }

  &__img-content {
    transition: transform 0.5s ease-in-out;
    height: 100%;
    right: 0;
    top: 0;
    max-width: 50%;
  }

  &__img-wrapper {
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
  }

  &__img {
    height: 100%;
    flex: auto;
    object-fit: cover;
  }

  &__content {
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 65px 20px 20px;
    color: #fff;
  }

  &__name {
    color: #fff;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 10px;
    display: inline;
    width: max-content;
  }

  &__text {
    font-size: 18px;
  }
}

.reviews-slider__controls {
}

.controls {

  &__down-btn {
    transform: translateX(-100%);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &__up-btn {
    transform: translateY(-100%);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &--btn {
    display: inline-block;
    background-color: #fff;
    border: none;
    color: #aaa;
    cursor: pointer;
    padding: 15px;
    font-size: 25px;
    line-height: 0.7;

    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 100;

    &:hover {
      color: black;
    }
  }
}
</style>
