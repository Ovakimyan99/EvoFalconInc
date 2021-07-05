<template>
  <main class="main">
    <div class="section-title">
      <h2 class="section-title__subject">арты недели по аниме</h2>
      <span class="section-title__anime title-line">“клинок рассекающий демонов”</span>
      <span class="section-title__anime">“kimetsu no yaiba”</span>
    </div>

    <div ref="artsSlider" class="arts-slider container" @click="artsChangeSlider($event)">
      <div
        class="arts-slider__slide"
        v-for="slide of artsInfo"
        :key="slide.urlImg"
        :style="'background-image:url(./img/arts/krd/' + slide.urlImg + '.jpg)'"
      >
        <h3>{{ slide.name }}</h3>
      </div>
    </div>

    <div class="section-title">
      <h2 class="section-title__subject">Выбери любимое аниме</h2>
      <span class="section-title__anime title-line">аниме, по которому хочешь видеть шмот</span>
      <span class="section-title__anime">choose your favorite anime</span>
    </div>

    <div class="anime-choice container">
      <div class="anime-choice__covers-wrapper">
        <span class="anime-choice__covers">обложки аниме</span>
        <div class="anime-choice__covers">
          <input
            type="text"
            placeholder="найти аниме в списке"
            class="anime-choice__covers-search"
          >
          <button type="button" class="anime-choice__search-btn">
            <img src="@/static/img/other/search.png" alt="найти">
          </button>
        </div>
      </div>

      <div class="anime-choice__options">

        <div class="anime-choice__options-wrapper">
          <img
            v-for="img of favoritAnime"
            :key="img.name"
            :src="'./img/anime/' + img.img + '.jpg'"
            :alt="img.name"
            :title="img.name"
            class="anime-choice__options-btn"
          >
        </div>

        <div class="anime-choice__options-wrapper" @click="choosingFavoriteAnime($event)">
          <span
            v-for="img of favoritAnime"
            :key="img.img"
            :data-id="img.img"
            class="anime-choice__options-btn anime-name"
          >{{ img.name }}</span>
        </div>

      </div>
    </div>

    <div class="section-title">
      <h2 class="section-title__subject">trello</h2>
      <span class="section-title__anime title-line">какое следующее аниме к просмотру?</span>
      <span class="section-title__anime">What's the next anime to watch?</span>
    </div>

    <div class="trello container">
      <div class="trello-column">
        <span class="trello-column__title">буду смотреть</span>
        <ul class="trello-column__options-wrapper">
          <li class="trello-column__options" draggable="true">Тетрадь смерти</li>
        </ul>
      </div>
      <div class="trello-column">
        <span class="trello-column__title">смотрю</span>
        <ul class="trello-column__options-wrapper">
          <li class="trello-column__options" draggable="true">семь смертных грехов</li>
        </ul>
      </div>
      <div class="trello-column">
        <span class="trello-column__title">просмотрено</span>
        <ul class="trello-column__options-wrapper">
          <li class="trello-column__options" draggable="true">великий и неповторимый туда сюда</li>
        </ul>
      </div>
    </div>
    <div class="trello trello-new-option container">
      <input type="button" value="добавить пункт в список" class="trello__btn">
      <input type="text" placeholder="название аниме" class="trello__input">
      <input type="button" value="удалить" class="trello__btn delete" hidden>
    </div>
  </main>
</template>

