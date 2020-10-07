export default {
    namespaced: true,
    state: {
        info: [{
                first: 'but nowadays this term is used especially for digital computers. Computers that once weighed 30 tons now may weigh as little as 1.8 kilograms. Microchips and ',
                answer: 'computer'
            },
            {
                first: 'have considerably reduced the cost of the electronic components required in a computer. Computers come in many sizes and shapes such as special-purpose, laptop, desktop, minicomputers, supercomputers. <br> Special- purpose computers can perform specific tasks and their',
                answer: 'microprocessors'
            },
            {
                first: 'are limited to the programmes built into their microchips. There computers are the basis for electronic calculators and can be found in thousands of electronic products, including',
                answer: 'operations'
            },
            {
                first: 'watches and automobiles. Basically, these computers do the ordinary arithmetic operations such as addition, subtraction, multiplication and division. <br> General- purpose computers are much more powerful because they can accept new sets of instructions.The smallest fully functional computers are called',
                answer: 'digital'
            },
            {
                first: 'computers. Most of the general-purpose computers known as personal or desktop computers can perform almost 5 million operations <br>',
                answer: 'laptop'
            },
            {
                first: 'Today`s personal computers are know to be used for different purposes: for testing new theories or models that cannot be examined with experiments, as valuable educational tools due to various encyclopedias, dictionaries, educational programmes, in book - keeping, accounting and management.Proper application of computing equipment in different industries is likely to result in proper management, effective distribution of materials and resources, more efficient production and trade. <br> Minicomputers are high-speed computers that have greater ',
                answer: 'per second'
            },
            {
                first: 'manipulating capabilities than personal computers do and that can be used simultaneously by many users. These machines are primarily used by larger businesses or by large research and university centers. The speed and power of supercomputers, the highest class of computers, are almost beyond comprehension, and their',
                answer: 'data'
            },
            {
                first: 'are continually being improved. The most complex of these machines can perform nearly 32 billion calculations per second and store 1 billion characters in',
                answer: 'capabilities'
            },
            {
                first: 'at one time, and can do in one hour what a desktop computer would take 40 years to do. They are used commonly by government agencies and large research centers. Linking together networks of several small computer centers and',
                answer: 'memory'
            },
            {
                first: 'them to use a common language has enabled engineers to create the supercomputer. The aim of this technology is to elaborate a machine that could perform a trillion calculations per second.',
                answer: 'programming'
            },
        ],
        infoX: ['computer', "microprocessors", "operations", "digital", "laptop", "per second", "data", "capabilities", "memory", "programming"],

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