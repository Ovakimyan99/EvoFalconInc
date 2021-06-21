<template>
  <div class="poster__header-icon" @click="productChange($event)">
    <span
      v-if="this.btn.volume"
      class="header-icon header-icon__3d"
      @click="ThreeDModal($event)"
      :class="{'modal-icons': this.btns.close, 'card-icons': this.btns.volume}"
    >
      <i />
    </span>
    <span
      v-if="this.btn.close"
      class="header-icon header-icon__close"
      @click="closeModal"
      :class="{'modal-icons': this.btns.close, 'card-icons': this.btns.volume}"
    >
      &#10006;
    </span>
    <span
      v-if="this.btn.like"
      class="header-icon header-icon__like"
      :class="{'modal-icons': this.btns.close, 'card-icons': this.btns.volume}"
    >
      ❤
    </span>
    <span
      v-if="this.btn.basket"
      class="header-icon header-icon__basket"
      :class="{'modal-icons': this.btns.close, 'card-icons': this.btns.volume}"
    >
      <i class="icon-cart" />
    </span>
  </div>
</template>

<script>
export default {
  props: ['item', 'btns'],
  data () {
    return {
      card: this.item,
      btn: this.btns
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('CHANGE_3D_MODAL', false)
      this.$store.dispatch('enablesScroll')
    },
    productChange (e) {
      const target = e.target

      if (target.closest('.header-icon') && !target.closest('.header-icon__3d')) {
        target.closest('.header-icon').classList.toggle('active')
      }
    },
    ThreeDModal (e) {
      new Promise((resolve) => {
        this.$store.commit('ENABLE_LOADER')
        setTimeout(() => { resolve() }, 2000)
      })
        .then(() => {
          const parentCard = e.target.closest('[data-id]')
          console.log(parentCard)
          // this.item = parentCard.id
          this.$store.commit('CHANGE_3D_MODAL', true)
          this.$store.dispatch('disableScroll')
          this.$store.commit('DISABLE_LOADER')
        })
        .catch(() => {
          throw Error
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "plugins/incons.css";

@mixin modalIcon($color, $background) {
  color: rgba(46, 45, 45, 0.3);
  &.active, &:hover {
    transform: translateY(-3px);
    box-shadow: 0 11px 22px -7px $color;
    background: $background;
    opacity: 1;
    color: #fff;
  }

  &:active {
    opacity: 0.7;
  }
}

.poster__header-icon {
  display: flex;
  justify-content: flex-end;
}

.modal-icons {
  margin-right: 20px;
  font-size: 21px;
  width: 46px;
  height: 46px;
  color: #f5f3f5 !important;
  background: #a09898;
}

.card-icons {
  margin-right: 8px;
  width: 30px;
  height: 30px;
  background: #F5F5F5;
}

.header-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  border-radius: 50%;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &__basket {
    @include modalIcon(#fdcf58, #e9c363)
  }

  &__like{
    @include modalIcon(#ff0081, #ee1e87)
  }

  &__close {
    @include modalIcon(#000, #433e3e)
  }

  &__3d {
    @include modalIcon(rgba(0,212,255,0.95), linear-gradient(0deg, rgba(10,4,117,0.95) 0%, rgba(9,9,121,0.82) 3%, rgba(5,103,183,0.97) 36%, rgba(0,212,255,0.9587185215883228) 75%, rgba(175,255,253,0.9643207624846813) 100%));
    i {
      width: 66%;
      height: 66%;
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkxLjIwMyA0OTEuMjAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTEuMjAzIDQ5MS4yMDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDg3LjI5OCwzMjYuNzMzbC02Mi4zMDQtMzcuMTI4bDYyLjMwNC0zNy4xMjhjMi40MjEtMS40NDMsMy45MDQtNC4wNTQsMy45MDQtNi44NzJzLTEuNDgzLTUuNDI5LTMuOTA0LTYuODcyDQoJCQlsLTYyLjMwNC0zNy4xMjhsNjIuMzA0LTM3LjEyOGMzLjc5NS0yLjI2Miw1LjAzOC03LjE3MiwyLjc3Ni0xMC45NjhjLTAuNjgtMS4xNDItMS42MzUtMi4wOTYtMi43NzYtMi43NzZsLTIzNy42LTE0MS42DQoJCQljLTIuNTI0LTEuNTA0LTUuNjY5LTEuNTA0LTguMTkyLDBsLTIzNy42LDE0MS42Yy0zLjc5NSwyLjI2Mi01LjAzOCw3LjE3Mi0yLjc3NiwxMC45NjhjMC42OCwxLjE0MiwxLjYzNSwyLjA5NiwyLjc3NiwyLjc3Ng0KCQkJbDYyLjMwNCwzNy4xMjhMMy45MDUsMjM4LjczM2MtMy43OTUsMi4yNjItNS4wMzgsNy4xNzItMi43NzYsMTAuOTY4YzAuNjgsMS4xNDIsMS42MzUsMi4wOTYsMi43NzYsMi43NzZsNjIuMzA0LDM3LjEyOA0KCQkJTDMuOTA1LDMyNi43MzNjLTMuNzk1LDIuMjYyLTUuMDM4LDcuMTcyLTIuNzc2LDEwLjk2OGMwLjY4LDEuMTQyLDEuNjM1LDIuMDk2LDIuNzc2LDIuNzc2bDIzNy42LDE0MS42DQoJCQljMi41MjYsMS40OTQsNS42NjYsMS40OTQsOC4xOTIsMGwyMzcuNi0xNDEuNmMzLjc5NS0yLjI2Miw1LjAzOC03LjE3MiwyLjc3Ni0xMC45NjgNCgkJCUM0ODkuMzkzLDMyOC4zNjgsNDg4LjQzOSwzMjcuNDE0LDQ4Ny4yOTgsMzI2LjczM3ogTTIzLjYyNSwxNTcuNjA1TDI0NS42MDEsMjUuMzE3bDIyMS45NzYsMTMyLjI4OEwyNDUuNjAxLDI4OS44OTMNCgkJCUwyMy42MjUsMTU3LjYwNXogTTIzLjYyNSwyNDUuNjA1bDU4LjIwOC0zNC42OGwxNTkuNjcyLDk1LjJjMi41MjQsMS41MDQsNS42NjgsMS41MDQsOC4xOTIsMGwxNTkuNjcyLTk1LjJsNTguMjA4LDM0LjY4DQoJCQlMMjQ1LjYwMSwzNzcuODkzTDIzLjYyNSwyNDUuNjA1eiBNMjQ1LjYwMSw0NjUuODkzTDIzLjYyNSwzMzMuNjA1bDU4LjIwOC0zNC42OGwxNTkuNjcyLDk1LjJjMi41MjQsMS41MDQsNS42NjgsMS41MDQsOC4xOTIsMA0KCQkJbDE1OS42NzItOTUuMmw1OC4yMDgsMzQuNjhMMjQ1LjYwMSw0NjUuODkzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K)
    }

    &:hover {
      i {
        mix-blend-mode: overlay;
      }
    }
  }
}
</style>
