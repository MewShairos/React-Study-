const myPromise = new Promise((resolve, reject) => {

  const nome = "Matheus";

  if (nome === "Matheus") {
    resolve("Usuário Matheus encontrado");
  }
  else {
    reject("Usuário Matheus não encontrado");
  }
})

myPromise.then((data) => {
  console.log(data)
})


//Encadeamento de Then's

const myPromise2 = new Promise((resolve, reject) => {

  const nome = "Matheus";

  if (nome === "Matheus") {
    resolve("Usuário Matheus encontrado");
  }
  else {
    reject("Usuário Matheus não encontrado");
  }
})

myPromise2.then((data) => {
  return data.toLowerCase();
}).then((StringModificada => {
  console.log(StringModificada)
}))

// Retorna do Catch

const myPromise3 = new Promise((resolve, reject) => {

  const nome = "João";

  if (nome === "Matheus") {
    resolve("Usuário Matheus encontrado");
  }
  else {
    reject("Usuário Matheus não encontrado");
  }
})

myPromise3.then((data) => {
  console.log(data)
}).catch((err) => {
  console.log("Aconteceu um erro:" + err)
})

// Resolver várias Promessas 

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 Ok!")
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  resolve("p2 Ok!")
})

const p3 = new Promise((resolve, reject) => {
  resolve("p3 Ok!")
})

const ResolveAll = Promise.all([p1, p2, p3]).then((data) => {

  console.log(data)
})

// Modo Race

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p4 Ok!")
  }, 2000)
})

const p5 = new Promise((resolve, reject) => {
  resolve("p5 Ok!")
})

const p6 = new Promise((resolve, reject) => {
  resolve("p6 Ok!")
})

const ResolveAllRace = Promise.race([p4, p5, p6]).then((data) => {

  console.log(data)
})


// Fetch API request GitHub - - - - - Retorna uma promessa... 

const username = "MewShairos"

fetch(`https://api.github.com/users/${username}`, {
  method: "GET",
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }

}).then((response) => {
  return response.json()
}).then((data) => {
  console.log(`O nome relacionado ao username é: ${data.name}`)
}).catch((err) => {
  console.log("Houve um erro: " + err);
})
