<template>
<span>
        <div class="main" id="1">
            <transition name="span2" appear>
                <span class="s"> ESP: IT</span>
            </transition>
           <template v-if="width">
            <transition  v-for="(i, index) in info" :key="index" name="span1" appear @after-enter="afterEnter()">
                <span v-if="i.show" class="s"  :key="index">
                        <span class=" sB" :class="dtShow[index].style" @click="spanScroll(coordinate[index], index)">{{i.name}}</span>
                </span>
            </transition>
            </template>
            <div class="iconSpan" v-if="!width" @click="newShow">
            <p>
            fuck<br>
            fuck
            </p>
            </div>
        </div>
        <span   class="nwe">
                <dl  class="block"  >
                 <transition  v-for="(i, index) in info" :key="index" name="span3" @after-enter="afterEnter2()" @after-leave="afterLeave()">
                        <dt v-if="dtShow[index].show"  :key="index"  @click="spanScroll(coordinate[index], index)">{{i.name}}</dt>
                </transition>
                </dl>
            </span>
</span>
</template>

<script>
export default {
    data() {
        return {
            info: [{
                    name: "Главная ",
                    show: true,
                    to:"1"
                 },// {
                //     name: "О проекте ",
                //     show: false,
                //     to:"2"
                // },
                  {
                    name: "Упражнения ",
                    show: false,
                    to:"3"
                }, {
                    name: "Словарь ",
                    show: false,
                    to:"4"
                }, ],
                dtShow:[],
                i: 0,
                i2: 0,
                show: false,
                wind: document.documentElement.clientWidth,
                tall: document.documentElement.clientHeight,
                timer: '',
                able: true,
                coordinate:[],
                newAble: true,

                
        }
    },
    computed: {
        width(){
            if(this.wind < 750){
                while (this.i != 0){
                    this.i--
                    this.info[this.i].show = false;
                    
                }
                this.newAble= false;
                return false
            }else
            {this.info[0].show = true;
            this.newAble= true;
            this.i2 == 2 ? this.afterLeave() : 0
            return true }
            
        },
    },
    methods: {
                afterEnter() {
                    if (this.i != 2) {
                        this.i++
                            this.info[this.i].show = true

                    }
                },
                afterEnter2() {
                    if (this.i2 <= 2 & this.dtShow[2].show != true) {
                            this.dtShow[this.i2].show = true;
                            this.i2 == 2 ? this.newAble = true : this.i2++
                    }
                    },
                afterLeave(){
                    if (this.i2 >= 0) {
                            this.dtShow[this.i2].show = false
                             this.i2 > 0 ? this.i2-- : 0
                    }
                },
                newShow(){
                    if (this.show == false) {
                        this.afterEnter2()
                    }else{
                         this.afterLeave()
                    }
                    this.show = !this.show
                },
                spanScroll(i, index){
                        
                    if (this.newAble) {
                    if(this.i2 == 2){
                        this.newAble = false
                        console.log(this.i2);
                        this.show = !this.show
                        this.afterLeave()
                        //this.able= false
                    }
                    let scrollI = window.pageYOffset
                    if (scrollI !=i) {
                        clearInterval(this.timerPulse)
                        clearInterval(this.timerMinus)
                         i > scrollI ? this.scrollAnimationPulse( i ,scrollI) : this.scrollAnimationMinus( i ,scrollI)
                    }
                    }
                },
                scrollAnimationPulse(value,i){
                    var timerPulse = setInterval( function(){
                    i+= 3;
                    window.scrollTo(0, i);
                    value > i ? 0 :  clearInterval(timerPulse)
                    }, 3) 
                },
                scrollAnimationMinus(value,i){
                    var timerMinus = setInterval( function(){
                    i-= 3;
                    window.scrollTo(0, i);
                    value < i ? 0 : clearInterval(timerMinus);
                    }, 3) 
                },
                 handleScroll (event) {
                    if(this.i2 == 2){
                        this.show = !this.show
                        this.afterLeave()
                    }
                    if ( window.pageYOffset <=  this.coordinate[1] - this.tall/10 ) {
                        this.dtShow[0].style = "boder";
                        this.dtShow[1].style = "";
                        this.dtShow[2].style = "";
                    }else if ( window.pageYOffset <=  this.coordinate[2] - this.tall/10 ) {
                        this.dtShow[0].style = "";
                        this.dtShow[1].style = "boder";
                        this.dtShow[2].style = "";
                    }else  {
                        this.dtShow[0].style = "";
                        this.dtShow[1].style = "";
                        this.dtShow[2].style = "boder";
                    }
                    // if ( window.pageYOffset <=  this.coordinate[1] - this.tall/5) {
                    //     console.log(this.coordinate[1])
                    //     this.$store.commit('firstScrinTrue');
                    //     this.$store.commit('excercisesFalse');
                    //     this.$store.commit('slovarFalse');
                    // }else if ( window.pageYOffset <=  this.coordinate[2] - this.tall/5) {
                    //     this.$store.commit('firstScrinFalse');
                    //     this.$store.commit('excercisesTrue');
                    //     this.$store.commit('slovarFalse');
                    // }else  {
                    //     this.$store.commit('firstScrinFalse');
                    //     this.$store.commit('excercisesFalse');
                    //     this.$store.commit('slovarTrue');
                    //  }
                }// this.$store.commit('setCnt', value);
        },
    created() {
        window.addEventListener('resize' , () => {
                this.wind = document.documentElement.clientWidth;
                this.tall= document.documentElement.clientHeight;
            });
         window.addEventListener('scroll', this.handleScroll);
        let i = 0;
        while (i!=3) {
            this.dtShow.push({
                style: '',
                show: false,
            })
            i++
        }
    },
   beforeUpdate() {
       
        let main = document.getElementsByClassName('main1');
        let top = document.getElementById('1');
         top = top.getBoundingClientRect();
        if (this.able) {
            for (let i = 0; i < main.length; i++) {
            this.coordinate[i] = main[i].getBoundingClientRect().y ;
            this.coordinate[i] -= this.coordinate[i] != 0 ?  top.height : 0;
        }
        this.handleScroll()
        this.able = false
        }
        
    },
    // updated(){
    //     let main = document.getElementsByClassName('main1')
    //     for (let i = 0; i < main.length; i++) {
    //         this.coordinate[i] =  main[i].getBoundingClientRect().y
    //         console.log( this.coordinate[i]);
    //     }
    // },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

}
</script>

