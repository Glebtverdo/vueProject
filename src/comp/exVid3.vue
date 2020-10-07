<template>
<div class="main">
<router-link :to="{path: '/vid'}" tag="span" class="rl" >Назад</router-link>
 <p class="ypr">Exercise 3</p>
  <span style="margin: 0 0 0 2%">
   <p v-for="(m,indexM) in infoX" :key="indexM">
   <span  v-html="m.first"></span>
   <select :class="shit[indexM].class" @click="onClick($event, indexM)">
  <option class="op"></option>
   <option v-for="(i,index) in info" :disabled="shit[index].dis" :key="index">{{i}}</option>
  </select>
  <br>
   </p>
  </span>
</div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
 data() {
   return {
     shit:[],
     answ:[],
     calcAnswer: 0,
     }
     },
 created() {
   let i = 0;
   while (i < 10) {
    this.shit.push({
    name: this.info[i],
    dis: false,
    index: i,
    class: '',
    });
    i++
    this.answ.push(null);
   }
   },
 computed:{
   ...mapGetters('ex3',{
     infoX: 'info',
     info: 'infoX'

   }),
 },
 methods: {
   onClick(e,i){
      let v = e.target.value;
      if(this.answ[i] != v){
       let name = this.shit.filter(e => e.name == v);
       if (name[0] != undefined) {
         this.shit[name[0].index].dis = true;
         this.calcAnswer++
         if (this.answ[i] != null & this.answ[i]!=v ) {
           let pet = this.shit.filter(e => e.name == (this.answ[i]));
           this.shit[pet[0].index].dis = false;
           this.calcAnswer--
         }
         this.answ[i] = v;
         if (this.calcAnswer== 10) {
          for (let i = 0; i < this.answ.length; i++) {
         if(this.answ[i] == this.infoX[i].answer){
          this.shit[i].class= "green";
          }else{
         this.shit[i].class= "red";
        }
          }
     }
         
      }
      }
     

   }
 },
}

</script>

<style scoped>

.main{
    flex-wrap: wrap;
    height: 85vh;
    
}
.ypr{
    width: 100vw;

    text-align: center;
    font: italic 4em Georgia;
    color: #7f0000;
    background-color:   #e4e4e4;
    margin: 0;
    padding: 0;
    max-height: 9vh;
}
.op{
    display: none;
}
.green{
    background-color:#95e695;
}
.red{
    background-color: #fb8383;
}
p{
    font-size:  1.5em;
    margin: 20px 0;
}
select{
    border: 0.5px solid #460000;
    background-color:  #e4e4e4;
    font-size: 0.85em;
    font-style: italic;
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