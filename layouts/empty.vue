<template>
  <div>
    <app-header-nav />
    <form class="form">
      <div class="link-wrapper">
        <router-link
          to="/register"
          class="auth"
        >register</router-link>
        <router-link
          to="/login"
          exact
          class="auth"
        >login</router-link>
      </div>

      <nuxt />

    </form>
  </div>
</template>

<script>
import AppHeaderNav from '@/components/HeaderNav'
export default {
  components: {
    AppHeaderNav
  }
}
</script>

<style lang="scss" scoped>
.form{
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #181717;
}

.link-wrapper{
  display: flex;
  justify-content: space-between;
}

.auth{
  padding: 15px 23px;
  background-color: #3c3838;
  border: 1px solid #403a3a;
  color: #c3c2c2;
  flex: 1;
  text-align: center;
  font-size: 17px;
  text-transform: uppercase;

  &.nuxt-link-active{
     background-color: #50bc8d;
    color: white;
   }
}
</style>
