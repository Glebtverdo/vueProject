<template>
<span>
<app-menu></app-menu>
<app-first-scrin ></app-first-scrin>
<!-- <app-second-scrin></app-second-scrin> -->
<app-excercises ></app-excercises>
<app-slovvar ></app-slovvar>
</span>
</template>

<script>
import appFirstScrin from './comp/firstScrin.vue'
import appSecondScrin from './comp/secondScrin.vue'
import appExcercises from './comp/excercises.vue'
import appSlovvar from './comp/slovar.vue'
import appMenu from './comp/menu.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    appFirstScrin,appMenu,appSecondScrin,appExcercises,appSlovvar
  }
}
// v-if="firstScrin" v-if="excercises" v-if="slovar"
</script>

<style>
body {
    margin: 0;
}

img {
    max-width: 100%;
}

div {
    display: flex;
}
</style>
