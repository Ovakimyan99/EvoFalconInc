<template>
  <div>
    <!--loader-->
    <app-loader v-if="this.$store.getters.loader" />
    <!--loader-->
    <app-header-nav />
    <Nuxt />
    <app-footer-nav />

    <app-card-info-modal
      v-if="itemInfo"
      ref="threeDModal"
      class="animate__zoomIn"
      :btns="{
        info: false,
        close: true,
        like: true,
        basket: true
      }"
      :item="itemInfo"
    />
  </div>
</template>

<script>
import AppHeaderNav from '@/components/HeaderNav'
import AppFooterNav from '@/components/Footer'
import AppLoader from '@/components/Loader'
import AppCardInfoModal from '@/components/CardInfoModal'

export default {
  components: { AppHeaderNav, AppFooterNav, AppLoader, AppCardInfoModal },
  computed: {
    clothesArr () {
      return this.$store.getters.clothesArr
    },
    itemInfo () {
      return this.$store.getters.itemInfo
    }
  },
  transition: {
    name: 'loader',
    mode: '',
    afterLeave () {
      this.$store.dispatch('disableScroll')
      this.$store.commit('ENABLE_LOADER')
    },
    async enter () {
      this.$store.dispatch('enablesScroll')
      this.$store.commit('DISABLE_LOADER')
      await this.$store.dispatch('draftingArrClothes', './db.json')
    }
  },
  async mounted () {
    await this.$store.dispatch('draftingArrClothes', './db.json')
  }
}
</script>

<style lang="scss">
/* header */

/*Обнуление*/
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  font-family: Montserrat;
  touch-action: none;
  transition: all 0.3s ease 0s;
  background: rgba(23, 21, 21, 0.83);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
