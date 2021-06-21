<template>
  <div class="modal">
    <div class="lookbook">
      <app-btns-card
        :btns="{
          close: true,
          volume: false,
          like: true,
          basket: true
        }"
      />
      <div class="poster">
        <img src="../static/img/lykbyk/hoody-kaneki/1.jpg" alt="a">
        <img src="../static/img/lykbyk/hoody-kaneki/2.jpg" alt="a">
        <img src="../static/img/lykbyk/hoody-kaneki/3.jpg" alt="a">
        <img src="../static/img/lykbyk/hoody-kaneki/4.jpg" alt="a">
        <img src="../static/img/lykbyk/hoody-kaneki/5.jpg" alt="a">
        <img src="../static/img/lykbyk/hoody-kaneki/6.jpg" alt="a">
        <img src="../static/img/lykbyk/hoody-kaneki/7.jpg" alt="a">
      </div>
    </div>
    <div class="stack">
      <section class="content card">
        <p><b><h2 id="desktop-prompt">Наведи</h2><span id="mobile-prompt">Нажми</span>на меня!</b></p>
        <p>HOODIE «EMPTINESS OF THE SOUL» VOL.01</p>
      </section>
      <div class="padding card" />
      <div class="border card" />
      <div class="background card" />
      <div class="box-shadow card" />
    </div>
  </div>
</template>

<script>
import AppBtnsCard from './VolumeLikeBasketClose'

