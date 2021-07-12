// assim é definido a tipagem
type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }
}

// aqui nos parâmetros informamos que a função vai receber um argumento do tipo User
function showWelcomeMessage(user: User){
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

// chamando a função e passando parâmetros conforme o tipo, o código fica intuitivo e da dica do que precisa ser enviado.
showWelcomeMessage({
    name: 'John Doe',
    email: 'john@doe.com',
    address:{
        city: 'New York',
        state: 'NY',
    }
});