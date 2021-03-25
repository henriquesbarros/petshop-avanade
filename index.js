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
        vacinado: true,
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
        vacinado: false,
        servicos: ['banho']
    }
]

const listarPets = () => {
    for (let pet of pets) {
        console.log(pet.nome)
    }
}

listarPets()