export default {
  props: ['item', 'btns'],
  data () {
    return {
      card: this.item
    }
  },
  components: {
    AppBtnsCard
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "plugins/incons.css";

::-webkit-scrollbar { width: 3px; height: 3px;}
::-webkit-scrollbar-button {  background-color: #666; }
::-webkit-scrollbar-track {  background-color: #999;}
::-webkit-scrollbar-track-piece { background-color: #ffffff;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
::-webkit-scrollbar-corner { background-color: #999;}
::-webkit-resizer { background-color: #666;}

.modal{
  position: fixed;
  z-index: 15;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;

  .poster {
    display: flex;
    height: 90%;
    flex-basis: 90%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: end;
    overflow: hidden;
    overflow-y: scroll;
    margin-left: 0;
    padding-right: 10px;

    &:before{
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }

    img{
      padding: 0 10px 10px 0;
      object-fit: cover;
      min-height: 200px;
      max-height: 360px;
      height: inherit;
      flex: auto;
    }
  }
}

.lookbook{
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  flex-basis: 50%;
  position: relative;

  height: 100%;
  background: #252525;
  padding: 20px;

  & .poster__header-icon {
    padding-left: 0;
  }
}

.poster__header-icon {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  &:before {
    content: 'PHOTOS';
    text-transform: uppercase;
    font-family: 'Stardos Stencil', cursive;
    font-size: 34px;
    color: white;
    position: absolute;
    right: 45px;
    line-height: 1;
    margin-top: 10px;
  }
}

.stack {
  display: grid;
  grid: [stack] / [stack];
  perspective: 5000px;
  height: 100%;
  flex-basis: 50%;
}

.stack:before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(240, 240, 240);
  transition: background 2s ease;
  pointer-events: none;
}

.stack:hover:before, .stack:active:before {
  background: rgb(37, 37, 37);
}

.stack:hover .card, .stack:active .card {
  --bg-opacity: 5%;
  transition-duration: 2s;
  transition-timing-function: var(--easeInOutCirc);
  transform:
    rotateX(45deg) rotate(45deg)
    translateZ(var(--z-offset)) translateY(20vh) translateX(20vh)
}

.stack:hover .card:nth-child(1), .stack:active .card:nth-child(1) { --z-offset: 75vh; }

.stack:hover .card:nth-child(2), .stack:active .card:nth-child(2) { --z-offset: 50vh; }

.stack:hover .card:nth-child(3), .stack:active .card:nth-child(3) { --z-offset: 25vh; }

.stack:hover .card:nth-child(4), .stack:active .card:nth-child(4) { --z-offset: 0vh; }

.stack:hover .card:nth-child(5), .stack:active .card:nth-child(5) { --z-offset: -25vh; }

.stack:hover .card:nth-child(1)::after, .stack:active .card:nth-child(1)::after { transition-delay: 1.5s; }

.stack:hover .card:nth-child(2)::after, .stack:active .card:nth-child(2)::after { transition-delay: 1.7s; }

.stack:hover .card:nth-child(3)::after, .stack:active .card:nth-child(3)::after { transition-delay: 1.9s; }

.stack:hover .card:nth-child(4)::after, .stack:active .card:nth-child(4)::after { transition-delay: 2.1s; }

.stack:hover .card:nth-child(5)::after, .stack:active .card:nth-child(5)::after { transition-delay: 2.3s; }

.stack:hover .card::after, .stack:active .card::after {
  opacity: 1;
  transform: rotate(-45deg) rotateY(45deg) translateX(0px);
}

.stack:hover .card.content, .stack:active .card.content {
  background: transparent;
  color: white;
  border-color: transparent;
  transition:
    border-color 1s var(--easeInOutCirc) 0s,
    background-color 1s var(--easeInOutCirc) 0s,
    color 1s var(--easeInOutCirc) 0s,
    transform 2s var(--easeInOutCirc) 0s;
}

.stack:hover .card.padding, .stack:active .card.padding {
  transition-delay: .1s;
}

.stack:hover .card.border, .stack:active .card.border {
  transition-delay: .2s;
}

.stack:hover .card.background, .stack:active .card.background {
  background: white;
  transition:
    background-color 2s var(--easeInOutCirc) .3s,
    transform 2s var(--easeInOutCirc) .2s;
}

.stack:hover .card.box-shadow, .stack:active .card.box-shadow {
  transition-delay: .4s;
  box-shadow:
    0 -1px 25px rgba(0, 0, 0, 0.4),
    0 7.6px 6.1px rgba(0, 0, 0, 0.051),
    0 14.3px 11.5px rgba(0, 0, 0, 0.059),
    0 25.5px 20.5px rgba(0, 0, 0, 0.07),
    0 47.6px 38.4px rgba(0, 0, 0, 0.094),
    0 114px 92px rgba(0, 0, 0, 0.19)
;
}

.card {
  grid-area: stack;

  --z-offset: 0;
  --easeInOutCirc: cubic-bezier(0.85, 0, 0.15, 1);
  --bg-opacity: 0%;

  transition: transform 4s ease;

  width: 40vh;
  height: 40vh;
  box-sizing: border-box;
  color: white;
  box-siing: border-box;
  background: rgba(255, 255, 254, 0.05);
  position: relative
}

@media (orientation: landscape) {

  .card {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 540px) {
  .card {
    width: 200px;
    height: 200px;
  }
}

.card:nth-child(1) {
  z-index: 3;
}

.card:nth-child(2) {
  z-index: 2;
}

.card::after {
  content: "Box";
  position: absolute;
  left: -45%;
  top: 110%;
  font-size: 1.25rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.75);
  white-space: nowrap;
  padding: 1ch 2ch;
  border-radius: 4ch;
  opacity: 0;
  transition: opacity .5s ease 0s, transform .5s ease;
  transform: rotate(-45deg) rotateY(45deg) translateX(20px);
  background: rgba(0, 0, 0, 0.7)
}

@media (max-width: 540px) {

  .card::after {
    left: -20%;
    top: 70%
  }
}

.card.content {
  z-index: 5;
  transition:
    border-color 4s ease,
    background-color 5s ease 2s,
    color 4s ease 0s,
    transform 4s ease 0s;
  padding: 5vh;
  font-size: 20px;
  line-height: 1.5;
  background: rgb(255, 255, 254);
  border: 5px solid hotpink;
  color: black
}

.card.content::after {
  content: "Content Box";
  left: -50%
}

@media (max-width: 540px) {

  .card.content::after {
    left: -23%
  }
}

.card.padding {
  background: transparent;
  z-index: 4;
  transition-delay: .1s
}

.card.padding::after { content: "Padding Box"; }

.card.padding::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-clip-path: polygon(
      0% 0%, 0% 100%,
      5vh 100%, 5vh 5vh,
      calc(100% - 5vh) 5vh,
      calc(100% - 5vh) calc(100% - 5vh),
      5vh calc(100% - 5vh), 5vh 100%,
      100% 100%, 100% 0%
  );
  clip-path: polygon(
      0% 0%, 0% 100%,
      5vh 100%, 5vh 5vh,
      calc(100% - 5vh) 5vh,
      calc(100% - 5vh) calc(100% - 5vh),
      5vh calc(100% - 5vh), 5vh 100%,
      100% 100%, 100% 0%
  );
  background: repeating-linear-gradient(
      -45deg,
      cyan, cyan 1px,
      rgba(255, 255, 254, 0.05) 1px, rgba(255, 255, 254, 0.05) 10px
  );
}

.card.border {
  z-index: 3;
  background: transparent;
  transition-delay: .2s
}

.card.border::after { content: "Border Box"; }

.card.border::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-clip-path: polygon(
      0% 0%, 0% 100%,
      5px 100%, 5px 5px,
      calc(100% - 5px) 5px,
      calc(100% - 5px) calc(100% - 5px),
      5px calc(100% - 5px), 5px 100%,
      100% 100%, 100% 0%
  );
  clip-path: polygon(
      0% 0%, 0% 100%,
      5px 100%, 5px 5px,
      calc(100% - 5px) 5px,
      calc(100% - 5px) calc(100% - 5px),
      5px calc(100% - 5px), 5px 100%,
      100% 100%, 100% 0%
  );
  background: linear-gradient(hotpink, hotpink);
}

.card.background {
  z-index: 2;
  transition:
    background-color 4s ease .3s,
    transform 4s ease .3s
}

.card.background::after { content: "Background Box"; }

.card.box-shadow {
  z-index: 1;
  background: transparent;
  transition:
    box-shadow 4s ease .4s,
    transform 4s ease .4s;

  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07)

}

.card.box-shadow::after { content: "Shadow Box"; }

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
  background: rgb(70, 70, 70);
}

p:first-of-type {
  margin-top: 0;
}

@media (hover:hover) {
  #mobile-prompt {
    display: none;
  }
}

@media (hover:none) {
  #desktop-prompt {
    display: none;
  }
}
</style>