<style scoped>
.span1-enter-active {
    animation: slideIn 1s;
}

.span2-enter-active {
    animation: slideOn 2s;
}
.span3-enter-active {
    animation: slideSOn 1s;
}
.span3-leave-active {
    animation: slideSOut 0.5s;
}

 .iconSpan{
     margin: 0 10px 0 auto;
     width: 50px;
 }

.main {
    width:100vw;
    max-height: 12vh;
    height: 12vh;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    background-color: #660000;
    position: fixed;
    z-index: 100;
}
dt{
    padding: 10px;
    background-color: #690f0f;
    min-width: 245px;
}
.m{
    width: calc(100vw / 4 * 3 - 120px);
    justify-content: space-between;
}
.block{
    margin: 0 0 0 auto;
}
.nwe{
    position: fixed;
    z-index: 90;
    color: #dfdfdf;
    font: italic 40px Georgia;
    margin: 8vh 0 0 0;
    width: calc(100vw - 17px);
    display: flex;

}
.s {
    min-width: calc(100vw / 4 - 40px );
    font: italic 3.2em Georgia;
    color: #dfdfdf;
    padding: 20px;

}

.sB {
    background-color: #690f0f;
    color: inherit;
    font: inherit;
    border: none;
    text-align: justify;
    padding: 1%;
    cursor: pointer;
}
.boder{
    opacity: 0.7;
}
@keyframes slideIn {
    from {
        transform: translateX(80vw);
    }
    to {
        transform: translateX(0px);
    }
}

@keyframes slideOn {
    from {
        transform: translateX(-20vw);
    }
    to {
        transform: translateX(0px);
    }
}
@keyframes slideSOn {
    from {
        transform: translateX(-100vw);
    }
    to {
        transform: translateX(0px);
    }
}
@keyframes slideSOut {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100vw);
    }
}
@media screen and (max-width: 1280px) {
    .s{font-size: 30px;}
    .main{
        height: 8vh;
        }
   }
@media screen and (max-width: 760px) {
    .s{font-size: 50px;}
}
</style>