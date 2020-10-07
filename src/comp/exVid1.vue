<template>
<div class="main">
<router-link :to="{path: '/vid'}" tag="span" class="rl"  >Назад</router-link>
<p class="ypr">Exercise 1</p>
<app-ex1 class=" app" v-for="(i,index) in info" :key="index" :info="info[index]"></app-ex1>
</div>
</template>

<script>
  import appEx1 from './ex1.vue'
  import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      answer: ""
    }
  },
 computed: {
        ...mapGetters('ex1', {
          info: 'info'
         }),
        },
  components:{
    appEx1
  }
}
</script>

<style scoped>

.main{
    flex-wrap: wrap;
}
p{
    margin: 0;
}
.ypr{
    width: 100vw;
    text-align: center;
    font: italic 4em Georgia;
    color: #7f0000;
    background-color:   #e4e4e4;
    max-height: 9vh;
}
.app{
  margin: -2px 5%;
  width: 70%;
}
.rl{
  position: absolute;
  z-index: 4;
  margin-top: 3vh;
  font: italic 2em Georgia;
  color: #7f0000;
}
@media screen and (max-width: 700px) {
    .ypr{
        font: italic 2.5em Georgia;
    }
    .rl{
      margin-top: 10px
    }
}
</style>