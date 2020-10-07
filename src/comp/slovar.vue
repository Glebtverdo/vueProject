<template>
  <div class="main1">
  <template v-if="scrinSlovar">
  <span class="ypr"> Словарь </span>
  <span class="bSpan"><button class="bSpanButton"  @click="showLang = true" :style="styleRu" >Ru</button> <button class="bSpanButton" @click="showLang = false" :style="styleEn" >En</button>  </span>

  <dl >
<template v-if="compShowLang">

  <template v-for="(i,index) in infoRu"  >
  <dt :key="index"> {{i.name}}<button class="znakButton" @click="znakRu[index].show = ! znakRu[index].show"> {{znakRu[index].znak}} </button></dt>
  <template v-for="v in infoRu[index].value">
  <transition :key="v.value" name="dd" >
  <dd v-if="znakRu[index].show" :key="v.Ru"> {{v.Ru}} - {{v.En}}</dd>
  </transition>
  </template>
  </template>
  </template>
<template v-if="!compShowLang">
  
  <template v-for="(i,index) in infoEn"  >
  <dt :key="index"> {{i.name}}<button class="znakButton" @click="znakEn[index].show = ! znakEn[index].show"> {{znakEn[index].znak}} </button></dt>
  <template v-for="v in infoEn[index].value" >
  <transition :key="v.value" name="dd" >
  <dd v-if="znakEn[index].show" :key="v.En" > {{v.En}} - {{v.Ru}}</dd>
  </transition>
  </template>
  </template>
  </template>
  </dl>
</template>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            znakRu:[],
            znakEn:[],
            showLang: true,
            styleRu:"",
            styleEn:""
        }
    },
computed: {
        ...mapGetters('slovar', {
          infoRu: 'infoRu',
          infoEn: 'infoEn'
         }),
        ...mapGetters({
            scrinSlovar: 'Slovar'
        }),
        compShowLang(){
            if (this.showLang){
                 this.styleRu = " opacity:0.5;"
                 this.styleEn = ""
                return true
            }else{
                 this.styleEn = " opacity:0.5;"
                 this.styleRu = " "
                return false
            }
        }
        },
    created() {
        for(let i = 0; i < this.infoEn.length; i++){
            this.znakRu.push({znak: "+",
            show: false});
            this.znakEn.push({znak: "+",
            show: false})
        }
    },
}

</script>

<style scoped>
.ypr{
    width: 100vw;
    text-align: center;
    font: italic 4em Georgia;
    color: #7f0000;
    background-color:   #e4e4e4;
    max-height: 9vh;
}
.bSpan{
    width: 100vw;
    display: flex;
    background-color: #e3e3e3;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    max-height: 6vh;
}
.bSpanButton{
    flex-basis: 10vw;
    margin: 10px;
     color:  #7f0000;
    background-color: #e3e3e3 ;
    

}
dl{
    min-height: 72vh;
    margin-left: 40vw ;
}
button{
    border: none;
    font: 20px arial;
    
}
:focus{
    outline: none;
    border: none;
}
.main1{
        max-width: 100vw;
        min-height: 88vh;
        flex-wrap: wrap;
        background-color: #e3e3e3;
        }
.znakButton{
    background-color: #e3e3e3;
}
.dd-enter, .dd-leave-to  {
  opacity: 0;
}
.dd-leave-active {
  transition: opacity 1s;
}
.dd-enter-active{
    transition: opacity 1.5s;
}
.dd-enter-to, .dd-leave{
    opacity: 1;
}
@media screen and (max-width: 1280px) {
    .main1{
        min-height: 92vh
        }
   }
@media screen and (max-width: 700px) {
    .ypr{
        font: italic 2.5em Georgia;
    }
    dl{
        margin-left: 20vw ;
    }
}
</style>