<template>
  <div>
    <!--loader-->
    <app-loader v-if="this.$store.getters.loader" />
    <!--loader-->

    <!--background-rain-->
    <div class="background-rain" />
    <!--background-rain-->

    <div class="container container-flex">
      <!--анимационный блок-->
      <div id="three-container" />
      <!--анимационный блок-->

      <section class="poster">
        <div class="glitch" />

        <div class="poster__header">
          <h1 class="poster__header-title">
            Hoody Tokyo Ghoul
          </h1>

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
          </div>
        </div>

        <div class="poster__body">
          <span>Параметры:</span>
          <ul class="poster__advantages">
            <li>- цена</li>
            <li>- ткань</li>
            <li>- нашивки</li>
          </ul>

          <p class="poster__descr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur dolore doloribus eos explicabo illum, modi nesciunt nihil optio praesentium quaerat, quos totam, voluptate voluptates?
          </p>
        </div>

        <div class="poster__footer">
          <div class="poster__timer">
            <span>До дропа осталось:</span>
            <div class="timer">
              <div class="timer__block">
                <span id="days">12</span> :
              </div>
              <div class="timer__block">
                <span id="hours">20</span> :
              </div>
              <div class="timer__block">
                <span id="minutes">56</span> :
              </div>
              <div class="timer__block">
                <span id="seconds">20</span>
              </div>
            </div>
          </div>
          <a href="#" class="go-to-product">Перейти к товару <span>&#8594;</span></a>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r77/three.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.4/TweenMax.min.js" />
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/bas.js" />
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/OrbitControls-2.js" />
      <script src="../js/THREEAnimated.js" />
    </div>

    <script :src="this.mobilSlider ? '../js/3DCarousel.js' : ''" />
    <div class="container container-carousel">
      <!--3d Carousel-->
      <div v-show="this.mobilSlider" id="contentContainer" class="trans3d">
        <section id="carouselContainer" class="trans3d">
          <figure id="item1" data-number="01" class="carouselItem trans3d carousel-cell">
            <div class="carouselItemInner trans3d">
              <div class="carousel-item__img">
                <img src="@/static/img/kaneki.png" alt="kaneki">
              </div>
              <div class="carousel-item__info">
                <div class="item-info__header">
                  <h2>Токийский гуль</h2>
                  <span>#1</span>
                </div>
                <ul class="item-info__text">
                  <li>- цена</li>
                  <li>- ткань</li>
                  <li>- еще что </li>
                </ul>
                <div class="poster__header-icon">
                  <div class="poster__icon" @click="ThreeDModal($event)">
                    <svg
                      viewBox="0 0 50 50"
                      style=" fill:#000000;"
                    ><path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 16.806641 15.998047 C 11.769641 15.998047 11.318969 20.523047 11.292969 21.623047 L 13.421875 21.623047 C 13.453875 20.865047 13.809641 17.914063 16.806641 17.914062 C 19.613641 17.914062 20 19.828156 20 20.785156 C 20 21.264156 19.709328 23.658203 16.611328 23.658203 L 15.740234 23.658203 L 15.740234 25.476562 C 16.127234 25.380562 16.514047 25.380859 16.998047 25.380859 C 17.481047 25.380859 20.773438 25.477422 20.773438 28.732422 C 20.773438 31.891422 17.385344 32.179688 16.902344 32.179688 C 15.186344 32.179688 13.198672 31.148047 13.138672 28.373047 L 11 28.373047 C 11.019 29.755047 11.444344 34 16.902344 34 C 17.967344 34 23 33.713672 23 28.638672 C 23 25.479672 20.870641 24.520125 19.806641 24.328125 L 19.806641 24.232422 C 20.484641 23.850422 22.226563 22.700453 22.226562 20.689453 C 22.226562 19.923453 22.033641 15.998047 16.806641 15.998047 z M 26 16 L 26 34 L 31.505859 34 C 36.857859 34 40 30.670141 40 24.994141 C 40 19.331141 36.844859 16 31.505859 16 L 26 16 z M 28 18 L 31.505859 18 C 36.873859 18 38 21.803141 38 24.994141 C 38 28.190141 36.873859 32 31.505859 32 L 28 32 L 28 18 z" /></svg>
                  </div>
                  <div class="poster__icon">
                    <svg viewBox="0 0 172 172" style="fill:#000000"><g
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path fill="#000000" d="M53.75,25.08333c-21.70625,0 -39.41667,17.71042 -39.41667,39.41667c0,14.67789 11.06406,28.49789 24.55143,42.67106c13.48738,14.17317 30.08859,28.52788 43.31494,41.75423c2.0991,2.09823 5.50149,2.09823 7.60059,0c13.22635,-13.22635 29.82756,-27.58106 43.31494,-41.75423c13.48737,-14.17317 24.55143,-27.99318 24.55143,-42.67106c0,-21.70625 -17.71042,-39.41667 -39.41667,-39.41667c-12.45723,0 -23.30306,6.68825 -32.25,18.04964c-8.94694,-11.36139 -19.79277,-18.04964 -32.25,-18.04964z" /></g></g></svg>
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#000000"><path d="M31.63411,14.30534l-24.43945,0.12598l0.06999,14.33333l14.83724,-0.06999l23.61361,56.64746l-8.5804,13.73145c-2.86667,4.58667 -3.01493,10.38036 -0.39193,15.10319c2.623,4.72283 7.59991,7.65657 13.00358,7.65657h86.41992v-14.33333h-86.41992l-0.46191,-0.83985l8.42643,-13.49349h53.52604c5.21017,0 10.005,-2.83296 12.52767,-7.37663l25.8252,-46.47135c1.23983,-2.22167 1.20601,-4.93167 -0.08399,-7.12467c-1.29,-2.18583 -3.64985,-3.52734 -6.18685,-3.52734h-105.69434zM43.58789,43h87.55371l-19.9043,35.83333h-52.71419zM50.16667,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM121.83333,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z" /></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <figure id="item2" data-number="02" class="carouselItem trans3d carousel-cell">
            <div class="carouselItemInner trans3d">
              2
            </div>
          </figure>
          <figure id="item3" data-number="03" class="carouselItem trans3d carousel-cell">
            <div class="carouselItemInner trans3d">
              3
            </div>
          </figure>
          <figure id="item4" data-number="04" class="carouselItem trans3d carousel-cell">
            <div class="carouselItemInner trans3d">
              4
            </div>
          </figure>
          <figure id="item5" data-number="05" class="carouselItem trans3d carousel-cell">
            <div class="carouselItemInner trans3d">
              5
            </div>
          </figure>
          <figure id="item6" data-number="06" class="carouselItem trans3d carousel-cell">
            <div class="carouselItemInner trans3d">
              6
            </div>
          </figure>
          <figure id="item7" data-number="07" class="carouselItem trans3d carousel-cell">
            <div class="carouselItemInner trans3d">
              7
            </div>
          </figure>
          <figure id="item8" data-number="08" class="carouselItem trans3d carousel-cell">
            <div class="carouselItemInner trans3d">
              8
            </div>
          </figure>
        </section>
      </div>
      <!--3d Carousel-->

      <!--flickity-->
      <no-ssr>
        <flickity v-if="!this.mobilSlider" ref="flickity" :options="flickityOptions">
          <div class="carousel-cell carouselItem carousel-cell" data-number="01">
            <div class="carouselItemInner">
              <div class="carousel-item__img">
                <img src="@/static/img/kaneki.png" alt="kaneki">
              </div>
              <div class="carousel-item__info">
                <div class="item-info__header">
                  <h2>Токийский гуль</h2>
                  <span>#1</span>
                </div>
                <ul class="item-info__text">
                  <li>- цена</li>
                  <li>- ткань</li>
                  <li>- еще что </li>
                </ul>
                <div class="poster__header-icon">
                  <div class="poster__icon" @click="ThreeDModal($event)">
                    <svg
                      viewBox="0 0 50 50"
                      style=" fill:#000000;"
                    ><path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 16.806641 15.998047 C 11.769641 15.998047 11.318969 20.523047 11.292969 21.623047 L 13.421875 21.623047 C 13.453875 20.865047 13.809641 17.914063 16.806641 17.914062 C 19.613641 17.914062 20 19.828156 20 20.785156 C 20 21.264156 19.709328 23.658203 16.611328 23.658203 L 15.740234 23.658203 L 15.740234 25.476562 C 16.127234 25.380562 16.514047 25.380859 16.998047 25.380859 C 17.481047 25.380859 20.773438 25.477422 20.773438 28.732422 C 20.773438 31.891422 17.385344 32.179688 16.902344 32.179688 C 15.186344 32.179688 13.198672 31.148047 13.138672 28.373047 L 11 28.373047 C 11.019 29.755047 11.444344 34 16.902344 34 C 17.967344 34 23 33.713672 23 28.638672 C 23 25.479672 20.870641 24.520125 19.806641 24.328125 L 19.806641 24.232422 C 20.484641 23.850422 22.226563 22.700453 22.226562 20.689453 C 22.226562 19.923453 22.033641 15.998047 16.806641 15.998047 z M 26 16 L 26 34 L 31.505859 34 C 36.857859 34 40 30.670141 40 24.994141 C 40 19.331141 36.844859 16 31.505859 16 L 26 16 z M 28 18 L 31.505859 18 C 36.873859 18 38 21.803141 38 24.994141 C 38 28.190141 36.873859 32 31.505859 32 L 28 32 L 28 18 z" /></svg>
                  </div>
                  <div class="poster__icon">
                    <svg viewBox="0 0 172 172" style="fill:#000000"><g
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path fill="#000000" d="M53.75,25.08333c-21.70625,0 -39.41667,17.71042 -39.41667,39.41667c0,14.67789 11.06406,28.49789 24.55143,42.67106c13.48738,14.17317 30.08859,28.52788 43.31494,41.75423c2.0991,2.09823 5.50149,2.09823 7.60059,0c13.22635,-13.22635 29.82756,-27.58106 43.31494,-41.75423c13.48737,-14.17317 24.55143,-27.99318 24.55143,-42.67106c0,-21.70625 -17.71042,-39.41667 -39.41667,-39.41667c-12.45723,0 -23.30306,6.68825 -32.25,18.04964c-8.94694,-11.36139 -19.79277,-18.04964 -32.25,-18.04964z" /></g></g></svg>
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#000000"><path d="M31.63411,14.30534l-24.43945,0.12598l0.06999,14.33333l14.83724,-0.06999l23.61361,56.64746l-8.5804,13.73145c-2.86667,4.58667 -3.01493,10.38036 -0.39193,15.10319c2.623,4.72283 7.59991,7.65657 13.00358,7.65657h86.41992v-14.33333h-86.41992l-0.46191,-0.83985l8.42643,-13.49349h53.52604c5.21017,0 10.005,-2.83296 12.52767,-7.37663l25.8252,-46.47135c1.23983,-2.22167 1.20601,-4.93167 -0.08399,-7.12467c-1.29,-2.18583 -3.64985,-3.52734 -6.18685,-3.52734h-105.69434zM43.58789,43h87.55371l-19.9043,35.83333h-52.71419zM50.16667,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM121.83333,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z" /></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-cell carouselItem carousel-cell" data-number="02">
            <div class="carouselItemInner">
              <div class="carousel-item__img">
                <img src="@/static/img/kaneki.png" alt="kaneki">
              </div>
              <div class="carousel-item__info">
                <div class="item-info__header">
                  <h2>Токийский гуль</h2>
                  <span>#2</span>
                </div>
                <ul class="item-info__text">
                  <li>- цена</li>
                  <li>- ткань</li>
                  <li>- еще что </li>
                </ul>
                <div class="poster__header-icon">
                  <div class="poster__icon" @click="ThreeDModal($event)">
                    <svg
                      viewBox="0 0 50 50"
                      style=" fill:#000000;"
                    ><path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 16.806641 15.998047 C 11.769641 15.998047 11.318969 20.523047 11.292969 21.623047 L 13.421875 21.623047 C 13.453875 20.865047 13.809641 17.914063 16.806641 17.914062 C 19.613641 17.914062 20 19.828156 20 20.785156 C 20 21.264156 19.709328 23.658203 16.611328 23.658203 L 15.740234 23.658203 L 15.740234 25.476562 C 16.127234 25.380562 16.514047 25.380859 16.998047 25.380859 C 17.481047 25.380859 20.773438 25.477422 20.773438 28.732422 C 20.773438 31.891422 17.385344 32.179688 16.902344 32.179688 C 15.186344 32.179688 13.198672 31.148047 13.138672 28.373047 L 11 28.373047 C 11.019 29.755047 11.444344 34 16.902344 34 C 17.967344 34 23 33.713672 23 28.638672 C 23 25.479672 20.870641 24.520125 19.806641 24.328125 L 19.806641 24.232422 C 20.484641 23.850422 22.226563 22.700453 22.226562 20.689453 C 22.226562 19.923453 22.033641 15.998047 16.806641 15.998047 z M 26 16 L 26 34 L 31.505859 34 C 36.857859 34 40 30.670141 40 24.994141 C 40 19.331141 36.844859 16 31.505859 16 L 26 16 z M 28 18 L 31.505859 18 C 36.873859 18 38 21.803141 38 24.994141 C 38 28.190141 36.873859 32 31.505859 32 L 28 32 L 28 18 z" /></svg>
                  </div>
                  <div class="poster__icon">
                    <svg viewBox="0 0 172 172" style="fill:#000000"><g
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path fill="#000000" d="M53.75,25.08333c-21.70625,0 -39.41667,17.71042 -39.41667,39.41667c0,14.67789 11.06406,28.49789 24.55143,42.67106c13.48738,14.17317 30.08859,28.52788 43.31494,41.75423c2.0991,2.09823 5.50149,2.09823 7.60059,0c13.22635,-13.22635 29.82756,-27.58106 43.31494,-41.75423c13.48737,-14.17317 24.55143,-27.99318 24.55143,-42.67106c0,-21.70625 -17.71042,-39.41667 -39.41667,-39.41667c-12.45723,0 -23.30306,6.68825 -32.25,18.04964c-8.94694,-11.36139 -19.79277,-18.04964 -32.25,-18.04964z" /></g></g></svg>
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#000000"><path d="M31.63411,14.30534l-24.43945,0.12598l0.06999,14.33333l14.83724,-0.06999l23.61361,56.64746l-8.5804,13.73145c-2.86667,4.58667 -3.01493,10.38036 -0.39193,15.10319c2.623,4.72283 7.59991,7.65657 13.00358,7.65657h86.41992v-14.33333h-86.41992l-0.46191,-0.83985l8.42643,-13.49349h53.52604c5.21017,0 10.005,-2.83296 12.52767,-7.37663l25.8252,-46.47135c1.23983,-2.22167 1.20601,-4.93167 -0.08399,-7.12467c-1.29,-2.18583 -3.64985,-3.52734 -6.18685,-3.52734h-105.69434zM43.58789,43h87.55371l-19.9043,35.83333h-52.71419zM50.16667,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM121.83333,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z" /></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-cell carouselItem carousel-cell" data-number="03">
            <div class="carouselItemInner">
              <div class="carousel-item__img">
                <img src="@/static/img/kaneki.png" alt="kaneki">
              </div>
              <div class="carousel-item__info">
                <div class="item-info__header">
                  <h2>Токийский гуль</h2>
                  <span>#3</span>
                </div>
                <ul class="item-info__text">
                  <li>- цена</li>
                  <li>- ткань</li>
                  <li>- еще что </li>
                </ul>
                <div class="poster__header-icon">
                  <div class="poster__icon" @click="ThreeDModal($event)">
                    <svg
                      viewBox="0 0 50 50"
                      style=" fill:#000000;"
                    ><path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 16.806641 15.998047 C 11.769641 15.998047 11.318969 20.523047 11.292969 21.623047 L 13.421875 21.623047 C 13.453875 20.865047 13.809641 17.914063 16.806641 17.914062 C 19.613641 17.914062 20 19.828156 20 20.785156 C 20 21.264156 19.709328 23.658203 16.611328 23.658203 L 15.740234 23.658203 L 15.740234 25.476562 C 16.127234 25.380562 16.514047 25.380859 16.998047 25.380859 C 17.481047 25.380859 20.773438 25.477422 20.773438 28.732422 C 20.773438 31.891422 17.385344 32.179688 16.902344 32.179688 C 15.186344 32.179688 13.198672 31.148047 13.138672 28.373047 L 11 28.373047 C 11.019 29.755047 11.444344 34 16.902344 34 C 17.967344 34 23 33.713672 23 28.638672 C 23 25.479672 20.870641 24.520125 19.806641 24.328125 L 19.806641 24.232422 C 20.484641 23.850422 22.226563 22.700453 22.226562 20.689453 C 22.226562 19.923453 22.033641 15.998047 16.806641 15.998047 z M 26 16 L 26 34 L 31.505859 34 C 36.857859 34 40 30.670141 40 24.994141 C 40 19.331141 36.844859 16 31.505859 16 L 26 16 z M 28 18 L 31.505859 18 C 36.873859 18 38 21.803141 38 24.994141 C 38 28.190141 36.873859 32 31.505859 32 L 28 32 L 28 18 z" /></svg>
                  </div>
                  <div class="poster__icon">
                    <svg viewBox="0 0 172 172" style="fill:#000000"><g
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path fill="#000000" d="M53.75,25.08333c-21.70625,0 -39.41667,17.71042 -39.41667,39.41667c0,14.67789 11.06406,28.49789 24.55143,42.67106c13.48738,14.17317 30.08859,28.52788 43.31494,41.75423c2.0991,2.09823 5.50149,2.09823 7.60059,0c13.22635,-13.22635 29.82756,-27.58106 43.31494,-41.75423c13.48737,-14.17317 24.55143,-27.99318 24.55143,-42.67106c0,-21.70625 -17.71042,-39.41667 -39.41667,-39.41667c-12.45723,0 -23.30306,6.68825 -32.25,18.04964c-8.94694,-11.36139 -19.79277,-18.04964 -32.25,-18.04964z" /></g></g></svg>
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#000000"><path d="M31.63411,14.30534l-24.43945,0.12598l0.06999,14.33333l14.83724,-0.06999l23.61361,56.64746l-8.5804,13.73145c-2.86667,4.58667 -3.01493,10.38036 -0.39193,15.10319c2.623,4.72283 7.59991,7.65657 13.00358,7.65657h86.41992v-14.33333h-86.41992l-0.46191,-0.83985l8.42643,-13.49349h53.52604c5.21017,0 10.005,-2.83296 12.52767,-7.37663l25.8252,-46.47135c1.23983,-2.22167 1.20601,-4.93167 -0.08399,-7.12467c-1.29,-2.18583 -3.64985,-3.52734 -6.18685,-3.52734h-105.69434zM43.58789,43h87.55371l-19.9043,35.83333h-52.71419zM50.16667,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM121.83333,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z" /></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-cell carouselItem carousel-cell" data-number="04">
            <div class="carouselItemInner">
              <div class="carousel-item__img">
                <img src="@/static/img/kaneki.png" alt="kaneki">
              </div>
              <div class="carousel-item__info">
                <div class="item-info__header">
                  <h2>Токийский гуль</h2>
                  <span>#4</span>
                </div>
                <ul class="item-info__text">
                  <li>- цена</li>
                  <li>- ткань</li>
                  <li>- еще что </li>
                </ul>
                <div class="poster__header-icon">
                  <div class="poster__icon" @click="ThreeDModal($event)">
                    <svg
                      viewBox="0 0 50 50"
                      style=" fill:#000000;"
                    ><path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 16.806641 15.998047 C 11.769641 15.998047 11.318969 20.523047 11.292969 21.623047 L 13.421875 21.623047 C 13.453875 20.865047 13.809641 17.914063 16.806641 17.914062 C 19.613641 17.914062 20 19.828156 20 20.785156 C 20 21.264156 19.709328 23.658203 16.611328 23.658203 L 15.740234 23.658203 L 15.740234 25.476562 C 16.127234 25.380562 16.514047 25.380859 16.998047 25.380859 C 17.481047 25.380859 20.773438 25.477422 20.773438 28.732422 C 20.773438 31.891422 17.385344 32.179688 16.902344 32.179688 C 15.186344 32.179688 13.198672 31.148047 13.138672 28.373047 L 11 28.373047 C 11.019 29.755047 11.444344 34 16.902344 34 C 17.967344 34 23 33.713672 23 28.638672 C 23 25.479672 20.870641 24.520125 19.806641 24.328125 L 19.806641 24.232422 C 20.484641 23.850422 22.226563 22.700453 22.226562 20.689453 C 22.226562 19.923453 22.033641 15.998047 16.806641 15.998047 z M 26 16 L 26 34 L 31.505859 34 C 36.857859 34 40 30.670141 40 24.994141 C 40 19.331141 36.844859 16 31.505859 16 L 26 16 z M 28 18 L 31.505859 18 C 36.873859 18 38 21.803141 38 24.994141 C 38 28.190141 36.873859 32 31.505859 32 L 28 32 L 28 18 z" /></svg>
                  </div>
                  <div class="poster__icon">
                    <svg viewBox="0 0 172 172" style="fill:#000000"><g
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path fill="#000000" d="M53.75,25.08333c-21.70625,0 -39.41667,17.71042 -39.41667,39.41667c0,14.67789 11.06406,28.49789 24.55143,42.67106c13.48738,14.17317 30.08859,28.52788 43.31494,41.75423c2.0991,2.09823 5.50149,2.09823 7.60059,0c13.22635,-13.22635 29.82756,-27.58106 43.31494,-41.75423c13.48737,-14.17317 24.55143,-27.99318 24.55143,-42.67106c0,-21.70625 -17.71042,-39.41667 -39.41667,-39.41667c-12.45723,0 -23.30306,6.68825 -32.25,18.04964c-8.94694,-11.36139 -19.79277,-18.04964 -32.25,-18.04964z" /></g></g></svg>
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#000000"><path d="M31.63411,14.30534l-24.43945,0.12598l0.06999,14.33333l14.83724,-0.06999l23.61361,56.64746l-8.5804,13.73145c-2.86667,4.58667 -3.01493,10.38036 -0.39193,15.10319c2.623,4.72283 7.59991,7.65657 13.00358,7.65657h86.41992v-14.33333h-86.41992l-0.46191,-0.83985l8.42643,-13.49349h53.52604c5.21017,0 10.005,-2.83296 12.52767,-7.37663l25.8252,-46.47135c1.23983,-2.22167 1.20601,-4.93167 -0.08399,-7.12467c-1.29,-2.18583 -3.64985,-3.52734 -6.18685,-3.52734h-105.69434zM43.58789,43h87.55371l-19.9043,35.83333h-52.71419zM50.16667,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM121.83333,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z" /></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-cell carouselItem carousel-cell" data-number="05">
            <div class="carouselItemInner">
              <div class="carousel-item__img">
                <img src="@/static/img/kaneki.png" alt="kaneki">
              </div>
              <div class="carousel-item__info">
                <div class="item-info__header">
                  <h2>Токийский гуль</h2>
                  <span>#5</span>
                </div>
                <ul class="item-info__text">
                  <li>- цена</li>
                  <li>- ткань</li>
                  <li>- еще что </li>
                </ul>
                <div class="poster__header-icon">
                  <div class="poster__icon" @click="ThreeDModal($event)">
                    <svg
                      viewBox="0 0 50 50"
                      style=" fill:#000000;"
                    ><path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 16.806641 15.998047 C 11.769641 15.998047 11.318969 20.523047 11.292969 21.623047 L 13.421875 21.623047 C 13.453875 20.865047 13.809641 17.914063 16.806641 17.914062 C 19.613641 17.914062 20 19.828156 20 20.785156 C 20 21.264156 19.709328 23.658203 16.611328 23.658203 L 15.740234 23.658203 L 15.740234 25.476562 C 16.127234 25.380562 16.514047 25.380859 16.998047 25.380859 C 17.481047 25.380859 20.773438 25.477422 20.773438 28.732422 C 20.773438 31.891422 17.385344 32.179688 16.902344 32.179688 C 15.186344 32.179688 13.198672 31.148047 13.138672 28.373047 L 11 28.373047 C 11.019 29.755047 11.444344 34 16.902344 34 C 17.967344 34 23 33.713672 23 28.638672 C 23 25.479672 20.870641 24.520125 19.806641 24.328125 L 19.806641 24.232422 C 20.484641 23.850422 22.226563 22.700453 22.226562 20.689453 C 22.226562 19.923453 22.033641 15.998047 16.806641 15.998047 z M 26 16 L 26 34 L 31.505859 34 C 36.857859 34 40 30.670141 40 24.994141 C 40 19.331141 36.844859 16 31.505859 16 L 26 16 z M 28 18 L 31.505859 18 C 36.873859 18 38 21.803141 38 24.994141 C 38 28.190141 36.873859 32 31.505859 32 L 28 32 L 28 18 z" /></svg>
                  </div>
                  <div class="poster__icon">
                    <svg viewBox="0 0 172 172" style="fill:#000000"><g
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path fill="#000000" d="M53.75,25.08333c-21.70625,0 -39.41667,17.71042 -39.41667,39.41667c0,14.67789 11.06406,28.49789 24.55143,42.67106c13.48738,14.17317 30.08859,28.52788 43.31494,41.75423c2.0991,2.09823 5.50149,2.09823 7.60059,0c13.22635,-13.22635 29.82756,-27.58106 43.31494,-41.75423c13.48737,-14.17317 24.55143,-27.99318 24.55143,-42.67106c0,-21.70625 -17.71042,-39.41667 -39.41667,-39.41667c-12.45723,0 -23.30306,6.68825 -32.25,18.04964c-8.94694,-11.36139 -19.79277,-18.04964 -32.25,-18.04964z" /></g></g></svg>
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
                    ><path d="M0,172v-172h172v172z" fill="none" /><g fill="#000000"><path d="M31.63411,14.30534l-24.43945,0.12598l0.06999,14.33333l14.83724,-0.06999l23.61361,56.64746l-8.5804,13.73145c-2.86667,4.58667 -3.01493,10.38036 -0.39193,15.10319c2.623,4.72283 7.59991,7.65657 13.00358,7.65657h86.41992v-14.33333h-86.41992l-0.46191,-0.83985l8.42643,-13.49349h53.52604c5.21017,0 10.005,-2.83296 12.52767,-7.37663l25.8252,-46.47135c1.23983,-2.22167 1.20601,-4.93167 -0.08399,-7.12467c-1.29,-2.18583 -3.64985,-3.52734 -6.18685,-3.52734h-105.69434zM43.58789,43h87.55371l-19.9043,35.83333h-52.71419zM50.16667,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM121.83333,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z" /></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </flickity>
      </no-ssr>
      <!--flickity-->
    </div>
    <app-three-d-modal
      v-if="item"
      ref="threeDModal"
      class="animate__zoomIn"
      :item="item"
      @closeModal="item = $event"
    />
  </div>
