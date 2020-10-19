<template>
  <div id="app">
    <div class="flex flex-col items-center">
      <h1 :class="'title uppercase text-indigo-500 text-xl font-bold mt-2 ' + (started ? '' : 'mt-10 text-indigo-700 lg:text-6xl')">Rice purity test</h1>
      <slide-up-down :active="!started && !ended">
        <div class="my-20">
          <img src="./assets/splash.svg" class="splash-image" />
        </div>
      </slide-up-down>
      <slide-up-down :active="!started && !ended">
        <button @click="started = true" class="px-5 py-2 bg-indigo-700 text-white uppercase font-bold rounded-lg hover:bg-indigo-500">Start</button>
      </slide-up-down>
    </div>

    <slide-up-down :active="started && !ended">
      <Questions :questions="questions" :complete="showResults.bind(this)"/>
    </slide-up-down>
    <slide-up-down :active="ended">
      <Results :score="score" :questions="questions.filter(question => question.checked)"/>
    </slide-up-down>

    <div class="sins-wrapper overflow-hidden bg-gray-100">
      <div class="sin-wave overflow-hidden" :style="'top: ' + (100 - score) + 'vh'">
        <div class="svg bg-gray-100">
          <svg data-v-7d15857f="" x="0px" y="0px" viewBox="0 0 3841 100" xml:space="preserve" style="overflow: scroll;">
            <path data-v-7d15857f="" d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z" style="fill: #718096; stroke-miterlimit: 10;">
            </path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #app {
    width: 100vw;
    height: 100vh;
  }

  .title {
    transition: 0.5s all;
  }

  .splash-image {
    height: 300px;
    max-height: 40vh;
  }

  .sins-wrapper {
    position: fixed;
    width: 100vw;
    height: 300vh;
    left: 0;
    top: 0;
    z-index: -1000;
  }

  .sin-wave {
    position: absolute;
    left: 0;
    width: 200vw;
    animation: wave-animation 5s infinite linear;
    transition: 0.3s all;
    z-index: -1000;
    height: 100vh;
    background: #718096;
  }

  .sin-wave .svg {
    position: relative;
    bottom: 0;
  }

  .sin-wave::after {
    content: "";
    width: 200vw;
    height: 100vh;
    position: absolute;
    top: 100%;
    left: 0;
    background: black;
  }

  @keyframes wave-animation {
    from {
        left: 0
    }

    to {
        left: -100%
    }
}
</style>

<script>

import Questions from './components/Questions';
import Results from './components/Results';
import questions from './data/questions';

export default {
  name: 'App',
  data: () => ({
    started: false,
    ended: false,
    questions: questions.map(question => {
      question['checked'] = false;
      return question;
    })
  }),
  computed: {
    totalWeight: function () {
      return questions.map(question => question.weight).reduce((a, b) => a + b, 0)
    },
    score: function () {
      // For the wave effect on splash screen
      if (!this.started && !this.ended) return 30;

      return 100 * questions.filter(question => question.checked).map(question => question.weight).reduce((a, b) => a + b, 0) / this.totalWeight
    }
  },
  methods: {
    showResults: function() {
      this.started = false;
      this.ended = true;
    }
  },
  components: {
    Questions,
    Results
  }
}
</script>
