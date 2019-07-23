const users = [{
        id: 'one',
        name: 'dan'
    },
    {
        id: 'two',
        name: 'andrew'
    },
]

const converted = Object.keys(users).map(function(id)

    {
        return [Number(id), Object[name]];

    });

console.log(converted);