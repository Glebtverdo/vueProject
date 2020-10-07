export default {
    namespaced: true,
    state: {
        info: [{
                first: 'a) An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.',
                answer: 'computer'
            },
            {
                first: 'b) The technique of digitally encoding music or sound and reusing it as part of a composition or recording.',
                answer: 'sampling'
            },
            {
                first: 'c) A description of the distinctive nature or features of someone or something.',
                answer: 'characterization'
            },
            {
                first: 'd) A switching circuit which works by changing from one stable state to another, or through an unstable state back to its stable state, in response to a triggering pulse.',
                answer: 'flip-flop'
            },
            {
                first: 'e) Relating to or produced by colour',
                answer: 'chromatic'
            },
            {
                first: 'f) A minute area of illumination on a display screen, one of many from which an image is composed.',
                answer: 'pixel'
            },
            {
                first: 'g) Take into one`s possession or control by force',
                answer: 'capture'
            },
            {
                first: 'h) A programming structure or process formed by linking a number of separate elements or subroutines, especially each of the tasks executed concurrently in multithreading.',
                answer: 'thread'
            },
            {
                first: 'i) An instance of a disease, injury, or problem',
                answer: 'case'
            },
            {
                first: 'j) Cause (a binary device) to enter the state representing the numeral 0',
                answer: 'reset'
            },
        ],
        infoX: ['chromatic', "case", "pixel", "sampling", "computer", "characterization", "thread", "capture", "flip-flop", "reset"],

    },
    getters: {
        info(state) {
            return state.info
        },
        infoX(state) {
            return state.infoX
        },
    }
};