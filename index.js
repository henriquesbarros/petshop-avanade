const moment = require('moment');
const fs = require('fs')
const data = require('./data.json');

let pets = data.pets

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

const atualizarBanco = () => {
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
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
        pet.servicos.push({ nome: 'Vacina', data: moment().format('MMMM Do YYYY, h:mm:ss a') })
        console.log(`${pet.nome} foi vacinado com sucesso!`)
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`)
    }
}

const atenderCliente = (pet, servico) => {
    console.log("Olá, seja bem vindo!")
    servico(pet)
    console.log("Até mais, obrigado pela preferência!")
}

const campanhaVacina = () => {
    let petsVacinados = 0

    pets.map(pet => {
        if (!pet.vacinado) {
            vacinarPet(pet)
            petsVacinados++
        }
    })

    console.log(`${petsVacinados} pets foram vacinados nessa campanha!`)
    console.log('')
}

const buscarPet = (pet) => {
    const found = pets.find(petAtual => petAtual.nome == pet.nome)
    console.log(found)
}
    
const filtrarEspeciePet = (especiePet) => {
    const especiesFiltradas = pets.filter(pet => pet.especie == especiePet)
    console.log(especiesFiltradas)
}

const clientePremium = (pet) => {
    const contadorServicos = pet.servicos.map(servico => 1)
    console.log(contadorServicos)

    if (contadorServicos != 0) {
        let numeroDeServicos = contadorServicos.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual
        })

        switch (numeroDeServicos) {
            case 1:
                console.log(`Você realizou ${numeroDeServicos} serviço(s)!`)
                console.log("Realize mais um serviço para obter 10% de desconto")
                break
            case 2:
                console.log(`Você realizou ${numeroDeServicos} serviço(s)!`)
                console.log("Parabéns você obteve 10% de desconto!")
                break
            case 3:
                console.log(`Você realizou ${numeroDeServicos} serviço(s)!`)
                console.log("Parabéns, você obteve 20% de desconto!")
                break
            default:
                console.log(`Você realizou ${numeroDeServicos} serviço(s)!`)
                console.log("Parabéns, você obteve 30% de desconto!")
        }
    } else {
        console.log("Gostaria de realizar algum serviço?")
    }
} 

const listarPets = () => {
    pets.forEach(pet => {
        const resultVacina = pet.vacinado ? "Vacinado" : "Não vacinado"
        console.log(`Nome: ${pet.nome}, Idade: ${pet.idade} anos, Espécie: ${pet.especie}, Raça: ${pet.raca}, Vacina: ${resultVacina}`)
        for (let servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`)
        }
        console.log('')
    })
}


// novoCliente('Chewbacca', 'Kaiju', 190, 'Wookiee', 112, 'Han Solo', '(81) 9999-9999', false, [])

// listarPets()

// campanhaVacina()

// atenderCliente(pets[1], darBanhoPet)

// buscarPet(pets[3])

// filtrarEspeciePet("Felis silvestris catus")

// clientePremium(pets[0])

// atualizarBanco()



