<template>
  <div>
    <app-header-nav />
    <Nuxt />
    <app-footer-nav />
  </div>
</template>

<script>
import AppHeaderNav from '@/components/HeaderNav'
import AppFooterNav from '@/components/footer'

export default {
  components: { AppHeaderNav, AppFooterNav }
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
