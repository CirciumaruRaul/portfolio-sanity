
const skills = {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields:[
        {
            name: 'procent',
            title: 'Procent',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields:[
                {
                    name:'alt',
                    title:'alt',
                    type:'string',
                }
            ]
        },
    ]
}

export default skills;
