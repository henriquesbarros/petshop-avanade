const moment = require('moment');

let pets = [
    {
        nome: 'Costelinha',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso: 3,
        tutor: 'Doug',
        contato: '(81) 98774-1992',
        vacinado: false,
        servicos: []
    },
    {
        nome: 'Rufos',
        tipo: 'Hamster',
        idade: 1,
        raca: null,
        peso: '450g',
        tutor: 'Henrique',
        contato: '(81) 98774-1992',
        vacinado: true,
        servicos: []
    },
    {
        nome: 'Scooby',
        tipo: 'Pastor alemão',
        idade: 6,
        raca: null,
        peso: 4,
        tutor: 'Henrique',
        contato: '(81) 98774-1992',
        vacinado: false,
        servicos: []
    }
]

let i = 0

const novoCliente = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) => {
    pets.push({
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        contato: contato,
        vacinado: vacinado,
        servicos: servicos
    })
}

novoCliente('Nasus', 'Hamster', 2, 'sei não', 4, 'Henrique', '(81) 98774-1992', false, [])

const darBanhoPet = (pet) => {
    pet.servicos.push({ servico: 'Banho', date: moment().format() })
    console.log(`${pet.nome} está de banho tomado!`)
}

const tosarPet = (pet) => {
    pet.servicos.push({ servico: 'Tosa', date: moment().format() })
    console.log(`${pet.nome} está com cabelinho na régua!`)
}

const apararUnhasPet = (pet) => {
    pet.servicos.push({ servico: 'Corte de unhas', date: moment().format() })
    console.log(`${pet.nome} está de unhas aparadas!`)
}

const vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true
        console.log(`${pet.nome} foi vacinado com sucesso!`)
        i++
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`)
    }
}

const campanhaVacina = () => {
    for (pet of pets) {
        vacinarPet(pet)
        darBanhoPet(pet)
        tosarPet(pet)
        apararUnhasPet(pet)
        console.log('')
    }
    console.log(`${i} pets foram vacinados nessa campanha!`)
}

campanhaVacina()










