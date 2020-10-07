import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import ex1 from './modules/ex1';
import ex2 from './modules/ex2';
import ex3 from './modules/ex3';
import slovar from './modules/slovar';

export const store = new Vuex.Store({

    state: {
        firstScrin: true,
        excercises: true,
        scrinSlovar: true
    },
    getters: {
        gFirstScrin(state) {
            return state.firstScrin
        },
        Excercises(state) {
            return state.excercises
        },
        Slovar(state) {
            return state.scrinSlovar
        },
    },
    mutations: {
        firstScrinTrue(state) {
            state.firstScrin = true
        },
        firstScrinFalse(state) {
            state.firstScrin = false
        },
        excercisesTrue(state) {
            state.excercises = true
        },
        excercisesFalse(state) {
            state.excercises = false
        },
        slovarTrue(state) {
            state.scrinSlovar = true
        },
        slovarFalse(state) {
            state.scrinSlovar = false
        },
    },
    modules: {
        ex1,
        ex2,
        ex3,
        slovar
    }
})