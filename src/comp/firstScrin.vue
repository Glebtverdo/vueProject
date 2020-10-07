<template>
  <div class="main1">
  <template v-if="firstScrin">
            <span class="sp1 spanText">
            <p class="sp1_p">
            <transition-group style="flex-direction: column;" appear name="pSpan">
            <span class="sp_text" key="pSpan1">Привет, IT специалист, хочешь,</span>
            <span class="sp_text" v-if="pSpan[1].show" key="pSpan2"> улучшить свой английский?</span>
            <span class="sp_text" v-if="pSpan[2].show" key="pSpan3">Тогда ты попал, куда тебе нужно!</span>
            </transition-group>
            </p>
            </span>
            <span class="sp1 imageSpan">
            <transition appear name="img1">
                <img src="./images/flagUp.jpg">
            </transition>
            <transition  appear name="img2">
                <img class="img1" src="./images/flagDown.jpg">
            </transition>
            </span>
</template>
        </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            pSpan: [],
            i2: -1,
        }
    },
            created() {
                let i = 0;
                while (i < 3) {
                    this.pSpan.push({
                        show: false
                    });
                    i++
                }
            },
            mounted() {
                this.pSpanEnter()
            },
            methods: {
                 pSpanEnter() {
                    if (this.i2 != 2) {
                        this.i2++
                            this.pSpan[this.i2].show = true
                        setInterval(this.pSpanEnter, 1000)
                    }
                },
            },
            computed: {
            ...mapGetters({
                 firstScrin: 'gFirstScrin',
                })
            },
}
</script>

<style scoped>
    .main1 {
        max-width: 100vw;
        min-height: 88vh;
        padding-top: 12vh;
        flex-direction: row;
        background-color: #dfdfdf;
        }
    .sp1_p {
        margin: 10% 0 0 7% ;
        }
    .pSpan {
        min-width: 100%;
        }
    .sp1 {
        font: italic 3em Georgia;
        color: #3f0000;
        width: 48vw;
        margin: 1%;
        margin-top: 5%;
        flex-direction: column;
        }
    .sp_text{
        display: inline-flex;
    }
        .img1{
            margin-top: -11px;
        }
        .pSpan-enter-active {
            animation: slideOnS 4s;
        }
        .img1-enter-active {
            animation: bigger1 5s;
        }
        .img1-leave-active {
            animation: bigger1Out 2s;
        }
        .img2-enter-active {
            animation: bigger2 5s;
        }
        @keyframes slideOnS {
            from {
                transform: translateX(-20vw);
                opacity: 0.3;
            }
            70% {
                transform: translateX(0px);
                opacity: 0.3;
            }
            to {
                opacity: 1;
            }
        }
        
        @keyframes bigger1 {
            from {
                transform: scale(.1) translate3d(1000px, -1000px, -1000px);
            }
            50% {
                transform: scale(.8) translate3d(0px, 0px, 0px);
            }
            to {
                transform: scale(1) rotateY(0deg);
            }
        }
        @keyframes bigger2 {
            from {
                transform: scale(.1) translate3d(1000px, 1000px, -1000px);
            }
            50% {
                transform: scale(.8) translate3d(0px, 0px, 0px);
            }
            to {
                transform: scale(1);
            }
        }
         @keyframes bigger1Out {
            from {
                transform: scale(.1) translate3d(1000px, -1000px, -1000px);
            }
            50% {
                transform: scale(.8) translate3d(0px, 0px, 0px);
            }
            to {
                transform: scale(1) rotateY(0deg);
            }
        }
        @keyframes bigger2Out {
            from {
                transform: translate3d(0px, 0px, 0px);
            }       
            to {
                transform:  translate3d(1000px, 1000px, -1000px);
            }
        }
@media screen and (max-width: 1280px) {
    .spanText{
        font-size: 40px;
        margin-top: 3%;
    }
    .imageSpan{
    margin-top: 7%;
     }
     .main1{
        padding-top: 8vh;
        max-height: 92vh;
        min-height: 20vh
        }
   }
@media screen and (max-width: 850px) {
    .imageSpan{
        opacity: 0.2;
        width: inherit;
        height: inherit;
        margin: 2% 0 0 0;
            }
    .spanText{
        position: absolute;
        z-index: 55;
        margin: 2% 0 0 0;
        width: inherit;
        height: inherit;
    }
    
    
        @keyframes bigger1 {
            from {
                transform:  translateY( -300px) ;
            }
            to {
                transform:  translateY(0);
            }
        }
        @keyframes bigger2 {
            from {
                transform:  translateY(300px);
            }
            to {
                transform:  translateY(0);
            }
        }
}
    

@media screen and (max-width: 600px) {
    .spanText{
        font-size: 25px;
        margin-top: 10%;
    }
}
@media screen and (max-width: 500px) {
    .spanText{
        margin-top: 10%;
    }
}
</style>