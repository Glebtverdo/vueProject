<template>
<div class="main">
<template v-if="excercises">
 <p class="ypr">Упражнение</p>
 <div class="bot">
 <span v-for="(i, index) in info" :key="index" class="span">
 <router-link :to="i.to" tag="p" class="rl"  >{{i.name}}</router-link> 
 <span >
 <p class="about" v-on:mouseover="i.show=!i.show"
v-on:mouseleave="i.show=!i.show" > Подробнее</p> 
 <p v-show="i.show" class="about_about"> {{i.about}} </p> 
 </span>
  </span>
 </div>
 </template>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            info:[{
                name:"Вид 1",
                about:"вам будет предложена подборка тестов, состоящих из 10 вопросов по 3 варианта ответа в каждом",
                to:"/vid/1",
                show: false
            },{
                name:"Вид 2",
                about:"вам будет предложена подборка текстов с 10 словами, которые надо будет вставить в пропуски",
                to:"/vid/2",
                show: false
            },{
                name:"Вид 3",
                about:" вам будет предложена подборка тестов со словами и их объяснениями, и вам надо будет сопоставить слова с определениями",
                to:"/vid/3",
                show: false
            },{
                name:"Вид 4",
                about:" вам будет предложено несколько предложений для перевода",
                to:"/vid/4",
                show: false
            }]
        }
    },
    computed: {
        ...mapGetters({
            excercises: 'Excercises',
        })
  },
}
</script>

<style scoped>
.main{
    flex-wrap: wrap;

}
.bot{
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    }
.span{
    align-items: center;
    margin: 5% 0;
    cursor: pointer;
    flex-basis: calc(90vw / 4 );
    flex-grow: 1;
}
p{
    margin: 0;
}
.rl{
   text-align: center;
   font: 4.5em arial;
   

}
.about{
text-align: center;
   font: italic 2em arial;


}
.about_about{
    text-align: center;
    font: italic 20px arial;
    padding: 10px;

}
.ypr{
    width: 100vw;
    text-align: center;
    font: italic 4em Georgia;
    color: #7f0000;
    background-color:  #e4e4e4;
    max-height: 9vh;
}
@media screen and (max-width: 1700px) {
.rl{
   font: 3em arial;
   

}
.about{
   font: italic 1.5em arial;
}

}
@media screen and (max-width: 700px) {
    .ypr{
        font: italic 3em Georgia;
    }
}
@media screen and (max-width: 1000px) {
.span{
    flex-basis: calc(90vw / 2 );
    }
}
@media screen and (max-width: 550px) {
.span{
    flex-basis: calc(90vw );
    }
}
</style>