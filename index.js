const nomePetshop = 'PETSHOP AVANADE';

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
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Rufos',
        tipo: 'Hamster',
        idade: 1,
        raca: null,
        peso: '450g',
        tutor: 'Henrique',
        contato: '(81) 98774-1992',
        vacinado: false,
        servicos: ['banho']
    },
    {
        nome: 'Scooby',
        tipo: 'Pastor alemão',
        idade: 6,
        raca: null,
        peso: 4,
        tutor: 'Henrique',
        contato: '(81) 98774-1992',
        vacinado: true,
        servicos: ['banho']
    }
]

let i = 0

const vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true
        console.log(`${pet.nome} foi vacinado com sucesso!`)
        i++
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`)
    }
}

for (pet of pets) {
    vacinarPet(pet)
}

console.log(`${i} pets foram vacinados nessa campanha!`)



