const moment = require('moment');
const fs = require('fs')
const data = require('./data.json');

let pets = data.pets

console.log(pets)

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

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
}

const listarPets = () => {
    for (let pet of pets) {
        const resultVacina = pet.vacinado ? "Vacinado" : "Não vacinado"

        console.log(`Nome: ${pet.nome}, Idade: ${pet.idade} anos, Espécie: ${pet.tipo}, Raça: ${pet.raca}, Vacina: ${resultVacina}`)
        console.log('')

        for (let servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`)
        }
    }
}


const darBanhoPet = (pet) => {
    pet.servicos.push({ servico: 'Banho', date: moment().format('MMMM Do YYYY, h:mm:ss a') })
    console.log(`${pet.nome} está de banho tomado!`)
}

const tosarPet = (pet) => {
    pet.servicos.push({ servico: 'Tosa', date: moment().format('MMMM Do YYYY, h:mm:ss a') })
    console.log(`${pet.nome} está com cabelinho na régua!`)
}

const apararUnhasPet = (pet) => {
    pet.servicos.push({ servico: 'Corte de unhas', date: moment().format('MMMM Do YYYY, h:mm:ss a') })
    console.log(`${pet.nome} está de unhas aparadas!`)
}

const vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true
        pet.servicos.push({ servico: 'Vacina', date: moment().format('MMMM Do YYYY, h:mm:ss a') })
        console.log(`${pet.nome} foi vacinado com sucesso!`)
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`)
    }
}

const atenderCliente = (pet, servico) => {
    servico(pet)
}

const campanhaVacina = () => {
    let petsVacinados = 0
    for (let pet of pets) {
        if (!pet.vacinado) {
            vacinarPet(pet)
            petsVacinados++
        }
    }
    console.log(`${petsVacinados} pets foram vacinados nessa campanha!`)
    console.log('')
}

novoCliente('Chewbacca', 'Kaiju', 190, 'Wookiee', 112, 'Han Solo', '(81) 9999-9999', false, [])

listarPets()

campanhaVacina()

atenderCliente(pets[0], darBanhoPet)
atenderCliente(pets[1], apararUnhasPet)
atenderCliente(pets[2], vacinarPet)
atenderCliente(pets[3], tosarPet)
