<template>
  <div>
    <!--header-->
    <header class="header">
      <div class="container">
        <div class="header__body">
          <a href="#" class="header__logo"><span>EFI</span>[ evo falcon inc. ]°</a>
          <a href="#" class="header__link"><i class="icon-catalog header__icon" />каталог</a>
          <div class="header__search search">
            <input type="text" class="search__txt" placeholder="Поиск">
            <button href="#" class="search__btn">Найти</button>
          </div>
          <a href="#" class="header__link l"><i class="icon-user header__icon" /><span>профиль</span></a>
          <a href="#" class="header__link l"><i class="icon-cart header__icon" /><span>корзина</span></a>
        </div>
      </div>
    </header>
    <div class="bottom-menu">
      <div class="container">
        <div class="bottom-menu__body">
          <a href="#" class="bottom-menu__link sale"><i class="icon-sale" /></a>
          <a href="#" class="bottom-menu__link"><i class="icon-phone" /></a>
          <a href="#" class="bottom-menu__link"><i class="icon-catalog" /></a>
          <a href="#" class="bottom-menu__link"><i class="icon-user" /></a>
          <a href="#" class="bottom-menu__link"><i class="icon-cart" /></a>
        </div>
      </div>
    </div>
    <!--header-->

    <Nuxt />
  </div>
</template>

<style lang="scss">
/* icons */
@font-face {
  font-family: 'wicons';
  src:  url('../static/fonts/wicons.eot?o9j2qx');
  src:  url('../static/fonts/wicons.eot?o9j2qx#iefix') format('embedded-opentype'),
  url('../static/fonts/wicons.ttf?o9j2qx') format('truetype'),
  url('../static/fonts/wicons.woff?o9j2qx') format('woff'),
  url('../static/fonts/wicons.svg?o9j2qx#wicons') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'wicons' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-prev:before {
  content: "\e90d";
}
.icon-bascet:before {
  content: "\e905";
}
.icon-douwnload:before {
  content: "\e906";
}
.icon-filtr:before {
  content: "\e907";
}
.icon-next:before {
  content: "\e908";
}
.icon-plus:before {
  content: "\e909";
}
.icon-sale:before {
  content: "\e90a";
}
.icon-setting:before {
  content: "\e90b";
}
.icon-top:before {
  content: "\e90c";
}
.icon-phone:before {
  content: "\e904";
}
.icon-cart:before {
  content: "\e900";
}
.icon-catalog:before {
  content: "\e901";
}
.icon-search:before {
  content: "\e902";
}
.icon-user:before {
  content: "\e903";
}
/* icons */

/* header */

/*Обнуление*/
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}

nav, footer, header, aside {
  display: block;
}

html, body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input, button, textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*--------------------*/

$activeColor: #c8c8c8;

body {
  font-family: Montserrat;
  background-color: #fff;
  transition: all 0.3s ease 0s;
  background-image: radial-gradient(#4b4141, #333);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  left: 0;
  top: 0;
  width: 100%;
  z-index: 50;
  border-bottom: 1px solid #DCE1E7;
  background-color: #242424;
  margin-bottom: 50px;
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

.search {
  margin-left: 20px;
  flex: 0 1 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f1f2;
  border-radius: 5px;
}
.search__txt {
  font-size: 14px;
  width: 100%;
  background-color: #f0f1f2;
  margin: 5px;
}
.search__btn {
  width: 80px;
  height: 30px;
  border-radius: 5px;
  margin-right: 2.5px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  color: #41495c;
  font-size: 14px;
  background-color: #ffffff;
  transition: 0.15s ease-in;
  padding: 0 6px;
}
.search__btn:hover {
  width: 90px;
  color: #000000;
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
