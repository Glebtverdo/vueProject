import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import FirstScrin from "./comp/exVid.vue";
import ex1 from './comp/exVid1.vue';
import ex2 from './comp/exVid2.vue';
import ex3 from './comp/exVid3.vue';
import ex4 from './comp/exVid4.vue';

const routes = [{
        path: '',
        redirect: { name: 'vid' }
    },
    {
        path: "/vid",
        name: "vid",
        component: FirstScrin
    }, {
        path: "/vid/1",
        component: ex1
    },
    {
        path: "/vid/2",
        component: ex2
    },
    {
        path: "/vid/3",
        name: 'vid3',
        component: ex3
    },
    {
        path: "/vid/4",
        component: ex4
    },

];
export const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
        if (to == from) {
            return { x: 0, y: 0 }
        }

    },
    mode: "history"
});