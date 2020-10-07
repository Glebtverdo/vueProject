export default {
    namespaced: true,
    state: {
        info: [{
                first: '1. A dedicated server is one that you don`t share with anyone else.It can be used for both web hosting and ',
                second: 'hosting.',
                variants: ['application', 'appliance', 'applied'],
                answer: 'application'
            },
            {
                first: '2. Would you like your application to ',
                second: 'on a dedicated server, or a shared one?',
                variants: ['resolve', 'reside', 'result'],
                answer: 'reside'
            },
            {
                first: '3. A dedicated server has ',
                second: '( = many) advantages over a shared server.',
                variants: ['numbered', 'numeral', 'numerous'],
                answer: 'numerous'
            },
            {
                first: '4. I would like to ',
                second: 'my site from a shared server to a dedicated one.',
                variants: ['transfer', 'transform', 'transplant'],
                answer: 'transfer'
            },
            {
                first: '5. These days, the cost of dedicated hosting has ',
                second: 'considerably.',
                variants: ['lowered', 'downed', 'dropped'],
                answer: 'dropped '
            },
            {
                first: '6. One of the pluses of this hosting plan is that it allows you to ',
                second: '(=change) the server settings',
                variants: ['impersonate', 'customize', 'personify'],
                answer: 'customize'
            },
            {
                first: '7. This plan has no ',
                second: 'limitations. You can download and upload as much data as you like.',
                variants: ['band width', 'information', 'band'],
                answer: 'band width'
            },
            {
                first: '8. A dedicated server is one that you don`t share with anyone else.It can be used for both web hosting and ',
                second: 'hosting.',
                variants: ['application', 'appliance', 'applied'],
                answer: 'application'
            },
            {
                first: '9. A dedicated server is one that you don`t share with anyone else.It can be used for both web hosting and ',
                second: 'hosting.',
                variants: ['application', 'appliance', 'applied'],
                answer: 'application'
            },
            {
                first: '10. A dedicated server is one that you don`t share with anyone else.It can be used for both web hosting and ',
                second: 'hosting.',
                variants: ['application', 'appliance', 'applied'],
                answer: 'application'
            },
        ]
    },
    getters: {
        info(state) {
            return state.info
        }
    }
};