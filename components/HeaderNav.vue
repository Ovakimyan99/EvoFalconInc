<template>
  <div>
    <header class="header">
      <div class="container">
        <nav class="header__body">
          <router-link
            class="header__logo"
            :key="'home page'"
            :to="'/'"
          >
            <span>EFI</span>[ evo falcon inc. ]°
          </router-link>
          <router-link
            class="header__link"
            :key="link.name"
            v-for="link of linksMenu"
            :to="link.url"
          >
            <i :class="link.icon + ' header__icon'" />
            {{ link.name }}
          </router-link>
        </nav>
      </div>
    </header>
    <div class="bottom-menu">
      <div class="container">
        <div class="bottom-menu__body">
          <router-link
            v-for="link of linksMenu"
            :key="link.icon"
            :to="link.url"
            class="bottom-menu__link sale"
          ><i :class="link.icon" /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linksMenu: [
        { url: '/catalog', icon: 'icon-catalog', name: 'Каталог' },
        { url: '/reviews', icon: 'icon-filtr', name: 'Отзывы' },
        { url: '/', icon: 'icon-setting', name: 'Ваши идеи' },
        { url: '/news', icon: 'icon-phone', name: 'Новости' },
        { url: '/', icon: 'icon-user', name: 'Профиль' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "plugins/incons.css";

$activeColor: #c8c8c8;

.header {
  left: 0;
  top: 0;
  width: 100%;
  z-index: 50;
  border-bottom: 1px solid #DCE1E7;
  background-color: #242424;

@media (max-width: 540px) {
  margin-bottom: 25px;
}
}
.header__body {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}
.header__logo {
  font-family: "Raleway", sans-serif;
  display: inline;
  min-width: max-content;
  align-items: center;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  color: $activeColor;
  transition: 0.2s ease-out;
  margin-right: 65px;

&:hover{
   color: #e7e7e7;
 }
}
@media (max-width: 480px) {
  .header__logo {
    font-size: 0;
  }
}
.header__logo span {
  display: none;
}
@media (max-width: 480px) {
  .header__logo span {
    font-size: 28px;
    display: inline;
  }
}
.header__link {
  text-transform: capitalize;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-left: 20px;
  color: $activeColor;
  transition: 0.2s ease-out;

& span{
    transition: 0.2s ease-out;
  }
}
@media (max-width: 900px) {
  .header__link.l {
    font-size: 0;
  }
}
.header__link:hover, .header__link:hover i{
  color: #e7e7e7;
}
@media (max-width: 700px) {
  .header__link {
    display: none;
  }
}
.header__icon {
  font-size: 24px;
  margin-right: 5px;
  color: $activeColor;
  transition: 0.2s ease;
}

.bottom-menu {
  display: none;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 50;
}
.bottom-menu:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-top: 1px solid #DCE1E7;
}
.bottom-menu__body {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}
.bottom-menu__link {
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  color: #41495c;
}
.bottom-menu__link.sale:hover {
  color: red;
}
.bottom-menu__link:hover {
  color: $activeColor;
}

@media (max-width: 700px) {
  .bottom-menu {
    display: block;
  }

  .bottom-menu__link:hover {
    color: #000000;
  }
}
/* header */
</style>
