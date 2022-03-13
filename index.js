const users = [
"Samanta Coitinho Anchieta",
"Maiara Oliveira",
"Maria Oliveira",
"Daniel Vitor Fim Moreto",
"Simone Medianeira",
"Andre Anchieta",
"Marjorie Mont-alverne"
];

const userslistArr = []

function retornaSobrenome(value) {
    return value[value.length - 1].replace('-', '');

}

function retornaPrimeiraLetraPrimeiroNome(value) {
    return value[0].substring(0, 1);
}

function retornaNomesMeio(value) {
    value.pop();
    value.shift();
    return value;
}

function primeiraLetraNomesMeio(value) {
    let primeiraLetraNome = "";
    if (value.length > 0) {
        for (const meio of value) {
            primeiraLetraNome = 
            primeiraLetraNome !== " " 
            ? `${primeiraLetraNome}.${meio.substring(0, 1)}`
            : `.${meio.substring(0, 1)}`;
        }
    }
    return primeiraLetraNome;

}

for (const user of users) {
    const arrStringUser = user.normalize("NFD").split(" ");

// sobrenome //
const sobrenome = retornaSobrenome(arrStringUser);

// primeira letra do primeiro nome //
const primeiraLetraPrimeiroNome = retornaPrimeiraLetraPrimeiroNome(arrStringUser);

const arrayNomesMeio = retornaNomesMeio(arrStringUser);

// primeira letra nome meio //
const primeiraLetraNome = primeiraLetraNomesMeio(arrayNomesMeio);

let usuario = `${sobrenome}.${primeiraLetraPrimeiroNome}${primeiraLetraNome}`.toLowerCase()

// adicionando numero sequencial para e-mail repetido //

let numero = 1;
while (userslistArr.includes(usuario)) {
    usuario = usuario.replace(numero, "");
    numero = numero + 1;
    usuario = `${usuario}${numero}`;
    }
    userslistArr.push(usuario);
}

const listagemDeUsuarios = [];
for (const user of userslistArr) {
    listagemDeUsuarios.push(`${user}@company.com`);
}
console.log(listagemDeUsuarios);