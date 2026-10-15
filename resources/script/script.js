let users = ["Pedro", "Ana", "Joana", "Diego", "Davi messias", "Cristiano"];

let searchUser = prompt("Digite o nome do usuário que deseja buscar:");

// Lembrando que, meu ususário adm não pode mandar em branco a busca, chamamos isso de tentativa de erros.

if(searchUser === ""){
    console.log("Não pode enviar em branco");
}
else{
    // Retorna o usuário que for encontrado 
    let user = users.filter(user =>
        user.toLowerCase().includes(searchUser.toLowerCase().trim())
    );
    // Devemos tratar também caso a busca não retorne nenhum resultado 

    if(user === undefined){
        // usuário não encontrado 
        users.push(searchUser)
        console.log(users)
    }
    else{
        // console.log("Usuário encontrado: ".concat(user));
        // // buscar indíce do usuário 

        // // let index = users.indexOf(user);
        // console.log(index)

        // // alterar o elemento
        // users[index] = "novo valor";
        // console.log

        // listagem dos itens 
        // users.forEach(element =>{
        //     // read
        //     console.log(user) 
        // });
        
    }
}