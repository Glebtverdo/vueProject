<template>
  <span >
     <p>{{info.first}}
      <select v-model="answer" :class="sClass" >
    <option class="op"></option>
    <option v-for="m in info.variants" :key="m" >{{m}}</option>
     </select>
    {{info.second}}
     </p>
   </span>
</template>

<script>
export default {
    props:['info'],
    data() {
        return {
            answer:'1'
        }
    },
    computed: {
         sClass(){
             if (this.answer != 1) {
                 
             
             if( this.answer == this.info.answer) {
                 return "green"
             }else{
                 return "red"
             }
             }
         }
    },
        
}
</script>

<style scoped>
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
}
select{
    border: 0.5px solid #460000;
    background-color:  #e4e4e4;
    font-size: 0.85em;
    font-style: italic;
}
</style>