</template>

<script>
import AppThreeDModal from '@/components/ThreeDModal'
import AppLoader from '@/components/Loader'
import 'animate.css'

export default {
  components: {
    AppThreeDModal,
    AppLoader
  },
  data () {
    return {
      item: null,
      mobilSlider: true,
      flickityOptions: {
        pageDots: false,
        prevNextButtons: false,
        lazyLoad: 1,
        wrapAround: true
      }
    }
  },
  mounted () {
    // Loader
    this.$store.commit('DISABLE_LOADER')
    this.$store.dispatch('enablesScroll')
    // Loader --

    // Slider mobil
    if (document.body.offsetWidth < 975) {
      this.mobilSlider = false
    }
    // Slider mobil --

    // Timer
    return this.$store.getters.timer
    // Timer --
  },
  methods: {
    ThreeDModal (e) {
      new Promise((resolve) => {
        this.$store.commit('ENABLE_LOADER')
        setTimeout(() => { resolve() }, 2000)
      })
        .then(() => {
          const parentCard = e.target.closest('.carouselItem')
          this.item = parentCard.id
          this.$store.dispatch('disableScroll')
        })
        .then(() => {
          this.$store.commit('DISABLE_LOADER')
        })
        .catch(() => {
          throw Error
        })
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Heartless';
  src: url("../static/fonts/flash.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@mixin infoHydi{
  padding-left: 4px;
  margin: 8px 0;

  li{
    font-size: 16px;
    line-height: 1.2;
  }
}

.background-rain{
  background: url('../static/img/rain.gif');
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  z-index: -4;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;

  &:after {
    content: '';
    position: absolute;
    z-index: -3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
}

.container-flex{
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 970px) {
    flex-wrap: nowrap;
  }
}

.container-carousel{
  height: 500px;
  overflow: hidden;
}

// объемный блок слева / анимация
#three-container{
  display: inline-block;
  position: relative;
  height: min-content;
  flex-basis: 100%;
  max-height: 430px;
  margin: 0 auto;

  canvas {
    width: 100% !important;
    object-fit: cover;
    overflow: visible;
    border: 12px solid #ffffffa8;
    cursor: w-resize;
    position: relative;
    max-height: 430px;
    padding: 15px 20px;

    @media (max-width: 390px) {
      height: 340px !important;
      padding: 0;
    }

    @media (min-width: 970px) {
      max-height: 400px;
      max-width: 600px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color:rgba(255, 255, 255, .75);
    filter: blur(13px);
  }

  @media (max-width: 390px) {
    height: 340px;
  }

  @media (min-width: 540px) {
    max-width: 100%;
    flex-basis: 90%;
    margin: 0 auto 40px;
  }

  @media (min-width: 970px) {
    min-width: 460px;
    flex-basis: 45%;
    margin-bottom: 0;
    margin-right: 15px;
    margin-left: 0;
  }
}
// объемный блок слева / анимация --

.poster{
  border: 12px solid rgba(71, 69, 69, 0.66);
  flex-basis: 100%;
  position: relative;
  color: #ffffff;
  padding: 20px 15px;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:after {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    z-index: -1;
    background-color: rgb(79, 70, 70);
    filter: blur(2px) brightness(0.7);
  }

  @media (min-width: 540px) {
    max-width: 100%;
    flex-basis: 90%;
    margin: 0 auto 40px;
  }

  @media (min-width: 700px) {
    flex-basis: 90%;
    margin: 0 auto;
  }

  @media (min-width: 970px) {
    flex-basis: 52%;
  }
}

.poster__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px;
}

.poster__header-title{
  font-family: Heartless;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 35px;

  @media (min-width: 468px) {
    margin-right: 10px;
  }

  @media (min-width: 995px) {
    font-size: 42px;
    margin-right: 0;
  }
}

.poster__header-icon{
  display: flex;

  svg {
    width: 29px;
    position: relative;
    z-index: 2;
  }
}

.poster__icon{
  &:not(:first-child){
    margin-left: 25px;
  }
  position: relative;
  cursor: pointer;

  &:before{
    content: '';
    position: absolute;
    width: 45px;
    height: 45px;
    background-color: #3c3838;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: 0.3s ease-out;
  }

  &:hover:before{
    background-color: #413843;
    box-shadow: 0px 1px 6px -3px;
  }
}

.poster__body{
  margin-bottom: auto;
}

.poster__advantages{
  @include infoHydi
}

.poster__descr{
  font-size: 17px;
  margin: 20px 0;
}

.poster__footer{
  display: flex;
  justify-content: space-between;

  @media (max-width: 465px) {
    flex-direction: column;
  }
}

.go-to-product{
  color: #f6f1f1;
  text-decoration: none;
  transition: 0.3s ease-out;
  height: min-content;
  margin-top: auto;

  span{
    transition: 0.3s ease-out;
    display: inline-block;
  }

  &:hover, &:hover span{
    margin-left: 5px;
    color: #ffffff;
  }
}

// Timer
.poster__timer{

  & > span {
    font-size: 18px;
    display: inline-block;
    margin-bottom: 11px;
  }
}

.timer{
  display: flex;
}

.timer__block{
  font-size: 26px;
  letter-spacing: 3px;
  margin-right: 10px;

  @media (max-width: 465px) {
    margin-bottom: 15px;
  }

  @media (max-width: 490px) {
    font-size: 24px;
  }
}
// Timer

// Glitch
.glitch {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("https://sun9-73.userapi.com/impf/z7JrUfHmc4CjxYMuuXfH5LFiz8sxyll9pEz-AA/nlcwiuvxJNQ.jpg?size=1567x886&quality=96&proxy=1&sign=e0b76ef3e66a757aeec688f65c4a5a15&type=album ");
  background-size: cover;
  left: 0;
  top: 0;
  animation: 420s GlitchTime infinite;
  animation-delay: 6s;
  z-index: -5;

  @media (max-width: 410px) {
    background-position: -100%;
  }
}

@keyframes GlitchTime {
  1%, 100% {
    z-index: -5;
  }
  0% {
    z-index: 5;
  }
}

.glitch:before {
  content:'';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("https://sun9-73.userapi.com/impf/z7JrUfHmc4CjxYMuuXfH5LFiz8sxyll9pEz-AA/nlcwiuvxJNQ.jpg?size=1567x886&quality=96&proxy=1&sign=e0b76ef3e66a757aeec688f65c4a5a15&type=album ");
  background-size: cover;
  left: 0;
  top: 0;

  opacity:0.8;
  mix-blend-mode: hard-light;
  animation: Glitch .2s infinite;
}

@keyframes Glitch {
  0% {
    background-position: 0 0;
    filter: hue-rotate(70deg);
  }
  10% {
    background-position: 60px 0;
  }
  20% {
    background-position: -60px 0;
  }
  30% {
    background-position: 12px 0;
  }
  40% {
    background-position: -16px 0;
  }
  50% {
    background-position: -16px 0;
  }
  60% {
    background-position: -52px 0;
  }
  70% {
    background-position: 0 42px;
  }
  80% {
    background-position: -40px -30px;
  }
  100% {
    background-position: 0px -30px;
    filter: hue-rotate(360deg);
  }
}
// Glich --

// 3Dslider --
.trans3d {
  -webkit-transform-style: preserve-3d;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform-style: preserve-3d;
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform-style:preserve-3d;
  -ms-transform: translate3d(0, 0, 0);
  transform-style:preserve-3d;
  transform: translate3d(0, 0, 0);

  /*-webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility:hidden;
  backface-visibility:hidden;*/
}

#contentContainer {
  width:100%;
  height:500px;
}

#carouselContainer {
  position:absolute;
  margin-left:-500px;
  margin-top:-500px;
  left:50%;
  top:50%;
  width:100%;
  height:950px;
}

