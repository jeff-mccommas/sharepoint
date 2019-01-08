<template>
  <div id="app">
    <b-container class="bv-example-row">
      <app-header></app-header>
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </b-container>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import TabsH from './components/bsTabs-h.vue';
import TabsV from './components/bsTabs-v.vue';

export default {
  components: {
    appHeader: Header,
    Home: Home,
    TabsH: TabsH,
    TabsV: TabsV
  }
};
</script>

<style>
body {
  padding: 30px;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
