const obj = {
    name: 'София',
    icon: file,
    props: {},
    title: {
        type: 1,
        text: ['','']
    },
    footer: {
        type: 1,
        text: ['',''],
        links: ['','']
    },
    pages: [
        {
            name:'Главная страница',
            components: {
                type: 1,
                title: 'Заказать',
                text: 'Описание',
                props: {},
                pictures: [file,file],
                innerComponents: [{
                    title:'',
                    subtitle:'',
                    cost: 30000
                }]
            }
        }
    ]
}