.carouselItem {
  width:320px;
  height:200px;
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-160px;
  margin-top:-90px;
  visibility:hidden;

  &:before{
    content: attr(data-number);
    color: #4f4c4c;
    font-size: 70px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 13px;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 0;
    transform: translate(-50%, -50%) scaleX(-1) ;
    backface-visibility: visible;
  }
}

.carouselItemInner {
  display: flex;
  width:320px;
  height:200px;
  position:absolute;
  background-color:rgba(255, 255, 255, .75);
  border:10px solid rgba(255, 255, 255, .5);
  left:50%;
  top:50%;
  margin-left:-160px;
  margin-top:-90px;
  text-align:center;

  .poster__header-icon{
    justify-content: flex-end;
    margin-top: auto;
    padding: 0 5px 5px 0;
  }

  .poster__icon{
    margin-top: auto;
    margin-left: 8px;

    &:before{
      content: none;
    }
  }
}

.carousel-item__img{
  position: relative;
  flex-basis: 50%;
  height: 100%;

  img{
    width: 150%;
    height: 135%;
    position: absolute;
    left: -50px;
    top: -30px;
    backface-visibility: hidden;
    transform: translate3d(0px, 0px, 11px);
    filter: blur(1px);
  }
}

.carousel-item__info{
  text-align: left;
  filter: blur(-1px);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.item-info__header{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 5px 0 0;

  span{
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  h2{
    font-size: 14px;
    font-weight: 700;
    margin-right: 5px;
  }
}

.item-info__text{
  @include infoHydi;
}

// 3Dslider --
</style>