<script>
export default {
  name: 'news',
  data: () => ({
    artsInfo: [
      {
        name: 'zenitsu agatsuma',
        urlImg: '6'
      },
      {
        name: 'love couple',
        urlImg: '1'
      },
      {
        name: 'pillars',
        urlImg: '2'
      },
      {
        name: 'Giyu Tomioka',
        urlImg: '3'
      },
      {
        name: 'big trinity',
        urlImg: '4'
      },
      {
        name: 'zenitsu agatsuma',
        urlImg: '5'
      },
      {
        name: 'Senjuro Rengoku',
        urlImg: '9'
      },
      {
        name: 'Nezuko Kamado',
        urlImg: '7'
      }
    ],
    favoritAnime: [
      {
        img: 'krd',
        name: 'клинок рассекающий демонов'
      },
      {
        img: 'your-name',
        name: 'Твое имя'
      },
      {
        img: 'attack-on-titan',
        name: 'Атака титанов'
      },
      {
        img: 'hxh',
        name: 'Hunter x hunter'
      },
      {
        img: 'cowboy-bebop',
        name: 'Ковбой бибоп cowboy bebop'
      },
      {
        img: 'magic-battle',
        name: 'Магическая битва'
      },
      {
        img: 'jojo',
        name: 'JoJo - джо джо'
      },
      {
        img: 'evangelion',
        name: 'евангелион'
      },
      {
        img: 'death-note',
        name: 'тетрадь смерти'
      }
    ]
  }),
  methods: {
    artsChangeSlider (e) {
      const target = e.target
      for (const slide of this.$refs.artsSlider.querySelectorAll('div')) {
        if (target.classList.contains('active')) {
          slide.style.margin = '0 20px'
        } else {
          slide.style.margin = '0 7px'
          slide.classList.remove('active')
        }
      }

      if (target.classList.contains('active')) {
        target.classList.remove('active')
      } else if (target.classList.contains('arts-slider__slide')) {
        target.classList.add('active')
      }
    },
    choosingFavoriteAnime (e) {
      const anime = e.target
      if (anime.classList.contains('anime-name')) {
        anime.classList.toggle('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.section-title {
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
  margin: 125px auto 70px;
  max-width: max-content;
  display: flex;
  flex-direction: column;

  &__subject {
    font-weight: bold;
    font-size: 27px;
    line-height: 37px;
    display: block;
  }

  &__anime {
    font-weight: normal;
    font-size: 17px;
    line-height: 37px;
    position: relative;
    display: inline;
    width: max-content;
    margin: 0 auto;
  }

  &__anime.title-line:after {
    content: '';
    position: absolute;
    display: block;
    width: 70%;
    background: #fff;
    height: 2px;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
  }

  &:first-child {
    margin: 70px auto;
  }
}

.arts-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  margin: auto;

  &__slide {
    position: relative;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    flex: 1;
    transition: all 0.3s ease-in;
    margin: 0 20px;
    height: 100%;
    cursor: pointer;

    &:first-child {
      margin-left: 0 !important;
    }

    &:last-child {
      margin-right: 0 !important;
    }
  }

  &__slide h3 {
    opacity: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    text-transform: uppercase;
  }

  &__slide.active {
    flex: 10;
  }

  &__slide.active h3 {
    transition: opacity 0.3s ease-in 0.4s;
    opacity: 1;
  }
}

.anime-choice {
  margin: 55px auto;

  &__covers-wrapper {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    color: #fff;
  }

  &__covers {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    background: #1B212C;
    width: 100%;
    font-size: 17px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__covers-search {
    padding: 12px;
    border: 4px solid #1B212C;
    background: #fff;
    font-size: 17px;
    width: calc(100% - 52px);
  }

  &__search-btn {
    padding: 10px 10px 10px 9px;
    height: 52px;
    width: 52px;
    overflow: hidden;
    background: #1B212C;

    img {
      height: 100%;
    }
  }

  &__options {
    display: flex;
    flex-wrap: nowrap;
    max-height: 610px;
    padding: 15px 0;

    &-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 15px 15px;
      width: calc(50% - 5px);

      &:first-child {
        margin-right: 10px;
      }
    }

    &-btn {
      box-shadow: 0px 0px 20px -4px #151414;
      border-radius: 30px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &.anime-name {
        font-size: 16px;
        line-height: 24px;
        padding: 0 10px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        cursor: pointer;

        background: rgba(255, 255, 255, 0.08);
        border: 3px solid rgba(255, 255, 255, 0.06);

        &:hover {
          background: rgba(255, 255, 255, 0.12);
          border: 3px solid rgba(255, 255, 255, 0.06);
          box-sizing: border-box;
          box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.2);
        }

        &.active {
          background: rgba(255, 255, 255, 0.25);
          border: 3px solid rgba(255, 255, 255, 0.12);
          box-sizing: border-box;
          box-shadow: inset 0px 0px 12px 2px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}

.trello {
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  line-height: 44px;
  text-transform: uppercase;
  color: #FFFFFF;

  &-column {
    flex: 1;
    max-width: calc(100% / 3);

    &__title {
      padding: 26px 20px;
      display: block;
      text-align: center;
      background: #1B212C;
      font-size: 20px;
      margin-bottom: 23px;
    }

    &__options-wrapper {
    }

    &__options {
      font-size: 15px;
      text-align: left;
      padding: 25px;
      font-variant: small-caps;
      color: #1B212C;
      line-height: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      cursor: pointer;
      transition: 0.3s background ease;
      background: #e2e1e1;

      &:hover {
        background: #F5F5F5;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__btn {
    background: #6A7995;
    padding: 20px;
    margin-right: 10px;
    color: #fff;

    &:hover {
      background: #7989a7;
    }
  }

  &__btn.delete {
    background: darkred;
  }

  &__input {
    background: rgba(27, 33, 44, 0.6);
    border: 3px solid #6A7995;
    color: rgba(255, 255, 255, 0.7);

    &:hover, &:focus {
      border: 3px solid #7989a7;
      color: rgba(255, 255, 255, 0.9);
    }
  }

  &__btn, &__input {
    cursor: pointer;
    width: calc(100% / 3.5);
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    transition: 0.3s all ease;
  }

  &.trello-new-option {
    justify-content: center;
    margin: 16px auto 70px;
  }
}
</style>
