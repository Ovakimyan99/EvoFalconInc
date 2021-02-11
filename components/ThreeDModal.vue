<template>
  <div class="modal">
    <div class="lookbook">
      <div class="poster__header-icon">
        <div class="poster__icon">
          <svg viewBox="0 0 172 172" style=" fill:#000000;"><g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path d="M53.75,25.08333c-21.70625,0 -39.41667,17.71042 -39.41667,39.41667c0,14.67789 11.06406,28.49789 24.55143,42.67106c13.48738,14.17317 30.08859,28.52788 43.31494,41.75423c2.0991,2.09823 5.50149,2.09823 7.60059,0c13.22635,-13.22635 29.82756,-27.58106 43.31494,-41.75423c13.48737,-14.17317 24.55143,-27.99318 24.55143,-42.67106c0,-21.70625 -17.71042,-39.41667 -39.41667,-39.41667c-12.45723,0 -23.30306,6.68825 -32.25,18.04964c-8.94694,-11.36139 -19.79277,-18.04964 -32.25,-18.04964z" /></g></g></svg>
        </div>
        <div class="poster__icon">
          <svg viewBox="0 0 172 172" style=" fill:#000000;"><g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-size="none"
            style="mix-blend-mode: normal"
          ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path d="M31.63411,14.30534l-24.43945,0.12598l0.06999,14.33333l14.83724,-0.06999l23.61361,56.64746l-8.5804,13.73145c-2.86667,4.58667 -3.01493,10.38036 -0.39193,15.10319c2.623,4.72283 7.59991,7.65657 13.00358,7.65657h86.41992v-14.33333h-86.41992l-0.46191,-0.83985l8.42643,-13.49349h53.52604c5.21017,0 10.005,-2.83296 12.52767,-7.37663l25.8252,-46.47135c1.23983,-2.22167 1.20601,-4.93167 -0.08399,-7.12467c-1.29,-2.18583 -3.64985,-3.52734 -6.18685,-3.52734h-105.69434zM43.58789,43h87.55371l-19.9043,35.83333h-52.71419zM50.16667,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM121.83333,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z" /></g></g>
          </svg>
        </div>
        <div class="poster__icon" @click="closeModal">
          <svg
            viewBox="0 0 172 172"
            style="padding: 3px; fill:#000000;"
          ><g transform="translate(-25.8,-25.8) scale(1.3,1.3)"><g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          ><path d="M0,172v-172h172v172z" fill="none" /><path d="" fill="none" /><path d="" fill="none" /><g fill="#ffffff"><path d="M44.03365,26.46154c-1.91226,0 -3.64363,0.7494 -4.96154,2.06731l-10.54327,10.54327c-2.63581,2.63582 -2.63581,7.23558 0,10.54327l36.38462,36.38462l-36.38462,36.38462c-2.63581,3.30769 -2.63581,7.90746 0,10.54327l10.54327,10.54327c3.30769,2.63582 7.90746,2.63582 10.54327,0l36.38462,-36.38462l36.38462,36.38462c3.30769,2.63582 7.90746,2.63582 10.54327,0l10.54327,-10.54327c2.63582,-3.30769 2.63582,-7.90745 0,-10.54327l-36.38462,-36.38462l36.38462,-36.38462c2.63582,-3.30769 2.63582,-7.90745 0,-10.54327l-10.54327,-10.54327c-3.30769,-2.63581 -7.90745,-2.63581 -10.54327,0l-36.38462,36.38462l-36.38462,-36.38462c-1.65385,-1.31791 -3.66947,-2.06731 -5.58173,-2.06731z" /></g></g></g></svg>
        </div>
      </div>
      <div class="poster">
        <img src="../static/img/lykbyk/1.jpg" alt="a">
        <img src="../static/img/lykbyk/2.jpg" alt="a">
        <img src="../static/img/lykbyk/3.jpg" alt="a">
        <img src="../static/img/lykbyk/4.jpg" alt="a">
        <img src="../static/img/lykbyk/5.jpg" alt="a">
        <img src="../static/img/lykbyk/6.jpg" alt="a">
        <img src="../static/img/lykbyk/7.jpg" alt="a">
      </div>
    </div>
    <div class="stack">
      <section class="content card">
        <p><b><h2 id="desktop-prompt">Hover</h2><span id="mobile-prompt">Tap</span> me!</b></p>
        <p>I'm just some example text content so there's something inside this box, nothing much to see here.</p>
      </section>
      <div class="padding card" />
      <div class="border card" />
      <div class="background card" />
      <div class="box-shadow card" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      card: this.item
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal', null)
      this.$store.dispatch('enablesScroll')
    }
  }
}
</script>

<style lang="scss" scoped>
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

  height: 100%;
  background: #252525;
  padding: 20px;

  .poster__icon{
    margin-bottom: 20px;
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
